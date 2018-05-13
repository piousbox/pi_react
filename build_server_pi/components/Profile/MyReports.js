'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyReports = function (_React$Component) {
  _inherits(MyReports, _React$Component);

  function MyReports(props) {
    _classCallCheck(this, MyReports);

    var _this = _possibleConstructorReturn(this, (MyReports.__proto__ || Object.getPrototypeOf(MyReports)).call(this, props));

    _this.props.dispatch((0, _actions.myReportsAction)());
    return _this;
  }

  _createClass(MyReports, [{
    key: 'render',
    value: function render() {
      console.log("+++ +++ rendering myReports:", this.props);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Center2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Reports [+]'
          )
        ),
        _react2.default.createElement(
          'h3',
          null,
          '[~] One'
        ),
        'subhead...',
        _react2.default.createElement(
          'h3',
          null,
          '[~] Two'
        ),
        'subhead...',
        _react2.default.createElement(
          'h3',
          null,
          '[~] Three'
        ),
        'subhead...'
      );
    }
  }]);

  return MyReports;
}(_react2.default.Component);

MyReports.propTypes = {
  // myGalleries: PropTypes.array,
  // myReports: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  return {
    myGalleries: state.myGalleries,
    myReports: state.myReports
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyReports);
//# sourceMappingURL=MyReports.js.map