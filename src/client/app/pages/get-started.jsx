import React from 'react';
import {render} from 'react-dom';
//import TrafficList from './../components/RequestTrafficComponent.jsx';
import ProjectListComponent from './../components/ProjectListComponent.jsx';

class App extends React.Component {

    constructor (props) {
        super(props);
        console.log('page:get-started');
    }

  render () {
    return (
      <div>


        <h1>Getting Started</h1>

        <h2>Start a new project</h2>
        <em>new project form</em>

        <p>Join a  already in progress...</p>
        <ProjectListComponent />

      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
