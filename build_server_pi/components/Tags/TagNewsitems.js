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

var _actions = require('../../actions');

var _Newsitems = require('../Newsitems');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagNewsitems = function (_React$Component) {
  _inherits(TagNewsitems, _React$Component);

  function TagNewsitems(props) {
    _classCallCheck(this, TagNewsitems);

    var _this = _possibleConstructorReturn(this, (TagNewsitems.__proto__ || Object.getPrototypeOf(TagNewsitems)).call(this, props));

    console.log('+++ tagname:', props.tagname);

    props.dispatch((0, _actions.tagAction)(props.tagname));
    return _this;
  }

  _createClass(TagNewsitems, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log('+++ TagNewsitems will receive props:', nextProps, this.props, this.state)
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('+++ tagNewsitems render:', this.props, this.state);

      var newsitems = [];
      this.props.tags[this.props.tagname] && this.props.tags[this.props.tagname].newsitems.map(function (n, idx) {
        newsitems.push(_react2.default.createElement(_Newsitems.Newsitem, { key: idx, newsitem: n }));
      });

      return _react2.default.createElement(
        'div',
        null,
        newsitems
      );
    }
  }]);

  return TagNewsitems;
}(_react2.default.Component);

TagNewsitems.propTypes = {
  tagname: _propTypes2.default.string,
  tags: _propTypes2.default.object,
  tagsList: _propTypes2.default.array
};

var mapState = function mapState(state, ownProps) {
  return {
    tags: state.tags
  };
};

exports.default = (0, _reactRedux.connect)(mapState)(TagNewsitems);
//# sourceMappingURL=TagNewsitems.js.map