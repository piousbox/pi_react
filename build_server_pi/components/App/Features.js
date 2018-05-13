'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_React$Component) {
  _inherits(Features, _React$Component);

  function Features(props) {
    _classCallCheck(this, Features);

    var _this = _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Features, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ features props:', this.props, this.state)

      var perRowXs = 1;
      var perRowMd = 2;
      var perRowLg = 2;

      var features = [];
      var panel = void 0;
      var panelStyle = { minHeight: '200px' };
      if (this.props.features) {
        this.props.features.forEach(function (f, idx) {
          if (f.link_path) {
            panel = _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: panelStyle },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: f.link_path },
                  f.name
                )
              ),
              f.photo_url ? _react2.default.createElement('img', { src: f.photo_url, alt: '' }) : null
            );
          } else if (f.reportname) {
            panel = _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: panelStyle },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.reportLink(f.reportname) },
                  f.name
                )
              ),
              _react2.default.createElement('img', { src: f.photo_url, alt: f.name }),
              _react2.default.createElement('br', null),
              f.subhead
            );
          } else if (f.galleryname) {
            panel = _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: panelStyle },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: _AppRouter2.default.galleryPhotoLink(f.galleryname) },
                  f.name
                )
              ),
              _react2.default.createElement('img', { src: f.photo_url, alt: f.name }),
              _react2.default.createElement('br', null),
              f.subhead
            );
          }
          features.push(_react2.default.createElement(
            _reactBootstrap.Col,
            { key: idx, md: 12 / perRowMd, lg: 12 / perRowLg, xs: 12 / perRowXs },
            panel
          ));
        });
      }

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        features
      );
    }
  }]);

  return Features;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    city: state.city
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Features);
//# sourceMappingURL=Features.js.map