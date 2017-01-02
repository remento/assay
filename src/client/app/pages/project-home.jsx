import React from 'react';
import {render} from 'react-dom';
import RequestTrafficComponent from './../components/RequestTrafficComponent.jsx';
import ModifyRequestComponent from './../components/ModifyRequestComponent.jsx';
import ModifiedRequestsListComponent from './../components/ModifiedRequestsListComponent.jsx';
//import ProjectListComponent from './../components/ProjectListComponent.jsx';


class App extends React.Component {
  render () {
    return (
         <div>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-team" role="tab">
                        Team
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab-traffic" role="tab">
                        Traffic
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-modified-traffic" role="tab">
                        Modified Traffic
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-code-workspace" role="tab">
                        Code Workspace
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-automate" role="tab">
                        Automate &amp; Test
                    </a>
                </li>

            </ul>

            <div className="tab-content">
                <div className="tab-pane" id="tab-team" role="tabpanel">
                    <p className="lead">Project Team</p>
                    <p>
                        Everyone who has access to the project - either to edit or to view.
                    </p>

                    <p className="lead">This project was created by:</p>
                    <ul>
                        <li>Evelyn</li>
                    </ul>

                    <p className="lead">Fine upstanding individuals who can edit responses:</p>
                    <ol>
                        <li>Penny</li><li>Jenn</li>
                    </ol>

                    <p className="lead">Observers</p>
                    <ol>
                        <li>Don</li><li>Bill</li><li>George</li>
                    </ol>
                </div>
                <div className="tab-pane active" id="tab-traffic" role="tabpanel">
                    <p className="lead">Traffic Report</p>
                    <p>
                        All recent traffic that has come through the proxy is displayed here
                        <br />
                        <small>
                            Content cached by the browser will not generate a request to
                            the proxy
                        </small>
                    </p>
                    <RequestTrafficComponent />
                </div>
                <div className="tab-pane" id="tab-modified-traffic" role="tabpanel">
                    <p className="lead">Modified Traffic</p>
                    <p>The items here have been modified so that they do not passthrough to the source site.</p>
                    <ModifiedRequestsListComponent />

                </div>
                <div className="tab-pane" id="tab-code-workspace" role="tabpanel">
                    <p className="lead">Code Workspace</p>
                    <p>The code workspace is a place for files to be edited and tweaked before being sent to the browser.</p>
                </div>
                <div className="tab-pane" id="tab-automate" role="tabpanel">
                    <p className="lead">Automate &amp; Test</p>
                    <p>Select automated actions for the proxy to take on the site.</p>
                    <ul>
                        <li>Image Optimization
                            <ul>
                                <li>Simple Optimization</li>
                                <li>Optimization with Resize (render big browser &amp; adjust size)</li>
                            </ul>
                        </li>
                        <li>Responsive Images
                            <ul>
                                <li>Replace image tags with HTML5 Picture</li>
                                <li>Creates multiple images for different size screens (viewports)</li>
                            </ul>
                        </li>
                        <li>JavaScript Experiments
                            <ul>
                                <li>Collect all scripts (including embeded) and move to footer</li>
                                <li>Concatenate all scripts</li>
                                <li>Concatenate just self hosted scripts</li>
                                <li>Minify selected scripts</li>
                            </ul>
                        </li>
                        <li>CSS Experiments
                            <ul>
                                <li>Collect and concatenate just linked CSS Sheets</li>
                                <li>Collect and concatenate all CSS including embeded</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>

            <ModifyRequestComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
