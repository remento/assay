'use strict';
var config = require.main.require('./config'),
    sync = require('./sync'),
    express = require('express'),
    uuid = require('node-uuid'),
    hash = require('string-hash'),
    proxy = require('express-http-proxy'), // https://www.npmjs.com/package/express-http-proxy; // or  https://github.com/nodejitsu/node-http-proxy or  https://www.npmjs.com/package/configurable-http-proxy
    UrlParse = require('url-parse'),
    clients = [],
    clientMap = {},
    clientPort = 3001,
    Client;



// options: {{websiteUrl:'http://user:pw@www.danmoore.org:81/phat/kettle#!/booo/bah/bang?pooh=bear'}}
Client = function (opt, project) {
    let options = this.options = opt || {};
    this.status = 'starting';
    this.statusErrorDetail = '';
    this.created = new Date();
    this.id = uuid.v4();
    this.listener = null;
    this.app = null;
    this.source = {};
    this.requests = new Map(); //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    this.lifespanMs = 30 * 60 * 1000; // 30 minutes
    this.projectCode = ((project||{}).code)||'nocode';
    //this._project = project;
    this.register();
    this.setSourceFromUrl(options.websiteUrl);
    this.relay={
        port: null
    };
    if (!this.source.host){
        this.status = 'error';
        this.statusErrorDetail = 'Invalid URL - Hostname could not be parsed';
        console.warn('client.js: Client setup error', this.statusErrorDetail);
        return;
    }
    this.app = express();
    this.openServer();
};

Client.prototype.register = function (){
    clients.push(this);
    clientMap[this.id] = this;
};

// setSourceFromUrl
//  The returned url instance contains the following properties:
//    protocol: The protocol scheme of the URL (e.g. http:).
//    slashes: A boolean which indicates whether the protocol is followed by two forward slashes (//).
//    auth: Authentication information portion (e.g. username:password).
//    username: Username of basic authentication.
//    password: Password of basic authentication.
//    host: Host name with port number.
//    hostname: Host name without port number.
//    port: Optional port number.
//    pathname: URL path.
//    query: Parsed object containing query string, unless parsing is set to false. //which it is...
//    hash: The "fragment" portion of the URL including the pound-sign (#).
//    href: The full URL.
//    origin: The origin of the URL.
Client.prototype.setSourceFromUrl = function (url) {
    this.source = new UrlParse(url, false);
};

Client.prototype.openServer = function () {
    this.app.use('/', proxy(this.source.host, {
        // proxy options
        //reqAsBuffer: false,
        filter:this.filter.bind(this),
        forwardPath:this.forwardPath.bind(this),
        decorateRequest:this.decorateRequest.bind(this),
        intercept:this.intercept.bind(this)
    }));
    this.listener = this.app.listen(clientPort, function () {
        let port = this.relay.port = this.listener.address().port;
        this.status = 'running';
        this.setSelfDestruct();
        //console.log('Project', this.project.name, 'is proxying to', this.source.host, 'on port:', port);
        console.log('client.js: Now proxying',this.projectCode,'to', this.source.host, 'on port:', port);
    }.bind(this));
    clientPort = clientPort + 1;
    return this;
};

Client.prototype.setSelfDestruct = function (){
    setTimeout(this.destroy.bind(this), this.lifespanMs);
};

Client.prototype.destroy = function () {
    clients.splice(clients.indexOf(this), 1);
    clientMap[this.id] = null;
};

Client.prototype.close = function () {
    this.status = 'closing';
    this.listener.close(this.onCloseComplete.bind(this));
};
Client.prototype.onCloseComplete = function () {
    this.status = 'closed';
};

Client.prototype.buildKey = function(method, url){
    return hash([method, url].join('|')); // FireBase is limited to 768 bytes, plus, can add other attr later
};

