'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeopleWidget = function (_React$Component) {
  _inherits(PeopleWidget, _React$Component);

  function PeopleWidget() {
    _classCallCheck(this, PeopleWidget);

    return _possibleConstructorReturn(this, (PeopleWidget.__proto__ || Object.getPrototypeOf(PeopleWidget)).apply(this, arguments));
  }

  _createClass(PeopleWidget, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'people widget'
      );
    }
  }]);

  return PeopleWidget;
}(_react2.default.Component);

var PersonWidget = function (_React$Component2) {
  _inherits(PersonWidget, _React$Component2);

  function PersonWidget() {
    _classCallCheck(this, PersonWidget);

    return _possibleConstructorReturn(this, (PersonWidget.__proto__ || Object.getPrototypeOf(PersonWidget)).apply(this, arguments));
  }

  _createClass(PersonWidget, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'PersonWidget' },
        _react2.default.createElement(
          'h5',
          { className: 'box-header' },
          'Profile Highlight'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: _App.AppRouter.profileLink(this.props.username) },
          this.props.username
        )
      );
    }
  }]);

  return PersonWidget;
}(_react2.default.Component);

var UsersShow = function (_React$Component3) {
  _inherits(UsersShow, _React$Component3);

  function UsersShow() {
    _classCallCheck(this, UsersShow);

    return _possibleConstructorReturn(this, (UsersShow.__proto__ || Object.getPrototypeOf(UsersShow)).apply(this, arguments));
  }

  _createClass(UsersShow, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'UsersShow'
      );
    }
  }]);

  return UsersShow;
}(_react2.default.Component);

exports.default = {
  PeopleWidget: PeopleWidget,
  PersonWidget: PersonWidget,

  UsersShow: UsersShow
};
//# sourceMappingURL=index.js.map