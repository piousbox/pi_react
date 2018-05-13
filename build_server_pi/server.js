'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerApp = function (_React$Component) {
  _inherits(ServerApp, _React$Component);

  function ServerApp() {
    _classCallCheck(this, ServerApp);

    return _possibleConstructorReturn(this, (ServerApp.__proto__ || Object.getPrototypeOf(ServerApp)).apply(this, arguments));
  }

  _createClass(ServerApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'ServerApp'
      );
    }
  }]);

  return ServerApp;
}(_react2.default.Component);

// import './favicon.ico'
// import 'babel-core/polyfill'
// import 'normalize.css/normalize.css'


// import './scss/app.scss'


var app = (0, _express2.default)();
var port = 3001;

app.use('/static', _express2.default.static('static'));

function handleRender(req, res) {
  var params = _qs2.default.parse(req.query);

  var counter = parseInt(params.counter, 10) || 0;
  var preloadedState = { counter: counter };

  var store = (0, _redux.createStore)(_reducers2.default);
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    {
      location: req.url,
      context: context
    },
    _react2.default.createElement(ServerApp, null)
  ));

  var finalState = store.getState();
  res.send(renderFullPage(html, finalState));
}
app.use(handleRender);

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/static/bundle.js"></script>\n      </body>\n    </html>\n  ';
}

app.listen(port);
//# sourceMappingURL=server.js.map