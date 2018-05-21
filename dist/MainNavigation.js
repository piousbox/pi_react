'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavigation = function (_React$Component) {
  _inherits(MainNavigation, _React$Component);

  function MainNavigation() {
    _classCallCheck(this, MainNavigation);

    return _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).apply(this, arguments));
  }

  _createClass(MainNavigation, [{
    key: 'render',
    value: function render() {
      // console.log('+++ main nav:', this.props)

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'main-header' },
          _react2.default.createElement(
            'div',
            { className: 'search' },
            'search, social'
          ),
          _react2.default.createElement('div', { className: 'clearfix' }),
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'div',
                  { className: 'title' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Piousbox'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'subtitle' },
                  'subtitle'
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'divider-large' }),
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'div',
                  { className: 'main-menu' },
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/contact' },
                      'Contact'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/blog' },
                      'Blog'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'divider-small' }),
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'div',
                  { className: 'second-menu' },
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/reports' },
                      'Reports'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/galleries' },
                      'Galleries'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/videos' },
                      'Videos'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/events' },
                      'Events'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/people' },
                      'People'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'divider-small' })
        ),
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12 },
              this.props.children
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'main-footer' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 12 },
                _react2.default.createElement(
                  'div',
                  { className: 'center' },
                  'Copyright \xA9 2018 Wasya co'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MainNavigation;
}(_react2.default.Component);

exports.default = MainNavigation;
//# sourceMappingURL=MainNavigation.js.map