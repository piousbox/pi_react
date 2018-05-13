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

var VideoEmbed = function (_React$Component) {
  _inherits(VideoEmbed, _React$Component);

  function VideoEmbed() {
    _classCallCheck(this, VideoEmbed);

    return _possibleConstructorReturn(this, (VideoEmbed.__proto__ || Object.getPrototypeOf(VideoEmbed)).apply(this, arguments));
  }

  _createClass(VideoEmbed, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        null,
        _react2.default.createElement(
          _Center2.default,
          null,
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/en/videos/show/' + this.props.video.youtube_id },
              this.props.video.name
            )
          ),
          _react2.default.createElement(_Meta2.default, { item: this.props.video }),
          _react2.default.createElement('iframe', { width: '560', height: '315', src: 'https://www.youtube.com/embed/' + this.props.video.youtube_id, frameBorder: '0', allowFullScreen: true })
        )
      );
    }
  }]);

  return VideoEmbed;
}(_react2.default.Component);

exports.default = VideoEmbed;
//# sourceMappingURL=VideoEmbed.js.map