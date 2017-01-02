//http://v4-alpha.getbootstrap.com/components/modal/#
import React from 'react';
import sync from '../services/DataSyncService';
import moment from 'moment';
moment.locale(window.assay.locale);

//   Example call to activate:
//   <a href="#" data-toggle="modal" data-target="#modifyRequestModal"
//        data-opt-key={r.optKey} data-method={r.method} data-show-name={r.showName} data-url={r.url}>
//        <div>Modify</div>
//    </a>
//

class ModifyRequestComponent extends React.Component {

    constructor(props) {
        super(props);
        this.$modal = null;
        this.state = this.getNullData();
    }

    getNullData(){
        return {ready: false, existing: false, method: null, url: null, showName: null, optKey: null, requestAction: 'proxy', redirectURL: '', editorFile:'', meta: null};
    }



    onHidden(){
        console.log('modifyRequestModal hidden');
        this.setState(this.getNullData());
    }

    componentWillMount() {
        // default the state
        this.setState({
            data: this.getNullData()
        });
    }

    onRequestActionUserChange (e) {
        //this.setState({requestAction: e.currentTarget.value});
        return this.onInputUpdated(e);
    }

    onInputUpdated(e) {
        let obj = {},
            fieldName = e.currentTarget.getAttribute('name');
        obj[fieldName] = e.currentTarget.value;
        this.setState(obj);
    }

    // data only includes optKey, and meta (showName, url, method) - saved options need to be looked up
    onShow(data){
        console.log('modifyRequestModal updated: ', data);
        // could already be options saved - look them up
        sync.getModifiedRequestValue(data.optKey, function(existing){
            let newData = existing || data;
            // copy meta data down and mark existing
            newData.existing = !!existing;
            // modal is now ready to display
            newData.ready = true;
            this.setState(newData);
        }.bind(this));
    }

