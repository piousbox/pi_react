'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _App = require('../App');

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsitemGallery = function (_React$Component) {
  _inherits(NewsitemGallery, _React$Component);

  function NewsitemGallery(props) {
    _classCallCheck(this, NewsitemGallery);

    var _this = _possibleConstructorReturn(this, (NewsitemGallery.__proto__ || Object.getPrototypeOf(NewsitemGallery)).call(this, props));

    _this.state = {};
    _this.oneImgRef = 'oneImgRef'; // React.createRef()
    return _this;
  }

  _createClass(NewsitemGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var height = this.oneImgRef.clientHeight;
      height = 300;
      this.setState({ oneImgHeight: height });
      // console.log('+++ height2:', height)
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('+++ +++ NewsitemGallery:', this.props, this.state);

      var newsitem = {};
      var photos = [];
      var h = this.state.oneImgHeight ? this.state.oneImgHeight / 2 : 0;
      if (this.props.newsitem && this.props.newsitem.photos[0]) {
        photos.push(_react2.default.createElement('li', { key: 'one', style: { cursor: 'pointer', width: '50%', height: '300px', border: '1px solid red', float: 'left',
            background: 'url(' + this.props.newsitem.photos[0].small_url + ')' } }));
      }

      if (this.props.newsitem && this.props.newsitem.photos[1]) {
        photos.push(_react2.default.createElement('li', { key: 'two', style: { cursor: 'pointer', width: '50%', height: h, border: '1px solid red', float: 'left',
            background: 'url(' + this.props.newsitem.photos[1].small_url + ')' } }));
      }

      if (this.props.newsitem && this.props.newsitem.photos[2]) {
        photos.push(_react2.default.createElement('li', { key: 'three', style: { cursor: 'pointer', width: '50%', height: h, border: '1px solid green', float: 'left',
            background: 'url(' + this.props.newsitem.photos[2].small_url + ')' } }));
      }

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'NewsitemGallery', style: { marginBottom: '2em' } },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'h2',
            { style: { margin: 0 } },
            _react2.default.createElement(
              _App.TgmLink,
              { newsitem: this.props.newsitem },
              this.props.newsitem.title || this.props.newsitem.name
            )
          ),
          _react2.default.createElement(_Meta2.default, { item: this.props.newsitem })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'ul',
            { className: 'photos' },
            photos
          ),
          'And a few more...',
          _react2.default.createElement(_App.Clearfix, null)
        ),
        this.props.newsitem.description && _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: this.props.newsitem.description } })
      );
    }
  }]);

  return NewsitemGallery;
}(_react2.default.Component);

exports.default = NewsitemGallery;
//# sourceMappingURL=NewsitemGallery.js.map