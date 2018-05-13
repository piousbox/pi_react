'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styles from './_Galleries.scss'
var styles = {}; // @TODO: remove! HEREHERE

var GalleriesShow = function (_React$Component) {
  _inherits(GalleriesShow, _React$Component);

  function GalleriesShow(props) {
    _classCallCheck(this, GalleriesShow);

    var _this = _possibleConstructorReturn(this, (GalleriesShow.__proto__ || Object.getPrototypeOf(GalleriesShow)).call(this, props));

    _this.state = { gallery: {} };
    _this.props.dispatch((0, _actions.galleriesShow)({ galleryname: props.params.galleryname }));
    return _this;
  }

  _createClass(GalleriesShow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(Object.assign({}, this.state, { photos: nextProps.gallery.photos }));
      document.title = nextProps.gallery.name;
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log("+++ +++ galleriesShow props:", this.props, this.state)

      var thumb_photos = [];
      if (this.state.photos) {
        this.state.photos.forEach(function (photo, idx) {
          thumb_photos.push(_react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: photo.thumb_url, alt: '' })
          ));
        });
      }

      var large_photos = [];
      if (this.state.photos) {
        this.state.photos.forEach(function (photo, idx) {
          large_photos.push(_react2.default.createElement(
            _reactBootstrap.Panel,
            null,
            _react2.default.createElement(
              'div',
              { className: styles.largePhotos },
              _react2.default.createElement('img', { src: photo.large_url, alt: '' })
            )
          ));
        });
      }

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement(
                _Center2.default,
                null,
                this.props.gallery.name
              )
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.gallery.description } }),
            thumb_photos,
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              _Center2.default,
              null,
              large_photos
            )
          )
        )
      );
    }
  }]);

  return GalleriesShow;
}(_react2.default.Component);

GalleriesShow.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownprops) {
  return {
    gallery: state.gallery
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GalleriesShow);
//# sourceMappingURL=GalleriesShow.js.map