let testUrl = 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg';
// -- The filter option can be used to limit what requests are proxied.
// -- For example, if you only want to proxy get request: //return req.method == 'GET';
Client.prototype.filter = function(req, res) {
    let showName = req._parsedUrl.pathname,
        pathSegs = showName.split('/'),
        optKey = this.buildKey(req.method, req.originalUrl),
        proxyAction = 'proxy', //default action is to continue to pass the traffic
        redirectURL = null,
        recipe = (sync.getModifedRequests()[this.projectCode]||{})[optKey] || {requestAction: proxyAction},
        requestRecord;
    showName = !pathSegs[(pathSegs.length-1)]?showName:pathSegs[pathSegs.length-1];

    if (recipe.requestAction === "302" && recipe.redirectURL){
        proxyAction = recipe.requestAction;
        res.redirect(302, recipe.redirectURL);
    }

    requestRecord = {
        // uid for managing request options
        optKey:      optKey,
        url:         req.originalUrl,
        method:      req.method,
        showName:    showName,
        response:    null,        // { size: null, type: null, status: null, savedToCache: null },
        proxyAction: proxyAction,  // 'pass', redirect, cache, block
        redirectURL: redirectURL
        //requestDate is added and populated with db.ServerValue.TIMESTAMP;
    };
    // Update the log with the request
    sync.logRequest(this.projectCode, requestRecord);

    return proxyAction === 'proxy';
};

// intercept: update log & cache with response
// -- You can intercept the response before sending it back to the client.
Client.prototype.intercept = function(rsp, data, req, res, callback) {
    // rsp - original response from the target
    //    data = JSON.parse(data.toString('utf8'));
    //callback(null, JSON.stringify(Object.keys(req)));
    //callback(null, '<h1>I am:</h1>'+req.method+':'+req.url);
    callback(null, data);
};

// -- The forwardPath option allows you to modify the path prior to proxying the request. See also: forwardPathAsync
Client.prototype.forwardPath = function(req, res) {
    //return require('url').parse(req.url).path;
    let parsed = new UrlParse(req.url, true);
//    parsed.set('query', '?bubba=wubba');
    return parsed.href;

};

Client.prototype.decorateRequest = function (proxyReq, originalReq) {
//    // you can update headers
//    proxyReq.headers['Content-Type'] = 'text/html';
//    // you can change the method
//    proxyReq.method = 'GET';
//    // you can munge the bodyContent.
//    proxyReq.bodyContent = proxyReq.bodyContent.replace(/losing/, 'winning!');
    return proxyReq;
};



// --                        -- //
// --    Expose Interface    -- //
// --                        -- //
exports.create = function (options, project) {
    let client = new Client(options, project);
    return client;
};

exports.get = function (id) {
    return clientMap[id];
};

exports.destroy = function (id) {
    let client = clientMap[id];
    if (client){
        return client.destroy();
    }
    return false;
};












// log the request before it goes out - lots of info is in req(request) object including...
// req.ip                   "::1"
// req.method:              "GET"
// req.headers:             {cookie:'...',host:"localhost:3001",...}
// req.xhr:                 false (boolean)
// req.url:                 "/index.html?blue=bird&two=2"
// req.originalUrl          "/index.html?blue=bird&two=2"
// req._parsedUrl._raw:     "/index.html?blue=bird&two=2"
// req._parsedUrl.path:     "/index.html?blue=bird&two=2"
// req._parsedUrl.pathname: "/index.html"
// req._parsedUrl.search:   "?blue=bird&two=2"


//    let requests = this.requests,
//        requestTime = Date.now(),
//        key = this.buildKey(req.method, req.originalUrl),
//        reqRecord = requests.get(key),
//        mode='update';
//    if (!reqRecord){
//        // create a record for this request and place in requests map
//        mode='set';
//
//        reqRecord = {
//            method:         req.method,      // method and originalUrl combine to make a unique key
//            originalUrl:    req.originalUrl,
//            firstRequest:   requestTime,
//            // -- following updated for the last matching request (below)
//            currentUrl:     null,
//            lastReq:        null,
//            reqCount:       0,
//            // following reference last response
//            responseCount:  0,
//            type:           null,
//            size:           null,
//            status:         '(pending)',
//            lastHandle:     null,        // null, proxy, redirect, fromCache
//            // user options
//            requesting:     null,        // null, proxy, retarget, fromCache
//            retargetUrl:    null,        //
//            retargetMethod: null,        // 302 temp, 303 form submit (post to get)
//        };
//        requests.set(key, reqRecord);
//    }
//    // Update with information from last request
//    reqRecord.currentUrl = req.url;
//    reqRecord.lastReq = requestTime;
//    reqRecord.reqCount++;
//
//    // return true to proxy all requests for now
//    return true;
