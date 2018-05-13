'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fb = '/public/c02394f988da51b3e2112f824138b5cf.png';
var ig = '/public/d4f2e4a7937282c9483e7ba9b903af52.png';

var HeaderTopBar = function (_React$Component) {
  _inherits(HeaderTopBar, _React$Component);

  function HeaderTopBar() {
    _classCallCheck(this, HeaderTopBar);

    return _possibleConstructorReturn(this, (HeaderTopBar.__proto__ || Object.getPrototypeOf(HeaderTopBar)).apply(this, arguments));
  }

  _createClass(HeaderTopBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'grayBg' },
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 12, xs: 12, style: { marginTop: '5px' } },
              _react2.default.createElement(
                'a',
                { className: 'floatRight', target: '_blank', href: 'http://facebook.com/Piousbox', title: 'facebook' },
                _react2.default.createElement('img', { src: fb, alt: 'facebook', style: { height: '50px' } })
              ),
              _react2.default.createElement(
                'a',
                { className: 'floatRight', target: '_blank', href: 'http://facebook.com/Piousbox', title: 'facebook' },
                _react2.default.createElement('img', { src: ig, alt: 'instagram', style: { height: '50px' } })
              ),
              _react2.default.createElement(
                'form',
                { className: 'floatRight', style: { marginRight: '1em' } },
                _react2.default.createElement('input', { readOnly: true, type: 'text', name: 'q', placeholder: 'Search...', value: 'Search...', style: { lineHeight: '30px' } }),
                _react2.default.createElement('i', { className: 'fa fa-search fa-1x', style: { marginLeft: '-30px', padding: '4px' } })
              ),
              _react2.default.createElement('div', { className: 'clearfix' })
            )
          )
        )
      );
    }
  }]);

  return HeaderTopBar;
}(_react2.default.Component);

exports.default = HeaderTopBar;
//# sourceMappingURL=HeaderTopBar.js.map