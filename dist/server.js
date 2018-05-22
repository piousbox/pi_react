'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = require('react-router');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _MainNavigation = require('./MainNavigation');

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = _reactRouter.StaticRouter;

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var NoMatch = function (_React$Component) {
  _inherits(NoMatch, _React$Component);

  function NoMatch() {
    _classCallCheck(this, NoMatch);

    return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
  }

  _createClass(NoMatch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'no match'
      );
    }
  }]);

  return NoMatch;
}(_react2.default.Component);

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
app.use(_express2.default.static(_config2.default.staticDir));

app.use((0, _morgan2.default)('dev')); // logger

app.use((0, _cors2.default)({
  exposedHeaders: _config2.default.corsHeaders
}));

function handleRender(req, res) {
  var params = _qs2.default.parse(req.query);
  var html = (0, _server.renderToString)(_react2.default.createElement(
    Router,
    { context: {}, location: req.url },
    _react2.default.createElement(_App2.default, null)
  ));

  var finalState = store.getState();
  res.send(renderFullPage(html, finalState));
}
app.use(handleRender);

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Piousbox - Musings and ramblights for your lighthearted entertainment</title>\n        <!-- Latest compiled and minified bootstrap CSS -->\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n        <!-- Optional bootstrap theme -->\n        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-roN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> -->\n        <link rel="stylesheet" href="' + _config2.default.staticDomain + '/piousbox.com/style.css" >\n      </head>\n      <body>\n        <div id="app">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/client.js"></script>\n\n        <!-- Global site tag (gtag.js) - Google Analytics -->\n        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47088821-4"></script>\n        <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag(\'js\', new Date());\n          gtag(\'config\', \'UA-47088821-4\'); // _vp_ 20180503 20180517 annesque.com\n        </script>\n            \n      </body>\n    </html>\n  ';
}

app.server.listen(process.env.PORT || _config2.default.port, function () {
  console.log('+++ +++ Started on port ' + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=server.js.map