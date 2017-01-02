webpackJsonp([2],[
/* 0 */
/*!**********************************************!*\
  !*** ./src/client/app/pages/get-started.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 37);
	
	var _ProjectListComponent = __webpack_require__(/*! ./../components/ProjectListComponent.jsx */ 184);
	
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

/***/ }
]);
//# sourceMappingURL=projects.bundle.js.map