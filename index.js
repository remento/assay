//
// Start server normally:
//      node index.js
// Start server with debugger:
//      node --inspect index.js
//

'use strict';

console.log();
console.log();
console.log('Starting up...', Date());


// --                   -- //
// --     Configure     -- //
// --                   -- //

var config = require('./config'), // creates global: require.main.require('config') for future ref to avoid require('./../../config') syntax
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    instance = require('./src/server/services/instance'),
    projects = require('./src/server/services/projects'),
    app = express(),
    port = config.port;

// Configure view engine to ejs and change default view dir (default: ./views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/server/views'));

// Enable parsing of form bodies - enable options as needed, example: app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// --                 -- //
// --     ROUTING     -- //
// --                 -- //


// Static file server
app.use('/public', express.static('src/client/public')); // build ui files
app.use('/images', express.static('src/client/images'));
app.use('/css', express.static('src/client/css'));
app.use('/libs/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/libs/tether', express.static('node_modules/tether/dist'));
app.use('/libs/jquery', express.static('node_modules/jquery/dist'));




// Route GET: /
// homepage
app.get('/', function (req, res) {
    res.render('pages/index',renContext());
});

// Route GET: /getStarted
// Enter site or project code
app.get('/get-started', function (req, res) {
    res.render('pages/get-started',renContext());
});

// Route GET: /projects/:projectCode/
app.get('/projects/:projectCode/', function(req, res) {
    projects.fetch(req.params.projectCode)
    .then(function(project){
        res.render('pages/project-home', renContext(project));
    }).catch(function(err){
        res.status(404).render('pages/project-not-found',renContext());
    });
});

// Route GET: /projects/project-not-found
// a special 404 page for when users lookup, or nav to a project that does not exist
app.get(config.project404, function (req, res) {
    res.status(404).render('pages/project-not-found',renContext());
});

// Route POST: /project
// Create or join a project: an interim page that redirects to project or error
app.post('/project', function (req, res, next) {
    let projectCode = req.body && req.body.projectCode; // request to join
    let websiteUrl = req.body && req.body.websiteUrl; // start a new project
    if (projectCode){
        redirectToProject(projectCode, res, 303);
        return;
    }else if (websiteUrl) {
        startNewProject(websiteUrl, res, 303);
        return;
    }
    // We got something but we don't know what to do with it!
    res.status(500).render('pages/incomprehensible',renContext());
    return;
});


// --                    -- //
// --    Server Start    -- //
// --                    -- //

app.listen(port, function () {
    console.log();
    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~');
    console.log();
    console.log('Assay is running and listening on port:', port);
    console.log('    Firebase URL:', config.firebaseDatabaseURL);
    console.log('    Proxy Instance:', instance.name);
    console.log();
    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~');
    console.log();
});


// --                        -- //
// --    Helpers (hoisted)   -- //
// --                        -- //

// one place to build the context for our rendering calls
function renContext(project) {
    return {
        project: project || {},
        config: config
    };
}

// redirectToProject
// @param projectCode [string]: User provided code of the project to join
// @param res [object]: express response object
// @param statusCode [number]: 301 perm, 302 temp, 303 See Other -- use 303 if redirecting from a form post
function redirectToProject(projectCode, res, statusCode) {
    projects.fetchUrl(projectCode)
        .then(function (projectUrl) {
            if (projectUrl) {
                // success: redirect to project page
                return res.redirect(statusCode || 302, projectUrl);
            }
        })
        .catch(function () {
            // failure: redirect - no such project code found
            return res.redirect(statusCode || 302, config.project404);
        });
}

// startNewProject
// @param websiteUrl [string]: User defined URL of the site to inspect
// @param res [object]: express response object
// @param statusCode [number]: 301 perm, 302 temp, 303 See Other -- use 303 if redirecting from a form post
function startNewProject(websiteUrl, res, statusCode) {
    let project = projects.create({
        websiteUrl: websiteUrl
    }),
    gotoUrl = project.getUrl();
    console.log('index.js: Project url:', gotoUrl);
    res.redirect(statusCode || 303, gotoUrl);
}
