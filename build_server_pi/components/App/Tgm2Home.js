'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { tgm2homeAction } from '../../actions'

var Tgm2Home = function (_React$Component) {
  _inherits(Tgm2Home, _React$Component);

  function Tgm2Home(props) {
    _classCallCheck(this, Tgm2Home);

    return _possibleConstructorReturn(this, (Tgm2Home.__proto__ || Object.getPrototypeOf(Tgm2Home)).call(this, props));
    // props.dispatch(tgm2homeAction());
  }

  _createClass(Tgm2Home, [{
    key: 'render',
    value: function render() {
      // console.log("+++ +++ rendering tgm2home:", this.props, this.state)

      return _react2.default.createElement(
        'div',
        null,
        'Tgm2Home'
      );
    }
  }]);

  return Tgm2Home;
}(_react2.default.Component);

Tgm2Home.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    leftPane: state.leftPane,
    rightPane: state.rightPane
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Tgm2Home);
//# sourceMappingURL=Tgm2Home.js.map