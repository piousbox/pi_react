'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _App = require('../App');

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsitemReport = function (_React$Component) {
  _inherits(NewsitemReport, _React$Component);

  function NewsitemReport() {
    _classCallCheck(this, NewsitemReport);

    return _possibleConstructorReturn(this, (NewsitemReport.__proto__ || Object.getPrototypeOf(NewsitemReport)).apply(this, arguments));
  }

  _createClass(NewsitemReport, [{
    key: 'render',
    value: function render() {
      console.log('+++ +++ NewsitemReport:', this.props, this.state);

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '2em' } },
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(
            _App.TgmLink,
            { newsitem: this.props.newsitem },
            this.props.newsitem.title || this.props.newsitem.name
          )
        ),
        _react2.default.createElement(_Meta2.default, { item: this.props.newsitem, without: _constants.CONST.tag }),
        this.props.newsitem.desciption && _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: this.props.newsitem.description } })
      );
    }
  }]);

  return NewsitemReport;
}(_react2.default.Component);

exports.default = NewsitemReport;
//# sourceMappingURL=NewsitemReport.js.map