'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImageLightbox = require('react-image-lightbox');

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _reactBootstrap = require('react-bootstrap');

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsitemPhoto = function (_React$Component) {
  _inherits(NewsitemPhoto, _React$Component);

  function NewsitemPhoto(props) {
    _classCallCheck(this, NewsitemPhoto);

    var _this = _possibleConstructorReturn(this, (NewsitemPhoto.__proto__ || Object.getPrototypeOf(NewsitemPhoto)).call(this, props));

    _this.state = { isOpen: false };
    return _this;
  }

  _createClass(NewsitemPhoto, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { style: { marginTop: '2em' } },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 6 },
          _react2.default.createElement('img', { style: { cursor: 'pointer', border: '10px solid gray', padding: '10px', width: '100%' },
            src: this.props.photo.small_url, alt: '', onClick: function onClick() {
              _this2.setState({ isOpen: true });
            } })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 6 },
          _react2.default.createElement(
            'h2',
            { style: { cursor: 'pointer' }, onClick: function onClick() {
                _this2.setState({ isOpen: true });
              } },
            this.props.newsitem.title || this.props.newsitem.name || 'Untitled'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'post_details' },
            _react2.default.createElement(
              'li',
              { className: 'category' },
              this.props.newsitem.item_type
            ),
            _react2.default.createElement(
              'li',
              { className: 'date' },
              this.props.newsitem.created_at.substr(0, 10)
            )
          ),
          this.props.newsitem.desciption && _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: this.props.newsitem.description } })
        ),
        this.state.isOpen && _react2.default.createElement(_reactImageLightbox2.default, { mainSrc: this.props.photo.original_url, onCloseRequest: function onCloseRequest() {
            _this2.setState({ isOpen: false });
          } })
      );
    }
  }]);

  return NewsitemPhoto;
}(_react2.default.Component);

exports.default = NewsitemPhoto;
//# sourceMappingURL=NewsitemPhoto.js.map