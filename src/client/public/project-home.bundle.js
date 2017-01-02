webpackJsonp([2],{

/***/ 0:
/*!***********************************************!*\
  !*** ./src/client/app/pages/project-home.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 34);
	
	var _RequestTrafficComponent = __webpack_require__(/*! ./../components/RequestTrafficComponent.jsx */ 187);
	
	var _RequestTrafficComponent2 = _interopRequireDefault(_RequestTrafficComponent);
	
	var _ModifyRequestComponent = __webpack_require__(/*! ./../components/ModifyRequestComponent.jsx */ 188);
	
	var _ModifyRequestComponent2 = _interopRequireDefault(_ModifyRequestComponent);
	
	var _ModifiedRequestsListComponent = __webpack_require__(/*! ./../components/ModifiedRequestsListComponent.jsx */ 189);
	
	var _ModifiedRequestsListComponent2 = _interopRequireDefault(_ModifiedRequestsListComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import ProjectListComponent from './../components/ProjectListComponent.jsx';
	
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'nav nav-tabs', role: 'tablist' },
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'nav-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'nav-link', 'data-toggle': 'tab', href: '#tab-team', role: 'tab' },
	                            'Team'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'nav-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'nav-link active', 'data-toggle': 'tab', href: '#tab-traffic', role: 'tab' },
	                            'Traffic'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'nav-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'nav-link', 'data-toggle': 'tab', href: '#tab-modified-traffic', role: 'tab' },
	                            'Modified Traffic'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'nav-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'nav-link', 'data-toggle': 'tab', href: '#tab-code-workspace', role: 'tab' },
	                            'Code Workspace'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'nav-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'nav-link', 'data-toggle': 'tab', href: '#tab-automate', role: 'tab' },
	                            'Automate & Test'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tab-content' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tab-team', role: 'tabpanel' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Project Team'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Everyone who has access to the project - either to edit or to view.'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'This project was created by:'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Evelyn'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Fine upstanding individuals who can edit responses:'
	                        ),
	                        _react2.default.createElement(
	                            'ol',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Penny'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Jenn'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Observers'
	                        ),
	                        _react2.default.createElement(
	                            'ol',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Don'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Bill'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'George'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tab-pane active', id: 'tab-traffic', role: 'tabpanel' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Traffic Report'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'All recent traffic that has come through the proxy is displayed here',
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'small',
	                                null,
	                                'Content cached by the browser will not generate a request to the proxy'
	                            )
	                        ),
	                        _react2.default.createElement(_RequestTrafficComponent2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tab-modified-traffic', role: 'tabpanel' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Modified Traffic'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'The items here have been modified so that they do not passthrough to the source site.'
	                        ),
	                        _react2.default.createElement(_ModifiedRequestsListComponent2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tab-code-workspace', role: 'tabpanel' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Code Workspace'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'The code workspace is a place for files to be edited and tweaked before being sent to the browser.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tab-pane', id: 'tab-automate', role: 'tabpanel' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'lead' },
	                            'Automate & Test'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Select automated actions for the proxy to take on the site.'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Image Optimization',
	                                _react2.default.createElement(
	                                    'ul',
	                                    null,
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Simple Optimization'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Optimization with Resize (render big browser & adjust size)'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive Images',
	                                _react2.default.createElement(
	                                    'ul',
	                                    null,
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Replace image tags with HTML5 Picture'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Creates multiple images for different size screens (viewports)'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'JavaScript Experiments',
	                                _react2.default.createElement(
	                                    'ul',
	                                    null,
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Collect all scripts (including embeded) and move to footer'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Concatenate all scripts'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Concatenate just self hosted scripts'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Minify selected scripts'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS Experiments',
	                                _react2.default.createElement(
	                                    'ul',
	                                    null,
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Collect and concatenate just linked CSS Sheets'
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        'Collect and concatenate all CSS including embeded'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(_ModifyRequestComponent2.default, null)
	            );
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 187:
/*!***************************************************************!*\
  !*** ./src/client/app/components/RequestTrafficComponent.jsx ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataSyncService = __webpack_require__(/*! ../services/DataSyncService */ 185);
	
	var _DataSyncService2 = _interopRequireDefault(_DataSyncService);
	
	var _moment = __webpack_require__(/*! moment */ 180);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_moment2.default.locale(window.assay.locale);
	
	var RequestTrafficComponent = function (_React$Component) {
	    _inherits(RequestTrafficComponent, _React$Component);
	
	    function RequestTrafficComponent(props) {
	        _classCallCheck(this, RequestTrafficComponent);
	
	        var _this = _possibleConstructorReturn(this, (RequestTrafficComponent.__proto__ || Object.getPrototypeOf(RequestTrafficComponent)).call(this, props));
	
	        _this.state = {
	            waitingForData: true,
	            recordCount: 0,
	            records: [],
	            modifiedRequests: {}, // modifiedRequests[optKey]
	            displayLimit: _DataSyncService2.default.trafficDisplayRecordLimit
	        };
	        return _this;
	    }
	
	    _createClass(RequestTrafficComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var handleRecordsFn = this.onTrafficAddChange.bind(this),
	                handleModifiedFn = this.onModifiedRequestsUpdated.bind(this);
	            _DataSyncService2.default.on('traffic_added', handleRecordsFn);
	            //// traffic changed not yet supported - eventually will add response data (size, type, etc..)
	            //sync.on('traffic_changed', handleRecordsFn);
	            _DataSyncService2.default.on('modified_changed', handleModifiedFn);
	            _DataSyncService2.default.on('modified_added', handleModifiedFn);
	        }
	
	        //payload: {
	        //        eventName:  'traffic_added', //or traffic_changed,
	        //        key:        key,             // from the push
	        //        record:     record,
	        //        allRecords: array of all collected traffic, plus key, limited by sync.trafficDisplayRecordLimit
	        //    }
	
	    }, {
	        key: 'onTrafficAddChange',
	        value: function onTrafficAddChange(payload) {
	            console.log('rtc - onTrafficAddChange: ', payload);
	            this.setState({
	                waitingForData: false,
	                recordCount: payload.allRecords.length,
	                records: payload.allRecords
	            });
	        }
	
	        //payload: {
	        //  eventName: modified_added or modified_changed,
	        //  optkey: optKey,
	        //  record: snap.val(), // of modified record
	        //  allRecords: modifiedRequestsMap
	        //}
	
	    }, {
	        key: 'onModifiedRequestsUpdated',
	        value: function onModifiedRequestsUpdated(payload) {
	            this.setState({
	                modifiedRequests: payload.allRecords
	            });
	        }
	
	        //
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var s = this.state;
	            return _react2.default.createElement(
	                'div',
	                { className: 'RequestTrafficComponent', key: s.waitingForData },
	                s.waitingForData ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Waiting for data...'
	                ) : _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Requests loaded: ',
	                        s.recordCount
	                    ),
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table table-striped table-sm' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Path'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'When'
	                                ),
	                                _react2.default.createElement('th', null)
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            s.records.map(function (r) {
	                                return _react2.default.createElement(RequestTableRow, { key: r.key, record: r, modifiedRequests: s.modifiedRequests });
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return RequestTrafficComponent;
	}(_react2.default.Component);
	
	// getting firebase offset
	// consider moment's "Time from X"if adujusting local clock with server offset
	//@see http://stackoverflow.com/questions/23128027/retrieve-firebase-server-time-without-setting-it-first
	
	
	var RequestTableRow = function (_React$Component2) {
	    _inherits(RequestTableRow, _React$Component2);
	
	    function RequestTableRow(props) {
	        _classCallCheck(this, RequestTableRow);
	
	        return _possibleConstructorReturn(this, (RequestTableRow.__proto__ || Object.getPrototypeOf(RequestTableRow)).call(this, props));
	    }
	
	    // indicate modified if we are *currently* doing something other then proxying these requests
	
	
	    _createClass(RequestTableRow, [{
	        key: 'isModified',
	        value: function isModified() {
	            //return !!sync.modifiedRequestsMap[this.props.record.optKey];
	            var optKey = this.props.record.optKey,
	                modifiedRequests = this.props.modifiedRequests,
	                modRec = modifiedRequests[optKey] || { requestAction: 'proxy' };
	            return modRec.requestAction !== 'proxy';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //console.log('moment', moment, firebase);
	            var r = this.props.record,
	                m = (0, _moment2.default)(r.requestDate);
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            r.method,
	                            ':'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            r.showName
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            r.url
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'td',
	                    { title: m.format('LLLL') },
	                    m.fromNow()
	                ),
	                _react2.default.createElement(
	                    'td',
	                    { className: 'text-xs-center' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#', 'data-toggle': 'modal', 'data-target': '#modifyRequestModal',
	                            'data-opt-key': r.optKey, 'data-method': r.method, 'data-show-name': r.showName, 'data-url': r.url },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            this.isModified() ? '*Modify*' : 'Modify'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            _react2.default.createElement(
	                                'small',
	                                null,
	                                r.optKey
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return RequestTableRow;
	}(_react2.default.Component);
	
	exports.default = RequestTrafficComponent;

/***/ },

/***/ 188:
/*!**************************************************************!*\
  !*** ./src/client/app/components/ModifyRequestComponent.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataSyncService = __webpack_require__(/*! ../services/DataSyncService */ 185);
	
	var _DataSyncService2 = _interopRequireDefault(_DataSyncService);
	
	var _moment = __webpack_require__(/*! moment */ 180);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //http://v4-alpha.getbootstrap.com/components/modal/#
	
	
	_moment2.default.locale(window.assay.locale);
	
	//   Example call to activate:
	//   <a href="#" data-toggle="modal" data-target="#modifyRequestModal"
	//        data-opt-key={r.optKey} data-method={r.method} data-show-name={r.showName} data-url={r.url}>
	//        <div>Modify</div>
	//    </a>
	//
	
	var ModifyRequestComponent = function (_React$Component) {
	    _inherits(ModifyRequestComponent, _React$Component);
	
	    function ModifyRequestComponent(props) {
	        _classCallCheck(this, ModifyRequestComponent);
	
	        var _this = _possibleConstructorReturn(this, (ModifyRequestComponent.__proto__ || Object.getPrototypeOf(ModifyRequestComponent)).call(this, props));
	
	        _this.$modal = null;
	        _this.state = _this.getNullData();
	        return _this;
	    }
	
	    _createClass(ModifyRequestComponent, [{
	        key: 'getNullData',
	        value: function getNullData() {
	            return { ready: false, existing: false, method: null, url: null, showName: null, optKey: null, requestAction: 'proxy', redirectURL: '', editorFile: '', meta: null };
	        }
	    }, {
	        key: 'onHidden',
	        value: function onHidden() {
	            console.log('modifyRequestModal hidden');
	            this.setState(this.getNullData());
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // default the state
	            this.setState({
	                data: this.getNullData()
	            });
	        }
	    }, {
	        key: 'onRequestActionUserChange',
	        value: function onRequestActionUserChange(e) {
	            //this.setState({requestAction: e.currentTarget.value});
	            return this.onInputUpdated(e);
	        }
	    }, {
	        key: 'onInputUpdated',
	        value: function onInputUpdated(e) {
	            var obj = {},
	                fieldName = e.currentTarget.getAttribute('name');
	            obj[fieldName] = e.currentTarget.value;
	            this.setState(obj);
	        }
	
	        // data only includes optKey, and meta (showName, url, method) - saved options need to be looked up
	
	    }, {
	        key: 'onShow',
	        value: function onShow(data) {
	            console.log('modifyRequestModal updated: ', data);
	            // could already be options saved - look them up
	            _DataSyncService2.default.getModifiedRequestValue(data.optKey, function (existing) {
	                var newData = existing || data;
	                // copy meta data down and mark existing
	                newData.existing = !!existing;
	                // modal is now ready to display
	                newData.ready = true;
	                this.setState(newData);
	            }.bind(this));
	        }
	    }, {
	        key: 'getFormData',
	        value: function getFormData() {
	            var s = this.state;
	            return {
	                optKey: s.optKey,
	                requestAction: s.requestAction,
	                redirectURL: s.redirectURL,
	                editorFile: s.editorFile,
	                method: s.method,
	                url: s.url,
	                showName: s.showName
	            };
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            _DataSyncService2.default.saveModified(this.getFormData()).then(function (err) {
	                if (err) {
	                    console.warn('modifiy request save error:', err);
	                } else {
	                    this.hideModal();
	                }
	            }.bind(this));
	        }
	
	        //
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var d = this.state;
	            return _react2.default.createElement(
	                'div',
	                { className: 'ModifyRequestComponent' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal fade ', id: 'modifyRequestModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modifyRequestModalLabel', 'aria-hidden': 'true' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-dialog modal-lg', role: 'document' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-content' },
	                            _react2.default.createElement(
	                                'form',
	                                { onSubmit: this.handleSubmit.bind(this) },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'modal-header' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                                        _react2.default.createElement(
	                                            'span',
	                                            { 'aria-hidden': 'true' },
	                                            '\xD7'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'h4',
	                                        { className: 'modal-title', id: 'modifyRequestModalLabel' },
	                                        'Modify Request',
	                                        _react2.default.createElement(
	                                            'small',
	                                            null,
	                                            _react2.default.createElement(
	                                                'div',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'code',
	                                                    null,
	                                                    d.method,
	                                                    ':'
	                                                ),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    null,
	                                                    d.showName
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'small',
	                                                    null,
	                                                    d.url
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'small',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'small',
	                                                    null,
	                                                    'sig: ',
	                                                    _react2.default.createElement(
	                                                        'span',
	                                                        null,
	                                                        d.optKey
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'modal-body' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'lead' },
	                                        'How should future requests like this be treated?'
	                                    ),
	                                    inputRequestAction.call(this),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        d.requestAction === 'proxy' ? detailsProxy.call(this) : null
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        d.requestAction === '302' ? details302.call(this) : null
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        d.requestAction === 'cache' ? detailsCache.call(this) : null
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        d.requestAction === 'replaceFromUrl' ? detailsReplaceFromUrl.call(this) : null
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        d.requestAction === 'replaceFromEditor' ? detailsReplaceFromEditor.call(this) : null
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'modal-footer' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', className: 'btn btn-secondary mr-1', 'data-dismiss': 'modal' },
	                                        'Cancel'
	                                    ),
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'submit', className: 'btn btn-primary' },
	                                        'Save changes'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	
	            function inputRequestAction() {
	                var onReqActChange = this.onRequestActionUserChange.bind(this);
	                return _react2.default.createElement(
	                    'ol',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'align-top' },
	                            _react2.default.createElement('input', { className: 'mr-1',
	                                type: 'radio', name: 'requestAction',
	                                value: 'proxy',
	                                checked: this.state.requestAction === 'proxy',
	                                onChange: onReqActChange
	                            }),
	                            'Passthrough'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'align-top' },
	                            _react2.default.createElement('input', { className: 'mr-1',
	                                type: 'radio', name: 'requestAction',
	                                value: 'cache',
	                                checked: this.state.requestAction === 'cache',
	                                onChange: onReqActChange
	                            }),
	                            'Use cache on Proxy'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'align-top' },
	                            _react2.default.createElement('input', { className: 'mr-1',
	                                type: 'radio', name: 'requestAction',
	                                value: '302',
	                                checked: this.state.requestAction === '302',
	                                onChange: onReqActChange,
	                                id: 'modifyRequestComponent_field_302'
	                            }),
	                            'Redirect (HTTP 302 Temporary)'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'align-top' },
	                            _react2.default.createElement('input', { className: 'mr-1',
	                                type: 'radio', name: 'requestAction',
	                                value: 'replaceFromUrl',
	                                checked: this.state.requestAction === 'replaceFromUrl',
	                                onChange: onReqActChange
	                            }),
	                            'Seamless replacement of content from ',
	                            _react2.default.createElement(
	                                'strong',
	                                null,
	                                'another URL'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'align-top' },
	                            _react2.default.createElement('input', { className: 'mr-1',
	                                type: 'radio', name: 'requestAction',
	                                value: 'replaceFromEditor',
	                                checked: this.state.requestAction === 'replaceFromEditor',
	                                onChange: onReqActChange
	                            }),
	                            'Seamless replacement of content from ',
	                            _react2.default.createElement(
	                                'strong',
	                                null,
	                                'the editor workspace'
	                            )
	                        )
	                    )
	                );
	            }
	            function detailsProxy() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'Passthrough'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'The request will passthrough to the source and the response be relayed.'
	                        )
	                    )
	                );
	            }
	            function detailsCache() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'Use cache on Proxy'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Use the file that last past through the proxy for future requests (if available).'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'alert alert-danger', role: 'alert' },
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'Not Implemented'
	                        ),
	                        ' This option has not yet been implemented'
	                    )
	                );
	            }
	            function details302() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'mrc_redirectURLInput' },
	                        'Redirect (HTTP 302 Temporary)'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Redirects the browser from one source to another via a ',
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'https://en.wikipedia.org/wiki/HTTP_302', target: '_blank' },
	                                'HTTP 302'
	                            ),
	                            ' redirect. Example uses include providing alternative assets like JavaScript, CSS, or image files. Will show up on the browser console network tab as a 302 followed by a second request for the redirect URL.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'input-group' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'input-group-addon', id: 'mrc_redirectURLInput-a' },
	                            'URL:'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'mrc_redirectURLInput', 'aria-describedby': 'mrc_redirectURLInput-a',
	                            name: 'redirectURL',
	                            value: d.redirectURL,
	                            onChange: this.onInputUpdated.bind(this)
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'small',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Some examples:',
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    '/js/main.legible.js'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'http://dev.mySite.com/css/testFix.css'
	                                )
	                            )
	                        )
	                    )
	                );
	            }
	            function detailsReplaceFromUrl() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'Seamless replacement of content from ',
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'another URL'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Server side replacement of content from another URL. Useful in cases where a 302 redirect is not an option. The browser will only see one request to the original URL.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'alert alert-danger', role: 'alert' },
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'Not Implemented'
	                        ),
	                        ' This option has not yet been implemented'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'input-group' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'input-group-addon', id: 'mrc_redirectURLInput_a' },
	                            'URL:'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'mrc_redirectURLInput_b', 'aria-describedby': 'mrc_redirectURLInput_b_a',
	                            name: 'redirectURL',
	                            value: d.redirectURL,
	                            onChange: this.onInputUpdated.bind(this)
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'small',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Example:',
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    '/info/aboutus.html to /break/all/links.html'
	                                )
	                            )
	                        )
	                    )
	                );
	            }
	            function detailsReplaceFromEditor() {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: '' },
	                        'Seamless replacement of content with file from ',
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'the editor workspace'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Server side replacement of content from the editor workspace.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'alert alert-danger', role: 'alert' },
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'Not Implemented'
	                        ),
	                        ' This option has not yet been implemented'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'input-group' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'input-group-addon', id: 'mrc_redirectURLInput-a' },
	                            'Replace with:'
	                        ),
	                        _react2.default.createElement(
	                            'select',
	                            { name: 'editorFile',
	                                className: 'form-control custom-select', disabled: 'disabled' },
	                            _react2.default.createElement(
	                                'option',
	                                { value: '0' },
	                                'Open this select menu'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: '1' },
	                                'One'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: '2' },
	                                'Two'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: '3' },
	                                'Three'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'small',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            'Use the editor to make minor tweaks to a site\'s code.'
	                        )
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.$modal.modal('hide');
	        }
	
	        // Wrap the ...
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //TODO: better way of passing in this information?
	            var onShowFn = this.onShow.bind(this),
	                onHiddenFn = this.onHidden.bind(this),
	                $modal = this.$modal = $('#modifyRequestModal');
	            ;
	            $modal.on('show.bs.modal', function (event) {
	                var sourceEl = $(event.relatedTarget),
	                    // button/anchor that triggered the modal
	                data = { // Extract key and meta info from data-* attributes
	                    optKey: sourceEl.data('optKey'),
	                    method: sourceEl.data('method'),
	                    showName: sourceEl.data('showName'),
	                    url: sourceEl.data('url')
	                };
	                onShowFn(data);
	            }.bind(this));
	            $modal.on('hidden.bs.modal', function (event) {
	                onHiddenFn();
	            });
	        }
	    }]);
	
	    return ModifyRequestComponent;
	}(_react2.default.Component);
	
	exports.default = ModifyRequestComponent;

