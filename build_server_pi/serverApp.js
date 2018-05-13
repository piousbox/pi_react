'use strict';

require('./favicon.ico');

require('./index.html');

require('babel-core/polyfill');

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

require('./scss/app.scss');

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

(0, _reactDom.hydrate)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));
//# sourceMappingURL=serverApp.js.map