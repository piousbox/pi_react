'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleriesIndexItem = function (_React$Component) {
  _inherits(GalleriesIndexItem, _React$Component);

  function GalleriesIndexItem(props) {
    _classCallCheck(this, GalleriesIndexItem);

    var _this = _possibleConstructorReturn(this, (GalleriesIndexItem.__proto__ || Object.getPrototypeOf(GalleriesIndexItem)).call(this, props));

    _this.state = {
      gallery: {}
    };
    return _this;
  }

  _createClass(GalleriesIndexItem, [{
    key: 'render',
    value: function render() {
      // console.log('+++ render GalleriesIndexItem:', this.props, this.state)

      var thumbs = [];
      this.props.gallery.photos.forEach(function (photo, idx) {
        if (idx < 9) {
          thumbs.push(_react2.default.createElement('img', { style: { margin: '0 1em 1em 0' }, src: photo.thumb_url, alt: '', key: idx }));
        }
      });

      return _react2.default.createElement(
        _reactBootstrap.Panel,
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: _App.AppRouter.galleryPhotoLink(this.props.gallery) },
            this.props.gallery.name
          )
        ),
        this.props.gallery.subhead,
        thumbs,
        this.props.gallery.body
      );
    }
  }]);

  return GalleriesIndexItem;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    // galleries: state.galleries,
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GalleriesIndexItem);
//# sourceMappingURL=GalleriesIndexItem.js.map