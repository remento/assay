'use strict';
var config = require.main.require('./config'),
    generate = require('project-name-generator'),
    client = require('./client'),
    projects = {}, // registry of projects by code name for easy lookup
    sync = require('./sync')
    ;

// options: {{websiteUrl:'http://user:pw@www.danmoore.org:81/phat/kettle#!/booo/bah/bang?pooh=bear'}}
var Project = function (opt) {
    let options = this.options = opt || {};
    this.code = null;
    this.client = null;
    this.created = new Date();
    this.generateProjectCode();
    this.client = client.create(options, this);
};

Project.prototype.getUrl = function(){
    return [null,config.projectsUrlPathSegment,this.code,null].join('/'); // example:  /projects/my-project/
};

Project.prototype.generateProjectCode = function(){
    if (this.code){
        throw "Project already has a code";
    }
    let code = generate({ words: config.projectNumberWords}).dashed;
    if (projects.hasOwnProperty(code)){
        // unexpected project code name collision... try again...
        console.warn('Project code name collision, trying again...', code);
        return this.generateProjectCode();
    }else{
        this.code = code;
        projects[code]=this;
    }
};

// --                        -- //
// --    Expose Interface    -- //
// --                        -- //
exports.create = function (options) {
    let project = new Project(options);
    sync.sendProject(project);
    console.log('projects.js: Project created:', project.code);
    return project;
};

exports.fetch = function (projectCode) {
    return new Promise(function(resolve, reject) {
        // use promise as it may be async in future - add timeout check and reject -
        let project = projects[projectCode];
        if (project){
            resolve(project);
        }else{
            reject('NOT_FOUND');
        }
    });
};

exports.fetchUrl = function (projectCode) {
    return exports.fetch(projectCode)
        .then(function(project){
            return new Promise(function(resolve){
                resolve(project.getUrl());
            });
        });

};

