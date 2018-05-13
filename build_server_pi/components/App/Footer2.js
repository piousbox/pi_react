'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _reactRouter = require('react-router');

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _constants = require('../../constants');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bg = '/public/a05f1fb32996567bf53cc6d415cc5e55.png';
var ig = '/public/d4f2e4a7937282c9483e7ba9b903af52.png';
var fb = '/public/c02394f988da51b3e2112f824138b5cf.png';
var uu = '/public/fd10bc9205044c6ada0aaff8f4ff0cd0.png';
var es = '/public/5edfd74be68ee0c3d7e88b8096e3348f.png';
var ru = '/public/eed3ed3aa3af292ea6ea8344f74e8e5f.png';
var en = '/public/8968bea9dcbe39486e695bf73ad31ab4.png';
var pt = '/public/6fd5d27637a7ef6d0b60542b95d34743.png';

var Footer2 = function (_React$Component) {
  _inherits(Footer2, _React$Component);

  function Footer2(props) {
    _classCallCheck(this, Footer2);

    var _this = _possibleConstructorReturn(this, (Footer2.__proto__ || Object.getPrototypeOf(Footer2)).call(this, props));

    _this.logout = function () {
      _this.props.dispatch({ type: _constants.DO_LOGOUT });
    };

    _this.props.dispatch((0, _actions.siteShow)());
    return _this;
  }

  _createClass(Footer2, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ Footer2:', this.props, this.state)

      var langs = [];
      if (this.props.site && this.props.site.langs) {
        this.props.site.langs.forEach(function (lang) {
          var flag = null;
          switch (lang) {
            case 'es':
              flag = es;
              break;
            case 'ru':
              flag = ru;
              break;
            case 'pt':
              flag = pt;
              break;
            case 'en':
            default:
              flag = en;
          }
          langs.push(_react2.default.createElement(
            'li',
            { key: lang },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: _AppRouter2.default.siteLink(lang) },
              _react2.default.createElement('img', { src: flag, alt: lang })
            )
          ));
        });
      }

      return _react2.default.createElement(
        'div',
        { style: { backgroundImage: 'url(' + bg + ')', marginTop: '1em' } },
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12, style: { padding: '10px' } },
              '2017 \xA9 Wasya Co',
              _react2.default.createElement('br', null)
            )
          )
        )
      );
    }
  }]);

  return Footer2;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Footer2);
//# sourceMappingURL=Footer2.js.map