/***/ },

/***/ 189:
/*!*********************************************************************!*\
  !*** ./src/client/app/components/ModifiedRequestsListComponent.jsx ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataSyncService = __webpack_require__(/*! ../services/DataSyncService */ 185);
	
	var _DataSyncService2 = _interopRequireDefault(_DataSyncService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModifiedRequestsListComponent = function (_React$Component) {
	    _inherits(ModifiedRequestsListComponent, _React$Component);
	
	    function ModifiedRequestsListComponent() {
	        _classCallCheck(this, ModifiedRequestsListComponent);
	
	        var _this = _possibleConstructorReturn(this, (ModifiedRequestsListComponent.__proto__ || Object.getPrototypeOf(ModifiedRequestsListComponent)).call(this));
	
	        _this.state = {
	            waitingForData: true,
	            modifiedRequestCount: 0,
	            modifiedRequests: null,
	            modifiedRequestsArray: null
	        };
	        return _this;
	    }
	
	    _createClass(ModifiedRequestsListComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var handleRecordsFn = this.onModifiedRequestsChange.bind(this);
	            _DataSyncService2.default.on('modified_changed', handleRecordsFn);
	            _DataSyncService2.default.on('modified_added', handleRecordsFn);
	        }
	
	        //payload: {
	        //  eventName: modified_added or modified_changed,
	        //  optkey: optKey,
	        //  record: snap.val(), // of modified record
	        //  allRecords: modifiedRequestsMap
	        //}
	
	    }, {
	        key: 'onModifiedRequestsChange',
	        value: function onModifiedRequestsChange(payload) {
	            var keys = Object.keys(payload.allRecords),
	                allRecArray = keys.map(function (key) {
	                return payload.allRecords[key];
	            });
	            //console.log('onModifiedRequestsChange',payload.eventName,keys,payload.allRecords,allRecArray);
	            this.setState({
	                waitingForData: false,
	                modifiedRequestCount: keys.length,
	                modifiedRequests: payload.allRecords,
	                modifiedRequestsArray: allRecArray
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var s = this.state,
	                records = s.modifiedRequestsArray;
	            return _react2.default.createElement(
	                'div',
	                { className: 'ModifiedRequestComponent', key: s.waitingForData },
	                s.waitingForData ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Waiting for data...'
	                ) : _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Requests loaded: ',
	                        s.modifiedRequestCount
	                    ),
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table table-striped table-sm' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Match Request'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Action'
	                                ),
	                                _react2.default.createElement('th', null)
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            records.map(function (record) {
	                                return _react2.default.createElement(ModifiedRequestsListTableRow, { key: record.optKey, data: record });
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ModifiedRequestsListComponent;
	}(_react2.default.Component);
	
	var ModifiedRequestsListTableRow = function (_React$Component2) {
	    _inherits(ModifiedRequestsListTableRow, _React$Component2);
	
	    function ModifiedRequestsListTableRow(props) {
	        _classCallCheck(this, ModifiedRequestsListTableRow);
	
	        return _possibleConstructorReturn(this, (ModifiedRequestsListTableRow.__proto__ || Object.getPrototypeOf(ModifiedRequestsListTableRow)).call(this, props));
	    }
	
	    _createClass(ModifiedRequestsListTableRow, [{
	        key: 'render',
	        value: function render() {
	            var r = this.props.data;
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'code',
	                            null,
	                            r.method,
	                            ':'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            r.showName
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            r.url
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'td',
	                    { 'data-toggle': 'tooltip', 'data-html': 'true',
	                        title: r.redirectURL },
	                    r.requestAction
	                ),
	                _react2.default.createElement(
	                    'td',
	                    { className: 'text-xs-center' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#', 'data-toggle': 'modal', 'data-target': '#modifyRequestModal',
	                            'data-opt-key': r.optKey, 'data-method': r.method, 'data-show-name': r.showName, 'data-url': r.url },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            'Details'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'small',
	                            null,
	                            _react2.default.createElement(
	                                'small',
	                                null,
	                                r.optKey
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ModifiedRequestsListTableRow;
	}(_react2.default.Component);
	
	exports.default = ModifiedRequestsListComponent;

/***/ }

});
//# sourceMappingURL=project-home.bundle.js.map