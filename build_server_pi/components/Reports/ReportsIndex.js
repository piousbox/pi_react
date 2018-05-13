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

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _actions = require('../../actions');

var _App = require('../App');

var _Leaderboard = require('../App/Leaderboard');

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

var _LargeSquare = require('../App/LargeSquare');

var _LargeSquare2 = _interopRequireDefault(_LargeSquare);

var _ReportsIndexItem = require('./ReportsIndexItem');

var _ReportsIndexItem2 = _interopRequireDefault(_ReportsIndexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportsIndex = function (_React$Component) {
  _inherits(ReportsIndex, _React$Component);

  function ReportsIndex(props) {
    _classCallCheck(this, ReportsIndex);

    // console.log('+++ +++ ReportsIndex constructor:', props)
    var _this = _possibleConstructorReturn(this, (ReportsIndex.__proto__ || Object.getPrototypeOf(ReportsIndex)).call(this, props));

    _this.state = {};
    // this.props.dispatch(siteShow())
    _this.props.dispatch((0, _actions.reportsIndex)({ page: props.params.reports_page }));
    _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
    return _this;
  }

  _createClass(ReportsIndex, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log("+++ +++ reportsIndex will receive props:", nextProps, this.props, this.state)
      if (nextProps.params.reports_page !== this.props.params.reports_page) {
        this.props.dispatch((0, _actions.reportsIndex)({ page: nextProps.params.reports_page }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ +++ render ReportsIndex:', this.props, this.state)
      if (this.props.reports.length === 0) {
        return null;
      }

      var reports = [];
      this.props.reports.forEach(function (n, idx) {
        reports.push(_react2.default.createElement(_ReportsIndexItem2.default, { key: idx, report: n }));
      });

      var pages = [],
          page = void 0,
          active = void 0;
      for (var i = 1; i <= Math.ceil(this.props.site.n_reports / 10); i++) {
        // @TODO: this 10 shouldn't be hardwired
        page = !!this.props.params.reports_page ? this.props.params.reports_page : 1;
        active = page == i ? 'active' : '';
        pages.push(_react2.default.createElement(
          _reactRouter.Link,
          { key: i, className: 'btn btn-default ' + active, to: _App.AppRouter.reportsLink({ reports_page: i }) },
          i
        ));
      }
      var pagination = _react2.default.createElement(
        'div',
        { className: 'pagination' },
        pages
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12 },
              reports,
              pagination,
              'N reports: ',
              this.props.site.n_reports
            )
          )
        )
      );
    }
  }]);

  return ReportsIndex;
}(_react2.default.Component);

ReportsIndex.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    reports: state.reports,
    site: state.site
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReportsIndex);
//# sourceMappingURL=ReportsIndex.js.map