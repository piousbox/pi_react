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

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _Footer = require('./Footer3');

var _Footer2 = _interopRequireDefault(_Footer);

var _Leaderboard = require('./Leaderboard');

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

var _HeaderTopBar = require('./HeaderTopBar');

var _HeaderTopBar2 = _interopRequireDefault(_HeaderTopBar);

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavigation = function (_React$Component) {
  _inherits(MainNavigation, _React$Component);

  function MainNavigation(props) {
    _classCallCheck(this, MainNavigation);

    var _this = _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).call(this, props));

    _this.state = { mobileMenuVisible: false };
    props.dispatch((0, _actions.siteShow)());
    _this.toggleMobileMenu = _this.toggleMobileMenu.bind(_this);
    return _this;
  }

  _createClass(MainNavigation, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log("+++ +++ MainNavigation componentWillReceiveProps:", nextProps)

      if (nextProps.site) {
        document.title = nextProps.site.title;
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount(nextProps) {
      // console.log("+++ +++ MainNavigation componentWillMount:", nextProps)
    }
  }, {
    key: 'toggleMobileMenu',
    value: function toggleMobileMenu(e) {
      e.preventDefault();
      // console.log('+++ toggleMobileMenu')
      this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible });
      $(this.refs['mobile-menu']).slideToggle(500);
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ +++ MainNavigation render:', this.props, this.state)
      if (!this.props.site) {
        return null;
      }

      var galleriesSelected = void 0,
          homeSelected = 'selected',
          reportsSelected = void 0,
          tagsSelected = void 0,
          videosSelected = void 0,
          peopleSelected = void 0;
      this.props.routes.map(function (route, idx) {
        // galleries
        if (route.path === _AppRouter2.default.galleriesPath || route.path === _AppRouter2.default.galleriesPagesPath || route.path === _AppRouter2.default.galleryPath || route.path === _AppRouter2.default.galleryPhotoPath) {
          galleriesSelected = 'selected';
          homeSelected = null;
        }
        // reports
        if (route.path === _AppRouter2.default.reportsPath || route.path === _AppRouter2.default.reportsPagesPath || route.path === _AppRouter2.default.reportPath) {
          reportsSelected = 'selected';
          homeSelected = null;
        }
        // tags
        if (route.path === _AppRouter2.default.tagsPath || route.path === _AppRouter2.default.tagPath) {
          tagsSelected = 'selected';
          homeSelected = null;
        }
        // videos
        if (route.path === _AppRouter2.default.videosPath || route.path === _AppRouter2.default.videosPagesPath || route.path === _AppRouter2.default.videoPath) {
          videosSelected = 'selected';
          homeSelected = null;
        }
        // people
        if (route.path === _AppRouter2.default.peoplePath) {
          peopleSelected = 'selected';
          homeSelected = null;
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderTopBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'center main-logo' },
          _react2.default.createElement(
            'h1',
            { style: { margin: 0, fontFamily: 'serif' } },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              this.props.site.title
            )
          ),
          _react2.default.createElement(
            'h4',
            null,
            this.props.site.subhead
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu-primary' },
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
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.rootLink() },
                      'Home'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('salsa') },
                      'Salsa'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('bachata') },
                      'Bachata'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('sketches') },
                      'Sketches'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('travel') },
                      'Travel'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('music') },
                      'Music'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('javascript') },
                      'Javascript'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagLink('ruby') },
                      'Ruby'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu-secondary' },
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
                  'ul',
                  null,
                  _config2.default.reportsEnabled && _react2.default.createElement(
                    'li',
                    { className: reportsSelected },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.reportsLink() },
                      'Reports'
                    )
                  ),
                  _config2.default.galleriesEnabled && _react2.default.createElement(
                    'li',
                    { className: galleriesSelected },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.galleriesLink() },
                      'Galleries'
                    )
                  ),
                  _config2.default.videosEnabled && _react2.default.createElement(
                    'li',
                    { className: videosSelected },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.videosLink() },
                      'Videos'
                    )
                  ),
                  _config2.default.tagsEnabled && _react2.default.createElement(
                    'li',
                    { className: tagsSelected },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.tagsLink() },
                      'Tags'
                    )
                  ),
                  _config2.default.peopleEnabled && _react2.default.createElement(
                    'li',
                    { className: peopleSelected },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: _AppRouter2.default.peopleLink() },
                      'People'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          this.props.children
        ),
        _react2.default.createElement(_Footer2.default, { reports: this.props.site.reports })
      );
    }
  }]);

  return MainNavigation;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainNavigation);
//# sourceMappingURL=MainNavigation.js.map