import React from 'react';
import sync from '../services/DataSyncService';

class ModifiedRequestsListComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            waitingForData:true,
            modifiedRequestCount: 0,
            modifiedRequests:null,
            modifiedRequestsArray:null
        };
    }

    componentWillMount() {
        let handleRecordsFn = this.onModifiedRequestsChange.bind(this);
        sync.on('modified_changed', handleRecordsFn);
        sync.on('modified_added', handleRecordsFn);
    }

    //payload: {
    //  eventName: modified_added or modified_changed,
    //  optkey: optKey,
    //  record: snap.val(), // of modified record
    //  allRecords: modifiedRequestsMap
    //}
    onModifiedRequestsChange (payload){
        let keys = Object.keys(payload.allRecords),
            allRecArray = keys.map((key)=>payload.allRecords[key]);
        //console.log('onModifiedRequestsChange',payload.eventName,keys,payload.allRecords,allRecArray);
        this.setState({
            waitingForData: false,
            modifiedRequestCount: keys.length,
            modifiedRequests: payload.allRecords,
            modifiedRequestsArray:allRecArray
        });
    }

    render() {
        let s = this.state,
            records = s.modifiedRequestsArray;
        return (
            <div className="ModifiedRequestComponent" key={s.waitingForData}>
                {s.waitingForData ? (
                    <p>Waiting for data...</p>
                ):(
                    <div>
                        <p>Requests loaded: {s.modifiedRequestCount}</p>
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Match Request</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map( (record) =>
                                    <ModifiedRequestsListTableRow key={record.optKey} data={record} />
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );

    }
}

class ModifiedRequestsListTableRow extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        let r = this.props.data;
        return (
            <tr>
                <td>
                    <div>
                        <code>{r.method}:</code>
                        <span>{r.showName}</span>
                    </div>
                    <div><small>{r.url}</small></div>
                </td>
                <td data-toggle="tooltip" data-html="true"
                    title={r.redirectURL}>
                    {r.requestAction}
                </td>
                <td className="text-xs-center">
                    <a href="#" data-toggle="modal" data-target="#modifyRequestModal"
                        data-opt-key={r.optKey} data-method={r.method} data-show-name={r.showName} data-url={r.url}>
                        <div>
                            Details
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

export default ModifiedRequestsListComponent;
