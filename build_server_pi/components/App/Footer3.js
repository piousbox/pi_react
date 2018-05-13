'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _index = require('./index');

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

var Footer3 = function (_React$Component) {
  _inherits(Footer3, _React$Component);

  function Footer3(props) {
    _classCallCheck(this, Footer3);

    return _possibleConstructorReturn(this, (Footer3.__proto__ || Object.getPrototypeOf(Footer3)).call(this, props));
  }

  _createClass(Footer3, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ Footer3:', this.props, this.state)
      // if (Object.keys(this.props.site).length === 0) { return (null) }

      var langs = [];
      this.props.site.langs && this.props.site.langs.forEach(function (lang) {
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
            { to: _index.AppRouter.siteLink(lang) },
            _react2.default.createElement('img', { src: flag, alt: lang })
          )
        ));
      });

      var latestReports = [];
      this.props.reports && this.props.reports.map(function (report, idx) {
        if (idx < 4) {
          // limit 4 here
          latestReports.push(_react2.default.createElement(
            'li',
            { key: idx, style: { display: 'block' } },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h5',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _index.AppRouter.reportLink(report) },
                  report.name
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'post_details simple' },
                _react2.default.createElement(
                  'li',
                  { className: 'date' },
                  report.created_at.substring(0, 10)
                )
              )
            )
          ));
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mainFooter' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 3 },
                _react2.default.createElement(
                  'h4',
                  { className: 'box-header' },
                  'About ',
                  this.props.site.domain
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  this.props.site.description
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 6 },
                _react2.default.createElement(
                  'h4',
                  { className: 'box-header' },
                  'Latest Posts'
                ),
                _react2.default.createElement(
                  'ul',
                  { style: { marginLeft: '10px', marginTop: '25px' } },
                  latestReports
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 3 },
                _react2.default.createElement(
                  'h4',
                  { className: 'box-header' },
                  'Get In Touch With Us'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'ul',
                  { className: 'footer-menu' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _index.AppRouter.tagLink('music') },
                      'Music'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _index.AppRouter.tagLink('dance') },
                      'Dance'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _index.AppRouter.tagLink('ftim') },
                      'The FTIM Adventure'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _index.AppRouter.tagLink('sports') },
                      'Sports & Health'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _index.AppRouter.tagLink('photography') },
                      'Photography'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer4' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, sm: 12 },
                '2018 \xA9 Copyright Wasya Co',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Terms of Service'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer3;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Footer3);
//# sourceMappingURL=Footer3.js.map