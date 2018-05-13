'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _reactImageLightbox = require('react-image-lightbox');

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _NewsitemPhoto = require('./NewsitemPhoto');

var _NewsitemPhoto2 = _interopRequireDefault(_NewsitemPhoto);

var _NewsitemGallery = require('./NewsitemGallery');

var _NewsitemGallery2 = _interopRequireDefault(_NewsitemGallery);

var _NewsitemReport = require('./NewsitemReport');

var _NewsitemReport2 = _interopRequireDefault(_NewsitemReport);

var _Videos = require('../Videos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newsitem = function (_React$Component) {
  _inherits(Newsitem, _React$Component);

  function Newsitem(props) {
    _classCallCheck(this, Newsitem);

    return _possibleConstructorReturn(this, (Newsitem.__proto__ || Object.getPrototypeOf(Newsitem)).call(this, props));
  }

  _createClass(Newsitem, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ Newsitem render:', this.props, this.state)

      if (this.props.newsitem.item_type === 'video') {
        if (this.props.site.play_videos_in_preview) {
          return _react2.default.createElement(_Videos.VideoEmbed, { video: this.props.newsitem });
        }
        return _react2.default.createElement(_Videos.VideoPreview, { video: this.props.newsitem });
      }
      if (this.props.newsitem.item_type === 'photo') {
        return _react2.default.createElement(_NewsitemPhoto2.default, { newsitem: this.props.newsitem, photo: this.props.newsitem.photos[0] });
      }
      if (this.props.newsitem.item_type === 'gallery') {
        return _react2.default.createElement(_NewsitemGallery2.default, { newsitem: this.props.newsitem });
      }
      if (this.props.newsitem.item_type === 'report') {
        return _react2.default.createElement(_NewsitemReport2.default, { newsitem: this.props.newsitem });
      }
      return null;
    }
  }]);

  return Newsitem;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Newsitem);
//# sourceMappingURL=Newsitem.js.map