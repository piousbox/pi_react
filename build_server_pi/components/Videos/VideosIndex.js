'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('../../actions');

var _App = require('../App');

var _VideoPreview = require('./VideoPreview');

var _VideoPreview2 = _interopRequireDefault(_VideoPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideosIndex = function (_React$Component) {
  _inherits(VideosIndex, _React$Component);

  function VideosIndex(props) {
    _classCallCheck(this, VideosIndex);

    var _this = _possibleConstructorReturn(this, (VideosIndex.__proto__ || Object.getPrototypeOf(VideosIndex)).call(this, props));

    _this.state = {};
    _this.props.dispatch((0, _actions.videosAction)({ page: props.params.videos_page }));
    _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
    return _this;
  }

  _createClass(VideosIndex, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log("+++ +++ videosIndex will receive props:", nextProps, this.props, this.state);
      if (nextProps.params.videos_page !== this.props.params.videos_page) {
        this.props.dispatch((0, _actions.videosAction)({ page: nextProps.params.videos_page }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var videos = [];
      if (this.props.videos) {
        this.props.videos.map(function (video, index) {
          videos.push(_react2.default.createElement(_VideoPreview2.default, { key: index, video: video }));
        });
      }

      var pages = [],
          page = void 0,
          active = void 0;
      for (var i = 1; i <= Math.ceil(this.props.site.n_videos / 10); i++) {
        // @TODO: this 10 shouldn't be hardwired
        page = !!this.props.params.videos_page ? this.props.params.videos_page : 1;
        active = page == i ? 'active' : '';
        pages.push(_react2.default.createElement(
          _reactRouter.Link,
          { key: i, className: 'btn btn-default ' + active, to: _App.AppRouter.videosLink({ videos_page: i }) },
          i
        ));
      }
      var pagination = _react2.default.createElement(
        'div',
        { className: 'pagination' },
        pages
      );

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { fluid: true },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            pagination,
            videos,
            pagination
          )
        )
      );
    }
  }]);

  return VideosIndex;
}(_react2.default.Component);

var mapState = function mapState(state, ownProps) {
  return {
    videos: state.videos,
    site: state.site
  };
};

exports.default = (0, _reactRedux.connect)(mapState)(VideosIndex);
//# sourceMappingURL=VideosIndex.js.map