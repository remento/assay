import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';
moment.locale(window.assay.locale);

class App extends React.Component {
  render () {
    return (
      <div>
        <p>React seems to be running</p>
      </div>
    );
  }
}

let appEl = document.getElementById('app');
if (appEl){
    render(<App/>, document.getElementById('app'));
}
