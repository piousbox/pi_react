'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAdsense = require('react-adsense');

var _reactAdsense2 = _interopRequireDefault(_reactAdsense);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdSkyscraper = function (_React$Component) {
  _inherits(AdSkyscraper, _React$Component);

  function AdSkyscraper() {
    _classCallCheck(this, AdSkyscraper);

    return _possibleConstructorReturn(this, (AdSkyscraper.__proto__ || Object.getPrototypeOf(AdSkyscraper)).apply(this, arguments));
  }

  _createClass(AdSkyscraper, [{
    key: 'render',
    value: function render() {
      if (_config2.default.envName === 'development') {
        return _react2.default.createElement(
          'div',
          { className: 'adContainer', style: { width: '160px', height: '600px', color: 'gray', border: '1px solid gray' } },
          'AdSkyscraper'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'adContainer', style: { width: '160px', height: '600px', color: 'white' } },
        _react2.default.createElement(_reactAdsense2.default.Google, { client: 'ca-pub-5283251584689528', slot: '1776642375', style: { width: 160, height: 600, float: 'left' }, format: '' })
      );
    }
  }]);

  return AdSkyscraper;
}(_react2.default.Component);

exports.default = AdSkyscraper;
//# sourceMappingURL=AdSkyscraper.js.map