import React from 'react';
import firebase from 'firebase/app';
import sync from '../services/DataSyncService';
//import reactfire from 'reactfire'; //not used per mixin depreciation w/ES6

class ProjectListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.projects = [];
        this.pendingInitLoad = true;
    }

    //@see https://github.com/firebase/reactfire/blob/master/docs/guide.md
    componentWillMount() {
        //console.log('ProjectListComponent:componentWillMount:firebase',firebase);
        let projRef = firebase.database().ref("projectList");
        projRef.on('child_added', function(projectSnap){
            //called for each existing project on load
            console.log('projectList:child_added', projectSnap);
            this.pendingInitLoad = false; // assumes always at least one proj
            this.projects.push(projectSnap.val());
            this.setState({
                pendingInitLoad: this.pendingInitLoad,
                projects: this.projects
            });
        }.bind(this));
    }

    //
    render() {
        return (
            <div className="ProjectListComponent" key={this.pendingInitLoad}>
                {this.pendingInitLoad ? (
                    <p>Loading...</p>
                ):(
                    <div>
                        <p>Project count: ({this.projects.length})</p>
                        <ProjectList value={this.projects} />
                    </div>
                )}
            </div>
        );
    }
}

// displays the actual project record/row
class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.projects = props.value;
    }
    render() {
        var projects = this.projects;
        return (
            <ol>
                {projects.map( (project) =>
                    <ProjListItem key={project.code} value={project}/>
                )}
            </ol>
        );
    }
}

// displays the actual project record/row
class ProjListItem extends React.Component {
    constructor(props) {
        super(props);
        this.project=props.value;
    }
    render() {
        let p = this.project;
        return (
            <li>
                <a href={'/projects/' + p.code + '/'}>
                    {p.code}
                </a> is proxying: {p.source.host}
            </li>
        );
    }
}

export default ProjectListComponent;
