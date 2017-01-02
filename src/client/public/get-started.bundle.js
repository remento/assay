webpackJsonp([1],{

/***/ 0:
/*!**********************************************!*\
  !*** ./src/client/app/pages/get-started.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 34);
	
	var _ProjectListComponent = __webpack_require__(/*! ./../components/ProjectListComponent.jsx */ 183);
	
	var _ProjectListComponent2 = _interopRequireDefault(_ProjectListComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import TrafficList from './../components/RequestTrafficComponent.jsx';
	
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    console.log('page:get-started');
	    return _this;
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
	          'Getting Started'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Start a new project'
	        ),
	        _react2.default.createElement(
	          'em',
	          null,
	          'new project form'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Join a  already in progress...'
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
/*!************************************************************!*\
  !*** ./src/client/app/components/ProjectListComponent.jsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _app = __webpack_require__(/*! firebase/app */ 184);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _DataSyncService = __webpack_require__(/*! ../services/DataSyncService */ 185);
	
	var _DataSyncService2 = _interopRequireDefault(_DataSyncService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import reactfire from 'reactfire'; //not used per mixin depreciation w/ES6
	
	var ProjectListComponent = function (_React$Component) {
	    _inherits(ProjectListComponent, _React$Component);
	
	    function ProjectListComponent(props) {
	        _classCallCheck(this, ProjectListComponent);
	
	        var _this = _possibleConstructorReturn(this, (ProjectListComponent.__proto__ || Object.getPrototypeOf(ProjectListComponent)).call(this, props));
	
	        _this.projects = [];
	        _this.pendingInitLoad = true;
	        return _this;
	    }
	
	    //@see https://github.com/firebase/reactfire/blob/master/docs/guide.md
	
	
	    _createClass(ProjectListComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //console.log('ProjectListComponent:componentWillMount:firebase',firebase);
	            var projRef = _app2.default.database().ref("projectList");
	            projRef.on('child_added', function (projectSnap) {
	                //called for each existing project on load
	                console.log('projectList:child_added', projectSnap);
	                this.pendingInitLoad = false; // assumes always at least one proj
	                this.projects.push(projectSnap.val());
	                this.setState({
	                    pendingInitLoad: this.pendingInitLoad,
	                    projects: this.projects
	                });
	            }.bind(this));
	        }
	
	        //
	
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'ProjectListComponent', key: this.pendingInitLoad },
	                this.pendingInitLoad ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Loading...'
	                ) : _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Project count: (',
	                        this.projects.length,
	                        ')'
	                    ),
	                    _react2.default.createElement(ProjectList, { value: this.projects })
	                )
	            );
	        }
	    }]);
	
	    return ProjectListComponent;
	}(_react2.default.Component);
	
	// displays the actual project record/row
	
	
	var ProjectList = function (_React$Component2) {
	    _inherits(ProjectList, _React$Component2);
	
	    function ProjectList(props) {
	        _classCallCheck(this, ProjectList);
	
	        var _this2 = _possibleConstructorReturn(this, (ProjectList.__proto__ || Object.getPrototypeOf(ProjectList)).call(this, props));
	
	        _this2.projects = props.value;
	        return _this2;
	    }
	
	    _createClass(ProjectList, [{
	        key: 'render',
	        value: function render() {
	            var projects = this.projects;
	            return _react2.default.createElement(
	                'ol',
	                null,
	                projects.map(function (project) {
	                    return _react2.default.createElement(ProjListItem, { key: project.code, value: project });
	                })
	            );
	        }
	    }]);
	
	    return ProjectList;
	}(_react2.default.Component);
	
	// displays the actual project record/row
	
	
	var ProjListItem = function (_React$Component3) {
	    _inherits(ProjListItem, _React$Component3);
	
	    function ProjListItem(props) {
	        _classCallCheck(this, ProjListItem);
	
	        var _this3 = _possibleConstructorReturn(this, (ProjListItem.__proto__ || Object.getPrototypeOf(ProjListItem)).call(this, props));
	
	        _this3.project = props.value;
	        return _this3;
	    }
	
	    _createClass(ProjListItem, [{
	        key: 'render',
	        value: function render() {
	            var p = this.project;
	            return _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { href: '/projects/' + p.code + '/' },
	                    p.code
	                ),
	                ' is proxying: ',
	                p.source.host
	            );
	        }
	    }]);
	
	    return ProjListItem;
	}(_react2.default.Component);
	
	exports.default = ProjectListComponent;

/***/ }

});
//# sourceMappingURL=get-started.bundle.js.map