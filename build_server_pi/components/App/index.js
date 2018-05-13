'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Clearfix = require('./Clearfix');

var _Clearfix2 = _interopRequireDefault(_Clearfix);

var _TgmLink = require('./TgmLink');

var _TgmLink2 = _interopRequireDefault(_TgmLink);

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var docTitle = function docTitle(g) {
  return g + ' - The Moby Travel Guide';
};

var Center = function (_React$Component) {
  _inherits(Center, _React$Component);

  function Center() {
    _classCallCheck(this, Center);

    return _possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).apply(this, arguments));
  }

  _createClass(Center, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { clear: 'both' } });
    }
  }]);

  return Center;
}(_react2.default.Component);

/**
 * Meta is a separate component
 **/


exports.default = {
  Center: Center,
  Clearfix: _Clearfix2.default,

  docTitle: docTitle,

  TgmLink: _TgmLink2.default,
  AppRouter: _AppRouter2.default

};
//# sourceMappingURL=index.js.map