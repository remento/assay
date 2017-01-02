webpackJsonp([1],{

/***/ 0:
/*!***********************************************!*\
  !*** ./src/client/app/pages/project-home.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 37);
	
	var _RequestTrafficComponent = __webpack_require__(/*! ./../components/RequestTrafficComponent.jsx */ 183);
	
	var _RequestTrafficComponent2 = _interopRequireDefault(_RequestTrafficComponent);
	
	var _ProjectListComponent = __webpack_require__(/*! ./../components/ProjectListComponent.jsx */ 184);
	
	var _ProjectListComponent2 = _interopRequireDefault(_ProjectListComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	          'h1',
	          null,
	          'Project-Home'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'RequestTrafficComponent:'
	        ),
	        _react2.default.createElement('xRequestTrafficComponent', null),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'p',
	          null,
	          'List of projects currently on Assay'
	        ),
	        _react2.default.createElement(_ProjectListComponent2.default, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 183:
/*!***************************************************************!*\
  !*** ./src/client/app/components/RequestTrafficComponent.jsx ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _app = __webpack_require__(/*! firebase/app */ 3);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import reactfire from 'reactfire'; //not used per mixin depreciation w/ES6
	
	var RequestTrafficComponent = function (_React$Component) {
	    _inherits(RequestTrafficComponent, _React$Component);
	
	    function RequestTrafficComponent(props) {
	        _classCallCheck(this, RequestTrafficComponent);
	
	        var _this = _possibleConstructorReturn(this, (RequestTrafficComponent.__proto__ || Object.getPrototypeOf(RequestTrafficComponent)).call(this, props));
	
	        _this.data = [];
	        _this.pendingInitLoad = true;
	        _this.projectCode = 'glorious-frogs';
	        _this.dbRefStr = 'projectRequests/' + _this.projectCode;
	        if (!_this.projectCode) {
	            throw "RequestTrafficComponent requires a project code be provided";
	        }
	        return _this;
	    }
	
	    _createClass(RequestTrafficComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var ref = _app2.default.database().ref(this.dbRefStr);
	            ref.on('child_added', function (snap) {
	                console.log('RequestTraffic:child_added', snap);
	                this.pendingInitLoad = false;
	                this.data.push(snap.val());
	                this.setState({
	                    pendingInitLoad: this.pendingInitLoad,
	                    data: this.data
	                });
	            }.bind(this));
	        }
	
	        //
	
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'RequestTrafficComponent', key: this.pendingInitLoad },
	                this.pendingInitLoad ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Waiting for data...'
	                ) : _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Request count: (',
	                        this.data.length,
	                        ')'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return RequestTrafficComponent;
	}(_react2.default.Component);
	//<ProjectList value={this.projects} />
	//// displays the actual project record/row
	//class ProjectList extends React.Component {
	//    constructor(props) {
	//        super(props);
	//        this.projects = props.value;
	//    }
	//    render() {
	//        var projects = this.projects;
	//        return (
	//            <ol>
	//                {projects.map( (project) =>
	//                    <ProjListItem key={project.code} value={project}/>
	//                )}
	//            </ol>
	//        );
	//    }
	//}
	//
	//// displays the actual project record/row
	//class ProjListItem extends React.Component {
	//    constructor(props) {
	//        super(props);
	//        this.project=props.value;
	//    }
	//    render() {
	//        let p = this.project;
	//        return (
	//            <li>
	//                <a href={'/projects/' + p.code + '/'}>
	//                    {p.code}
	//                </a> is proxying: {p.source.host}
	//            </li>
	//        );
	//    }
	//}
	
	exports.default = RequestTrafficComponent;

/***/ }

});
//# sourceMappingURL=project.bundle.js.map