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

var _AppRouter = require('../App/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _reactRouter = require('react-router');

var _Leaderboard = require('../App/Leaderboard');

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styles from './_Galleries.scss'
var styles = {}; // @TODO: remove! HEREHERE

var GalleriesPhotoShow = function (_React$Component) {
  _inherits(GalleriesPhotoShow, _React$Component);

  function GalleriesPhotoShow(props) {
    _classCallCheck(this, GalleriesPhotoShow);

    var _this = _possibleConstructorReturn(this, (GalleriesPhotoShow.__proto__ || Object.getPrototypeOf(GalleriesPhotoShow)).call(this, props));

    _this.state = { gallery: {} };
    _this.props.dispatch((0, _actions.galleriesShow)({ galleryname: props.params.galleryname }));
    return _this;
  }

  _createClass(GalleriesPhotoShow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(Object.assign({}, this.state, { photos: nextProps.gallery.photos }));
      document.title = nextProps.gallery.name;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log("+++ +++ galleriesPhotoShow props:", this.props)
      // console.log("+++ +++ galleriesPhotoShow state:", this.state)

      var largePhoto = null;
      var prev = null;
      var photoIdx = parseInt(this.props.params.photoIdx);
      if (photoIdx !== 0) {
        var link = _AppRouter2.default.galleryPhotoLink({ galleryname: this.props.params.galleryname, photoIdx: photoIdx - 1 });
        prev = _react2.default.createElement(
          _reactRouter.Link,
          { to: link },
          'previous'
        );
      }
      var next = null;
      if (this.state.photos && photoIdx + 1 !== this.state.photos.length) {
        var _link = _AppRouter2.default.galleryPhotoLink({ galleryname: this.props.params.galleryname, photoIdx: photoIdx + 1 });
        next = _react2.default.createElement(
          _reactRouter.Link,
          { to: _link },
          'next'
        );
      }
      var thumb_photos = [];
      if (this.state.photos) {
        this.state.photos.forEach(function (photo, idx) {
          thumb_photos.push(_react2.default.createElement(
            _reactRouter.Link,
            { key: idx, to: _AppRouter2.default.galleryPhotoLink({ galleryname: _this2.props.params.galleryname, photoIdx: idx }) },
            _react2.default.createElement('img', { src: photo.thumb_url, alt: '', style: { padding: '5px' } })
          ));
        });

        largePhoto = _react2.default.createElement('img', { style: { width: '100%' },
          src: this.state.photos[parseInt(this.props.params.photoIdx)].large_url,
          alt: '' });
      }

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
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
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: 9, xs: 12 },
            _react2.default.createElement(
              _Center2.default,
              null,
              prev,
              ' | ',
              next,
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              largePhoto,
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              prev,
              ' | ',
              next
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: 3, xs: 12 },
            thumb_photos,
            _react2.default.createElement('hr', null)
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Leaderboard2.default, null)
      );
    }
  }]);

  return GalleriesPhotoShow;
}(_react2.default.Component);

GalleriesPhotoShow.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownprops) {
  return {
    gallery: state.gallery
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GalleriesPhotoShow);
//# sourceMappingURL=GalleriesPhotoShow.js.map