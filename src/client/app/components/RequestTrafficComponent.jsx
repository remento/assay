import React from 'react';
import sync from '../services/DataSyncService';
import moment from 'moment';
moment.locale(window.assay.locale);

class RequestTrafficComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            waitingForData:true,
            recordCount: 0,
            records:[],
            modifiedRequests: {}, // modifiedRequests[optKey]
            displayLimit: sync.trafficDisplayRecordLimit
        };
    }

    componentWillMount() {
        let handleRecordsFn = this.onTrafficAddChange.bind(this),
            handleModifiedFn = this.onModifiedRequestsUpdated.bind(this);
        sync.on('traffic_added', handleRecordsFn);
        //// traffic changed not yet supported - eventually will add response data (size, type, etc..)
        //sync.on('traffic_changed', handleRecordsFn);
        sync.on('modified_changed', handleModifiedFn);
        sync.on('modified_added', handleModifiedFn);
    }

    //payload: {
    //        eventName:  'traffic_added', //or traffic_changed,
    //        key:        key,             // from the push
    //        record:     record,
    //        allRecords: array of all collected traffic, plus key, limited by sync.trafficDisplayRecordLimit
    //    }
    onTrafficAddChange(payload) {
        console.log('rtc - onTrafficAddChange: ', payload);
        this.setState({
            waitingForData: false,
            recordCount:    payload.allRecords.length,
            records:        payload.allRecords
        });

    }

    //payload: {
    //  eventName: modified_added or modified_changed,
    //  optkey: optKey,
    //  record: snap.val(), // of modified record
    //  allRecords: modifiedRequestsMap
    //}
    onModifiedRequestsUpdated (payload) {
        this.setState({
           modifiedRequests: payload.allRecords
        });
    }

    //
    render() {
        let s = this.state;
        return (
            <div className="RequestTrafficComponent" key={s.waitingForData}>
                {s.waitingForData ? (
                    <p>Waiting for data...</p>
                ):(
                    <div>
                        <p>Requests loaded: {s.recordCount}</p>
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Path</th>
                                    <th>When</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {s.records.map( (r) =>
                                    <RequestTableRow key={r.key} record={r} modifiedRequests = {s.modifiedRequests}/>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}


// getting firebase offset
// consider moment's "Time from X"if adujusting local clock with server offset
//@see http://stackoverflow.com/questions/23128027/retrieve-firebase-server-time-without-setting-it-first
class RequestTableRow extends React.Component {
    constructor(props){
        super(props);
    }

    // indicate modified if we are *currently* doing something other then proxying these requests
    isModified(){
        //return !!sync.modifiedRequestsMap[this.props.record.optKey];
        let optKey = this.props.record.optKey,
            modifiedRequests = this.props.modifiedRequests,
            modRec = modifiedRequests[optKey]||{requestAction:'proxy'};
        return modRec.requestAction !=='proxy';
    }

    render(){
        //console.log('moment', moment, firebase);
        let r = this.props.record,
            m = moment(r.requestDate);
        return (
            <tr>
                <td>
                    <div>
                        <code>{r.method}:</code>
                        <span>{r.showName}</span>
                    </div>
                    <div><small>{r.url}</small></div>
                </td>
                <td title={m.format('LLLL')}>{m.fromNow()}</td>
                <td className="text-xs-center">
                    <a href="#" data-toggle="modal" data-target="#modifyRequestModal"
                        data-opt-key={r.optKey} data-method={r.method} data-show-name={r.showName} data-url={r.url}>
                        <div>
                            {this.isModified()?'*Modify*':'Modify'}
                        </div>
                    </a>
                    <div>
                        <small><small>{r.optKey}</small></small>
                    </div>
                </td>
            </tr>
        );
    }
}

export default RequestTrafficComponent;
