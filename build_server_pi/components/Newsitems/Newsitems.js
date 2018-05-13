'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _actions = require('../../actions');

var _Newsitem = require('./Newsitem');

var _Newsitem2 = _interopRequireDefault(_Newsitem);

var _Center = require('./../Center');

var _Center2 = _interopRequireDefault(_Center);

var _Clearfix = require('./../Clearfix');

var _Clearfix2 = _interopRequireDefault(_Clearfix);

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newsitems = function (_React$Component) {
  _inherits(Newsitems, _React$Component);

  function Newsitems(props) {
    _classCallCheck(this, Newsitems);

    var _this = _possibleConstructorReturn(this, (Newsitems.__proto__ || Object.getPrototypeOf(Newsitems)).call(this, props));

    _this.state = {};

    _this.gotoPage = _this.gotoPage.bind(_this);
    return _this;
  }

  _createClass(Newsitems, [{
    key: 'gotoPage',
    value: function gotoPage(page) {
      console.log('+++ gotoPage of Newsitems:', page, this.props, this.state);

      this.setState(Object.assign({}, this.state, { page: page }));
      this.props.dispatch((0, _actions.siteNewsitemsAction)({ page: page }));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('+++ Newsitems willReceiveProps:', nextProps, this.props, this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('+++ +++ Newsitems render:', this.props, this.state);

      var listitems = [];
      var newsitems = this.props.newsitems;
      if (newsitems && newsitems.length > 0) {
        var idx = 0;
        newsitems.map(function (n, idx) {
          listitems.push(_react2.default.createElement(
            _reactBootstrap.Col,
            { key: idx, xs: 12 },
            _react2.default.createElement(_Newsitem2.default, { key: idx, newsitem: n })
          ));
          if ((idx + 1) % 2 === 0) {
            listitems.push(_react2.default.createElement(_Clearfix2.default, { key: idx + '-clearfix' }));
          }
        });
      }

      /**
       * pagination
       **/
      var pagination = [];
      var pageNumber = 1;
      var activeStyle = { fontWeight: 'bold' };
      var lambda = function lambda(pageNum, idx) {
        pagination.push(_react2.default.createElement(
          'li',
          { key: idx, className: _this2.props.page == pageNum ? 'selected' : '' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: _App.AppRouter.newsLink(pageNum) },
            pageNum
          )
        ));
      };
      if (this.props.site) {
        for (var i = 0; i < this.props.site.n_newsitems; i += this.props.site.newsitems_per_page) {
          lambda(pageNumber++, i);
        }
      }
      var lastPage = Math.ceil(this.props.site.n_newsitems / this.props.site.newsitems_per_page);
      var paginationRender = _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 12 },
        _react2.default.createElement(
          'ul',
          { className: 'pagination clearfix page_margin_top_section' },
          this.props.page != 1 && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: _App.AppRouter.newsLink(parseInt(this.props.page) - 1) },
              '<'
            )
          ),
          pagination,
          this.props.page != lastPage && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: _App.AppRouter.newsLink(parseInt(this.props.page) + 1) },
              '>'
            )
          )
        )
      );

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        listitems,
        paginationRender
      );
    }
  }]);

  return Newsitems;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Newsitems);
//# sourceMappingURL=Newsitems.js.map