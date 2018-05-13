'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leaderboard = function (_React$Component) {
  _inherits(Leaderboard, _React$Component);

  function Leaderboard(props) {
    _classCallCheck(this, Leaderboard);

    var _this = _possibleConstructorReturn(this, (Leaderboard.__proto__ || Object.getPrototypeOf(Leaderboard)).call(this, props));

    _this.props.dispatch((0, _actions.siteShow)());
    return _this;
  }

  _createClass(Leaderboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.site && this.props.site.is_ads_enabled) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.site.is_ads_enabled) {
        return _react2.default.createElement(
          _Center2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'ad' },
            _react2.default.createElement('ins', { className: 'adsbygoogle',
              style: { display: 'block' },
              'data-ad-client': 'ca-pub-5283251584689528',
              'data-ad-slot': '5371488374',
              'data-ad-format': 'auto' })
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return Leaderboard;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Leaderboard);
//# sourceMappingURL=Leaderboard.js.map