    getFormData() {
        let s = this.state;
        return {
            optKey:         s.optKey,
            requestAction:  s.requestAction,
            redirectURL:    s.redirectURL,
            editorFile:     s.editorFile,
            method:         s.method,
            url:            s.url,
            showName:       s.showName
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        sync.saveModified(this.getFormData())
            .then(function(err){
                if (err){
                    console.warn('modifiy request save error:', err);
                }else{
                    this.hideModal();
                }
            }.bind(this));
    }

    //
    render() {
        let d = this.state;
        return (
            <div className="ModifyRequestComponent">
                <div className="modal fade " id="modifyRequestModal" tabIndex="-1" role="dialog" aria-labelledby="modifyRequestModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 className="modal-title" id="modifyRequestModalLabel">
                                         Modify Request
                                        <small>
                                            <div>
                                                <code>{d.method}:</code>
                                                <span>{d.showName}</span>
                                            </div>
                                            <div><small>{d.url}</small></div>
                                            <small><small>sig: <span>{d.optKey}</span></small></small>
                                        </small>
                                    </h4>
                                </div>
                                <div className="modal-body">
                                    <p className="lead">
                                        How should future requests like this be treated?
                                    </p>
                                    {inputRequestAction.call(this)}
                                    <div>
                                        {d.requestAction=== 'proxy' ? detailsProxy.call(this) : null}
                                    </div>
                                    <div>
                                        {d.requestAction=== '302' ? details302.call(this) : null}
                                    </div>
                                    <div>
                                        {d.requestAction=== 'cache' ? detailsCache.call(this) : null}
                                    </div>
                                    <div>
                                        {d.requestAction=== 'replaceFromUrl' ? detailsReplaceFromUrl.call(this) : null}
                                    </div>
                                    <div>
                                        {d.requestAction=== 'replaceFromEditor' ? detailsReplaceFromEditor.call(this) : null}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary mr-1" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

        function inputRequestAction () {
            let onReqActChange = this.onRequestActionUserChange.bind(this);
            return (
                <ol>
                    <li>
                        <label className="align-top">
                            <input className="mr-1"
                                type="radio" name="requestAction"
                                value="proxy"
                                checked={this.state.requestAction === 'proxy'}
                                onChange={onReqActChange}
                                />
                            Passthrough
                        </label>
                    </li>
                    <li>
                        <label className="align-top">
                            <input className="mr-1"
                                type="radio" name="requestAction"
                                value="cache"
                                checked={this.state.requestAction === 'cache'}
                                onChange={onReqActChange}
                                />
                            Use cache on Proxy
                        </label>
                    </li>
                    <li><label className="align-top">
                            <input className="mr-1"
                                type="radio" name="requestAction"
                                value="302"
                                checked={this.state.requestAction === '302'}
                                onChange={onReqActChange}
                                id = "modifyRequestComponent_field_302"
                                />
                            Redirect (HTTP 302 Temporary)
                        </label>
                    </li>
                    <li><label className="align-top">
                            <input className="mr-1"
                                type="radio" name="requestAction"
                                value="replaceFromUrl"
                                checked={this.state.requestAction === 'replaceFromUrl'}
                                onChange={onReqActChange}
                                />
                            Seamless replacement of content from <strong>another URL</strong>
                        </label>
                    </li>
                    <li><label className="align-top">
                            <input className="mr-1"
                                type="radio" name="requestAction"
                                value="replaceFromEditor"
                                checked={this.state.requestAction === 'replaceFromEditor'}
                                onChange={onReqActChange}
                                />
                            Seamless replacement of content from <strong>the editor workspace</strong>
                        </label>
                    </li>
                </ol>
            );
        }
        function detailsProxy () {
            return (
                <div>
                    <label htmlFor="">Passthrough</label>
                    <p>
                        <small>
                    The request will passthrough to the source and the response be relayed.
                        </small>
                    </p>
                </div>
            );
        }
        function detailsCache () {
            return (
                <div>
                    <label htmlFor="">Use cache on Proxy</label>
                    <p>
                        <small>
                    Use the file that last past through the proxy for future requests (if available).
                        </small>
                    </p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Not Implemented</strong> This option has not yet been implemented
                    </div>
                </div>
            );
        }
        function details302 () {
            return (
                <div>
                    <label htmlFor="mrc_redirectURLInput">Redirect (HTTP 302 Temporary)</label>
                    <p>
                        <small>
                            Redirects the browser from one source to another via
                            a <a href="https://en.wikipedia.org/wiki/HTTP_302" target="_blank">
                                HTTP 302
                            </a> redirect. Example uses include providing alternative
                            assets like JavaScript, CSS, or image files. Will show up on
                            the browser console network tab as a 302 followed by a second
                            request for the redirect URL.
                        </small>
                    </p>
                    <div className="input-group">
                        <span className="input-group-addon" id="mrc_redirectURLInput-a">URL:</span>
                        <input type="text" className="form-control" id="mrc_redirectURLInput" aria-describedby="mrc_redirectURLInput-a"
                            name="redirectURL"
                            value={d.redirectURL}
                            onChange={this.onInputUpdated.bind(this)}
                            />
                    </div>
                    <small>
                        <small>
                            Some examples:
                            <ul>
                                <li>/js/main.legible.js</li>
                                <li>http://dev.mySite.com/css/testFix.css</li>
                            </ul>
                        </small>
                    </small>
                </div>
            );
        }
        function detailsReplaceFromUrl () {
            return (
                <div>
                    <label htmlFor="">Seamless replacement of content from <strong>another URL</strong></label>
                    <p>
                        <small>
                    Server side replacement of content from another URL. Useful in cases where a 302
                    redirect is not an option. The browser will only see one request to the original URL.
                        </small>
                    </p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Not Implemented</strong> This option has not yet been implemented
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="mrc_redirectURLInput_a">URL:</span>
                        <input type="text" className="form-control" id="mrc_redirectURLInput_b" aria-describedby="mrc_redirectURLInput_b_a"
                            name="redirectURL"
                            value={d.redirectURL}
                            onChange={this.onInputUpdated.bind(this)}
                            />
                    </div>
                    <small>
                        <small>
                            Example:
                            <ul>
                                <li>/info/aboutus.html to /break/all/links.html</li>
                            </ul>
                        </small>
                    </small>
                </div>
            );
        }
        function detailsReplaceFromEditor () {
            return (
                <div>
                    <label htmlFor="">Seamless replacement of content with file from <strong>the editor workspace</strong></label>
                    <p>
                        <small>
                            Server side replacement of content from the editor workspace.
                        </small>
                    </p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Not Implemented</strong> This option has not yet been implemented
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="mrc_redirectURLInput-a">Replace with:</span>
                        <select name="editorFile"
                            className="form-control custom-select" disabled = "disabled">
                          <option value="0">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                    <small>
                        <small>
                            Use the editor to make minor tweaks to a site's code.
                        </small>
                    </small>
                </div>
            );
        }
    }


    hideModal() {
        this.$modal.modal('hide');
    }

    // Wrap the ...
    componentDidMount() {
        //TODO: better way of passing in this information?
        let onShowFn = this.onShow.bind(this),
            onHiddenFn = this.onHidden.bind(this),
            $modal = this.$modal = $('#modifyRequestModal');
            ;
        $modal
            .on('show.bs.modal', function (event) {
                var sourceEl = $(event.relatedTarget), // button/anchor that triggered the modal
                    data = {      // Extract key and meta info from data-* attributes
                        optKey:   sourceEl.data('optKey'),
                        method:   sourceEl.data('method'),
                        showName: sourceEl.data('showName'),
                        url:      sourceEl.data('url')
                    };
                onShowFn(data);
            }.bind(this));
        $modal
            .on('hidden.bs.modal', function (event) {
            onHiddenFn();
        });
    }
}



export default ModifyRequestComponent;
