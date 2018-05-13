'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AdBanner = require('./AdBanner');

var _AdBanner2 = _interopRequireDefault(_AdBanner);

var _AdLargeSquare = require('./AdLargeSquare');

var _AdLargeSquare2 = _interopRequireDefault(_AdLargeSquare);

var _AdSkyscraper = require('./AdSkyscraper');

var _AdSkyscraper2 = _interopRequireDefault(_AdSkyscraper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdCot = function (_React$Component) {
  _inherits(AdCot, _React$Component);

  function AdCot() {
    _classCallCheck(this, AdCot);

    return _possibleConstructorReturn(this, (AdCot.__proto__ || Object.getPrototypeOf(AdCot)).apply(this, arguments));
  }

  _createClass(AdCot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AdMySmallSquare' },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://colombia-tailors.com' },
            'colombia-tailors.com'
          )
        )
      );
    }
  }]);

  return AdCot;
}(_react2.default.Component);

var AdSkim = function (_React$Component2) {
  _inherits(AdSkim, _React$Component2);

  function AdSkim() {
    _classCallCheck(this, AdSkim);

    return _possibleConstructorReturn(this, (AdSkim.__proto__ || Object.getPrototypeOf(AdSkim)).apply(this, arguments));
  }

  _createClass(AdSkim, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AdMySmallSquare' },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://skim.law' },
            'skim.law'
          )
        )
      );
    }
  }]);

  return AdSkim;
}(_react2.default.Component);

var AdTgm = function (_React$Component3) {
  _inherits(AdTgm, _React$Component3);

  function AdTgm() {
    _classCallCheck(this, AdTgm);

    return _possibleConstructorReturn(this, (AdTgm.__proto__ || Object.getPrototypeOf(AdTgm)).apply(this, arguments));
  }

  _createClass(AdTgm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AdMySmallSquare' },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://travel-guide.mobi' },
            'travel-guide.mobi'
          )
        )
      );
    }
  }]);

  return AdTgm;
}(_react2.default.Component);

var AdWasya = function (_React$Component4) {
  _inherits(AdWasya, _React$Component4);

  function AdWasya() {
    _classCallCheck(this, AdWasya);

    return _possibleConstructorReturn(this, (AdWasya.__proto__ || Object.getPrototypeOf(AdWasya)).apply(this, arguments));
  }

  _createClass(AdWasya, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AdMySmallSquare' },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://wasya.co' },
            'wasya.co'
          )
        )
      );
    }
  }]);

  return AdWasya;
}(_react2.default.Component);

var AdWdz = function (_React$Component5) {
  _inherits(AdWdz, _React$Component5);

  function AdWdz() {
    _classCallCheck(this, AdWdz);

    return _possibleConstructorReturn(this, (AdWdz.__proto__ || Object.getPrototypeOf(AdWdz)).apply(this, arguments));
  }

  _createClass(AdWdz, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AdMySmallSquare' },
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://webdevzine.com' },
            'webdevzine.com'
          )
        )
      );
    }
  }]);

  return AdWdz;
}(_react2.default.Component);

exports.default = {
  AdBanner: _AdBanner2.default,
  AdCot: AdCot,
  AdLargeSquare: _AdLargeSquare2.default,
  AdSkim: AdSkim,
  AdSkyscraper: _AdSkyscraper2.default,
  AdTgm: AdTgm,
  AdWasya: AdWasya,
  AdWdz: AdWdz
};
//# sourceMappingURL=index.js.map