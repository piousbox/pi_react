'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportsIndexItem = function (_React$Component) {
  _inherits(ReportsIndexItem, _React$Component);

  function ReportsIndexItem(props) {
    _classCallCheck(this, ReportsIndexItem);

    var _this = _possibleConstructorReturn(this, (ReportsIndexItem.__proto__ || Object.getPrototypeOf(ReportsIndexItem)).call(this, props));

    _this.state = {
      report: {}
    };
    return _this;
  }

  _createClass(ReportsIndexItem, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ ReportsIndexItem render:', this.props, this.state)

      return _react2.default.createElement(
        _reactBootstrap.Panel,
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: _App.AppRouter.reportLink(this.props.report) },
            this.props.report.name
          )
        ),
        this.props.report.subhead,
        this.props.report.body
      );
    }
  }]);

  return ReportsIndexItem;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    // reports: state.reports,
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReportsIndexItem);
//# sourceMappingURL=ReportsIndexItem.js.map