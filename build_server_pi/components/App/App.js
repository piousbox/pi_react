'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _MainNavigation = require('./MainNavigation');

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _Galleries = require('../Galleries');

var _Reports = require('../Reports');

var _Videos = require('../Videos');

var _Tags = require('../Tags');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactDOM from 'react-dom'

// import { Provider, connect } from 'react-redux'


// import config     from 'config'
// import PropTypes from 'prop-types'

// import bg         from './images/noisy_grid.png'
// import store      from '../../stores'

var routes = [{ path: '/',
  component: _MainNavigation2.default,
  indexRoute: { component: _Home2.default },
  childRoutes: [{ path: _AppRouter2.default.galleriesPath, component: _Galleries.GalleriesIndex }, { path: _AppRouter2.default.galleriesPagesPath, component: _Galleries.GalleriesIndex }, { path: _AppRouter2.default.galleryPath, component: _Galleries.GalleriesShow }, { path: _AppRouter2.default.galleryPhotoPath, component: _Galleries.GalleriesPhotoShow }, { path: _AppRouter2.default.newsPath, component: _Home2.default }, { path: _AppRouter2.default.reportsPath, component: _Reports.ReportsIndex }, { path: _AppRouter2.default.reportsPagesPath, component: _Reports.ReportsIndex }, { path: _AppRouter2.default.reportPath, component: _Reports.ReportsShow }, { path: _AppRouter2.default.sitePath, component: _Home2.default }, { path: _AppRouter2.default.sitePath1, component: _Home2.default }, { path: _AppRouter2.default.sitePath2, component: _Home2.default }, { path: _AppRouter2.default.tagsPath, component: _Tags.TagsIndex }, { path: _AppRouter2.default.tagPath, component: _Tags.TagShow }, { path: _AppRouter2.default.videosPath, component: _Videos.VideosIndex }, { path: _AppRouter2.default.videosPagesPath, component: _Videos.VideosIndex }, { path: _AppRouter2.default.videoPath, component: _Videos.VideosShow }]
}];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ App props:', this.props, this.state)
      return _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: routes, onUpdate: function onUpdate() {
          return window.scrollTo(0, 0);
        } });
    }
  }]);

  return App;
}(_react2.default.Component);

/* function mapStateToProps(state, ownProps) {
  return {}
} */

exports.default = App; // connect(mapStateToProps)(App)
//# sourceMappingURL=App.js.map