'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagWidget = function (_React$Component) {
  _inherits(TagWidget, _React$Component);

  function TagWidget(props) {
    _classCallCheck(this, TagWidget);

    var _this = _possibleConstructorReturn(this, (TagWidget.__proto__ || Object.getPrototypeOf(TagWidget)).call(this, props));

    props.dispatch((0, _actions.tagAction)(props.tagname));
    return _this;
  }

  _createClass(TagWidget, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.tags[this.props.tagname]) return null;
      // console.log('+++ TagWidget render:', this.props, this.state)

      return _react2.default.createElement(
        'div',
        { className: 'TagWidget' },
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'div',
            { className: 'box-header' },
            this.props.tagname
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 6 },
              _react2.default.createElement(
                'h3',
                null,
                this.props.tags[this.props.tagname].reports[0].name
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 6 },
              _react2.default.createElement(
                'h4',
                null,
                this.props.tags[this.props.tagname].reports[1].name
              ),
              _react2.default.createElement(
                'h4',
                null,
                this.props.tags[this.props.tagname].reports[2].name
              ),
              _react2.default.createElement(
                'h4',
                null,
                this.props.tags[this.props.tagname].reports[3].name
              )
            )
          )
        )
      );
    }
  }]);

  return TagWidget;
}(_react2.default.Component);

var mapState = function mapState(state, ownProps) {
  return {
    tags: state.tags
  };
};

exports.default = (0, _reactRedux.connect)(mapState)(TagWidget);
//# sourceMappingURL=TagWidget.js.map