'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var _GalleriesIndexItem = require('./GalleriesIndexItem');

var _GalleriesIndexItem2 = _interopRequireDefault(_GalleriesIndexItem);

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleriesIndex = function (_React$Component) {
  _inherits(GalleriesIndex, _React$Component);

  function GalleriesIndex(props) {
    _classCallCheck(this, GalleriesIndex);

    // console.log('+++ +++ GalleriesIndex constructor:', props)

    var _this = _possibleConstructorReturn(this, (GalleriesIndex.__proto__ || Object.getPrototypeOf(GalleriesIndex)).call(this, props));

    props.dispatch((0, _actions.galleriesIndex)({ page: _this.props.params.galleries_page }));

    _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
    return _this;
  }

  _createClass(GalleriesIndex, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log("+++ +++ galleriesIndex will receive props:", nextProps, this.props, this.state)
      if (nextProps.params.galleries_page !== this.props.params.galleries_page) {
        this.props.dispatch((0, _actions.galleriesIndex)({ page: nextProps.params.galleries_page }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ +++ GalleriesIndex render:', this.props, this.state)
      if (!this.props.galleries || this.props.galleries.length === 0) {
        return null;
      }

      var galleries = [];
      this.props.galleries.forEach(function (n, idx) {
        galleries.push(_react2.default.createElement(_GalleriesIndexItem2.default, { key: idx, gallery: n }));
      });

      var pages = [],
          page = void 0,
          active = void 0;
      for (var i = 1; i <= Math.ceil(this.props.site.n_galleries / 10); i++) {
        // @TODO: this 10 shouldn't be hardwired
        page = !!this.props.params.galleries_page ? this.props.params.galleries_page : 1;
        active = page == i ? 'active' : '';
        pages.push(_react2.default.createElement(
          _reactRouter.Link,
          { key: i, className: 'btn btn-default ' + active, to: _App.AppRouter.galleriesLink({ galleries_page: i }) },
          i
        ));
      }
      var pagination = _react2.default.createElement(
        'div',
        { className: 'pagination' },
        pages
      );

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            pagination,
            galleries,
            pagination
          )
        )
      );
    }
  }]);

  return GalleriesIndex;
}(_react2.default.Component);

GalleriesIndex.propTypes = {
  params: _propTypes2.default.object.isRequired,
  galleries: _propTypes2.default.array,
  site: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    site: state.site,
    galleries: state.galleries
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GalleriesIndex);
//# sourceMappingURL=GalleriesIndex.js.map