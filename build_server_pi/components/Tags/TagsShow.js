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

var _Newsitems = require('../Newsitems');

var _Videos = require('../Videos');

var _Ads = require('../Ads');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagShow = function (_React$Component) {
  _inherits(TagShow, _React$Component);

  function TagShow(props) {
    _classCallCheck(this, TagShow);

    var _this = _possibleConstructorReturn(this, (TagShow.__proto__ || Object.getPrototypeOf(TagShow)).call(this, props));

    _this.state = {};
    props.dispatch((0, _actions.tagAction)(props.params.tagname));

    _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
    return _this;
  }

  _createClass(TagShow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log('+++ tagShow will receive props')
      if (nextProps.params.tagname !== this.props.params.tagname) {
        this.props.dispatch((0, _actions.tagAction)(nextProps.params.tagname));
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      // console.log('+++ tagShow will update')
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ tagShow:', this.props, this.state)

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 6 },
          _react2.default.createElement(
            'h5',
            { style: { textAlign: 'center' } },
            'Tag ',
            this.props.tag.name
          ),
          _react2.default.createElement(_Newsitems.Newsitems, { newsitems: this.props.tag.newsitems, params: this.props.params })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 6 },
          _react2.default.createElement(_Ads.AdLargeSquare, null),
          _react2.default.createElement(_Ads.AdLargeSquare, null)
        )
      );
    }
  }]);

  return TagShow;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    tag: state.tag
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TagShow);
//# sourceMappingURL=TagsShow.js.map