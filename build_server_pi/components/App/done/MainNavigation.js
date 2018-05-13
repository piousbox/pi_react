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

var _reactBootstrap = require('react-bootstrap');

var _reduxAuth = require('redux-auth');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterBootstrap = require('react-router-bootstrap');

var _reactFacebookAuth = require('react-facebook-auth');

var _reactFacebookAuth2 = _interopRequireDefault(_reactFacebookAuth);

var _defaultTheme = require('redux-auth/default-theme');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _App = require('./_App.scss');

var _App2 = _interopRequireDefault(_App);

var _Footer = require('./Footer3');

var _Footer2 = _interopRequireDefault(_Footer);

var _Leaderboard = require('./Leaderboard');

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

var _constants = require('../../constants');

var _actions = require('../../actions');

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyFacebookButton = function MyFacebookButton(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { onClick: onClick },
    'f'
  );
};

var MainNavigation = function (_React$Component) {
  _inherits(MainNavigation, _React$Component);

  function MainNavigation(props) {
    _classCallCheck(this, MainNavigation);

    var _this = _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).call(this, props));

    _this.state = { profile: {} };
    return _this;
  }

  _createClass(MainNavigation, [{
    key: 'componentWillMount',
    value: function componentWillMount(nextProps) {
      // this.props.dispatch({ type: SET_API_URL, apiUrl: config.apiUrl });
      // console.log("+++ +++ MainNavigation nextProps?:", nextProps)
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log('+++ +++ MainNavigation render:', this.props, this.state)

      var profilePic = null;
      if (this.props.profile.id) {
        profilePic = _react2.default.createElement('img', { src: '//graph.facebook.com/' + this.props.profile.id + '/picture', alt: '' });
      } else if (this.state.profile.id) {
        profilePic = _react2.default.createElement('img', { src: '//graph.facebook.com/' + this.state.profile.id + '/picture', alt: '' });
      }
      var fbLogin = _react2.default.createElement(_reactFacebookAuth2.default, { appId: _config2.default.fbAppId, fields: 'name,email,picture',
        callback: function callback(response) {
          _this2.props.dispatch((0, _actions.profileAction)(response));
        },
        component: MyFacebookButton });

      var lang = this.props.profile.lang;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _config2.default.siteTitle
              )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { bsStyle: 'pills', pullRight: true },
              _config2.default.citiesEnabled ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/en/cities' },
                  'Cities'
                )
              ) : null,
              _config2.default.tagsEnabled ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.tagsLink() },
                  'Tags'
                )
              ) : null,
              _config2.default.galleriesEnabled ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.galleriesLink },
                  'Galleries'
                )
              ) : null,
              _config2.default.reportsEnabled ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.reportsLink },
                  'Reports'
                )
              ) : null,
              _config2.default.galleriesEnabled ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.galleriesLink },
                  'Galleries'
                )
              ) : null
            )
          )
        ),
        _react2.default.createElement(_Leaderboard2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return MainNavigation;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
    domain: state.domain,
    profile: state.profile
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainNavigation);
//# sourceMappingURL=MainNavigation.js.map