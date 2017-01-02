'use strict';
import firebase from 'firebase/app';
require("firebase/database");
let _global = window.assay;

class DataSyncService {
    constructor () {
        let projectCode = this.projectCode = _global.projectCode;
        this.trafficDisplayRecordLimit = _global.trafficDisplayRecordLimit || 1000;
        this.initFireBase();
        this.initVariables();
        this.prefetchData();
    }

    initFireBase () {
        // initialize firebase
        firebase.initializeApp(_global.firebaseConfig);
        this.db = firebase.database();
    }

    initVariables () {
        let projectCode = this.projectCode;
        this.trafficSnaps = [];
        this.traffic = [];
        this.modifiedRequestsMap = {};
        // these keys are also the event names
        this.eventCb = {
            project_added: [],
            traffic_added: [],
            modified_added: [],
            modified_changed: []
        };
        this.refProjectList = null;
        this.refStrRequests = null;
        this.refProject = null;
        this.refModified = null;
         // if a project is set - set refs and prefetch data
        if (projectCode){
            this.refStrProjectList =  'projectList';
            this.refStrRequests =     'projectRequests/' + projectCode;
            this.refStrTraffic =      this.refStrRequests + '/requests';
            this.refStrModified =     this.refStrRequests + '/modified';
        }
    }

    prefetchData () {
        if (this.projectCode){
            //this.getProjectList(); // not yet used
            this.fetchAllModifiedRequests();
            this.fetchRecentTraffic();
        }
    }

    // not yet uesed - needs filtering
    getProjectList () {
        // let ref = this.refStrProjectList.orderByKey();
        // ref.on('child_added', this.XXXX.bind(this));
    }

    fetchRecentTraffic () {
        let ref = this.db.ref(this.refStrTraffic)
            .orderByKey()
            .limitToLast(this.trafficDisplayRecordLimit);
        ref.on('child_added', this.trafficAdded.bind(this));
    }

    trafficAdded (snap) {
        let key = snap.getKey(),
            record = snap.val();
        record.key = key;
        this.traffic.unshift(record);
        this.trigger('traffic_added', {
            eventName:  'traffic_added',
            key:        key,
            record:     record,
            allRecords: this.traffic
        });
    }

    fetchAllModifiedRequests () {
        let ref = this.db.ref(this.refStrModified).orderByKey();
        ref.on('child_added',   this.modifiedRequestsAddChange.bind(this, 'modified_added'));
        ref.on('child_changed', this.modifiedRequestsAddChange.bind(this, 'modified_changed'));
    }

    // requestModifiedAddChange -callback handler for both add and change
    // @param triggerEventName should be modified_added or modified_changed
    // @param snap provided by firebase
    modifiedRequestsAddChange (triggerEventName, snap) {
        //console.log('DataSyncService:modifiedRequestsAddChange:', triggerEventName, snap.val());
        let optKey = snap.getKey(),
            payload = {
                eventName: triggerEventName,
                optkey: optKey,
                record: snap.val(),
                allRecords: this.modifiedRequestsMap
            };
        this.modifiedRequestsMap[optKey] = payload.record;
        this.trigger(triggerEventName, payload);
    }

    // call back is provided result of snap.val() -> the data, data is null if no record exists
    getModifiedRequestValue(optkey, cb) {
        let ref;
        if (!optkey){
            throw "sync: optkey is required if looking up an individual modified request";
        }
        ref = this.db.ref(this.refStrModified + '/' + optkey);
        return ref.on('value', function(snap){
            cb(snap.val());
        });
    }

    trigger (eventName, payload) {
        this.eventCb[eventName].forEach(cbFn => cbFn(payload));
    }

    // register a callback function for an event: traffic_added
    on (eventName, cbFn) {
        this.eventCb[eventName].push(cbFn);
    }

    // saveModified.then(function(err){if(err{console.log('Oh snakes!');})}
    // @param data: {
    //        optKey:         s.optKey,
    //        requestAction:  s.requestAction,
    //        redirectURL:    s.redirectURL,
    //        editorFile:     s.editorFile
    //    }
    saveModified(dataToMerge) {
        if (!dataToMerge.optKey){
            throw "sync: saveModified: optKey is required to save";
        }
        let refStr = this.refStrModified + '/' + dataToMerge.optKey;
        return this.db.ref(refStr)
            .update(dataToMerge);

            // to get updates on changes - however - this should be covered by modifiedRequestsAddChange
            //.on('value', function(snapshot) {
            //    console.log(//snapshot.val());
            //});;
    }

}

// singleton
export default new DataSyncService();
