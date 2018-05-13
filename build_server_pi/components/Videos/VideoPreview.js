'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPreview = function (_React$Component) {
  _inherits(VideoPreview, _React$Component);

  function VideoPreview() {
    _classCallCheck(this, VideoPreview);

    return _possibleConstructorReturn(this, (VideoPreview.__proto__ || Object.getPrototypeOf(VideoPreview)).apply(this, arguments));
  }

  _createClass(VideoPreview, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        null,
        this.props.site && this.props.site.play_videos_in_preview ? _react2.default.createElement('iframe', { width: '560', height: '315', src: 'https://www.youtube.com/embed/' + this.props.video.youtube_id, frameBorder: '0', allowFullScreen: true }) : _react2.default.createElement(
          _reactRouter.Link,
          { to: '/en/videos/show/' + this.props.video.youtube_id },
          _react2.default.createElement('img', { src: 'https://img.youtube.com/vi/' + this.props.video.youtube_id + '/0.jpg', width: '100%', alt: '' })
        ),
        _react2.default.createElement(
          'h3',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/en/videos/show/' + this.props.video.youtube_id },
            this.props.video.name
          )
        ),
        _react2.default.createElement(_Meta2.default, { item: this.props.video })
      );
    }
  }]);

  return VideoPreview;
}(_react2.default.Component);

exports.default = VideoPreview;
//# sourceMappingURL=VideoPreview.js.map