'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LargeSquare = function (_React$Component) {
  _inherits(LargeSquare, _React$Component);

  function LargeSquare() {
    _classCallCheck(this, LargeSquare);

    return _possibleConstructorReturn(this, (LargeSquare.__proto__ || Object.getPrototypeOf(LargeSquare)).apply(this, arguments));
  }

  _createClass(LargeSquare, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    // width:336px;height:280px

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ad' },
        _react2.default.createElement('ins', { className: 'adsbygoogle',
          style: { display: 'block' },
          'data-ad-client': 'ca-pub-5283251584689528',
          'data-ad-slot': '4313128610',
          'data-ad-format': 'auto' })
      );
    }
  }]);

  return LargeSquare;
}(_react2.default.Component);

exports.default = LargeSquare;
//# sourceMappingURL=LargeSquare.js.map