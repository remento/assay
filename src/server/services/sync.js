'use strict';

// Use firebase realtime database to handle the API for the Client UI - also allows
// for easy data push and binding.
// @see https://firebase.google.com/docs/admin/setup
// @see https://firebase.google.com/docs/database/admin/start

// 768 byte LIMIT for keys - hence using string-hash for urls
// If you create your own keys, they must be UTF-8 encoded, can be a maximum of 768 bytes, and cannot contain ., $, #, [, ], /, or ASCII control characters 0-31 or 127.
// @see https://firebase.google.com/docs/database/web/structure-data
// # when you fetch data at a location in your database, you also retrieve all of its child nodes.

let config = require.main.require('./config'),
    admin = require("firebase-admin"), // or //import * as admin from "firebase-admin"
    instance = require('./instance'),
    refStr = {
         projectList: 'projectList',
         traffic:     'projectRequests/:projectCode/requests',
         modified:    'projectRequests/:projectCode/modified'
    },
    projectsMap={},     //projectsMap[projectCode]=snap
    modifedRequestsMap={}, //modifedRequests[projectCode][optKey]=value
    db;

// --                        -- //
// --    Init                -- //
// --                        -- //
db = initFireBaseDb();
loadProjects();

function initFireBaseDb() {
    let first = 1;
    // Init Firebase
    admin.initializeApp({
        credential: admin.credential.cert(config.firebaseCredentialPath),
        databaseURL: config.firebaseDatabaseURL
    });
    let db = admin.database();
    // monitor and log firebase status
    // @see http://stackoverflow.com/questions/11351689/detect-if-firebase-connection-is-lost-regained
    db
        .ref()
        .child('.info/connected')
        .on('value', function (connectedSnap) {
        if (connectedSnap.val() === true) {
            /* we're connected! */
            console.log('sync.js: Firebase connection established');

        } else if (first !== 1) {
            /* we're disconnected! */
            console.log('sync.js: Firebase connection lost');
        }
        first = 0;
    });
    return db;
}

function loadProjects () {
    var ref = db.ref(refStr.projectList);
    console.log('looking for projects:',refStr.projectList,instance.name);
    ref.orderByChild("proxyInstance")
        .equalTo(instance.name)
        .on("child_added", function(snap) {
            let projectCode = snap.getKey();
            console.log('project loaded:', projectCode);
            projectsMap[projectCode] = snap;
            loadModifiedRequests(projectCode);
        });
}

function loadModifiedRequests (projectCode) {
    let ref = db.ref(refStr.modified.replace(':projectCode', projectCode)),
        obk = ref.orderByKey();
    obk.on("child_added", function(snap) {
        let optKey = snap.getKey();
        modifedRequestsMap[projectCode]=modifedRequestsMap[projectCode]||{};
        modifedRequestsMap[projectCode][optKey]=snap.val();
        console.log('loadModifiedRequests child_added:', projectCode, optKey);
    });
    obk.on("child_changed", function(snap) {
        let optKey = snap.getKey();
        modifedRequestsMap[projectCode][optKey]=snap.val();
        console.log('loadModifiedRequests child_changed:', projectCode, optKey);
    });
    obk.on("child_removed", function(snap) {
        let optKey = snap.getKey();
        delete modifedRequestsMap[projectCode][optKey];
        console.log('loadModifiedRequests child_removed:', projectCode, optKey);
    });
}



// --                        -- //
// --    Expose Interface    -- //
// --                        -- //
exports.getDb = function(){
    return db;
};

// expose data - these objects have on going updates
exports.getProjects = function(){return projectsMap;};
exports.getModifedRequests = function(){return modifedRequestsMap;};

// returns newRefRequest (result of push)
exports.logRequest = function (projectCode, requestRecord) {
    let ref = db.ref("projectRequests/" + projectCode),
        rr = requestRecord || {},
        requestRef = ref.child("requests");
    // provide defaults for requestRecord object
    rr.optKey = rr.optKey || null;
    rr.url = rr.url || null;
    rr.method = rr.method || null;
    rr.response = rr.response || null; // { size: null, type: null, status: null, savedToCache: null },
    rr.proxyAction = rr.proxyAction || null; // 'pass', redirect, cache, block
    rr.requestDate = admin.database.ServerValue.TIMESTAMP;
    // push the record to firebase
    return requestRef.push(rr, function (error) {
        if (error) {
            console.warn("sync.js: logRequest: fail", projectCode, error);
        }
    });
};

exports.sendProject = function (project) {
    let projectCode = project.code;
    return db.ref("projectList/" + projectCode)
    .set({
        code:           project.code,
        source:         project.client.source, //{host, href, more... see client.js }
        proxyInstance:  instance.name,
        creationDate:   admin.database.ServerValue.TIMESTAMP
    }, function (error) {
        if (error) {
            console.warn("sync.js: sendProject: fail", projectCode, error);
        }else{
            console.log("sync.js: sendProject: success", projectCode);
        }
    });

};


//// As an admin, the app has access to read and write all data, regardless of Security Rules
//var db = admin.database();
//var ref = db.ref("restricted_access/secret_document");
//ref.once("value", function(snapshot) {
//  console.log(snapshot.val());
//});
// but... this can and should be locked down.. Authenticate with limited privileges
//   @see https://firebase.google.com/docs/database/admin/start
