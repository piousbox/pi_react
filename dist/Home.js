'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _AppRouter = require('./AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _Ads = require('./Ads');

var _piousboxApi = require('piousbox-api');

var _piousboxRender = require('piousbox-render');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Tag, Site } from '../../piousbox-api/src/index'


// import { Features, Feature, Newsitems, TagFeature } from '../../piousbox-render/src/index'


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = { features: [] };

    var tag = new _piousboxApi.Tag(_config2.default);
    var site = new _piousboxApi.Site(_config2.default);

    tag.get('major', { newsitems_per: 5 }).then(function (_data) {
      _this.setState({ major: _data.newsitems });
    });
    tag.get('minor', { newsitems_per: 5 }).then(function (_data) {
      _this.setState({ minor: _data.newsitems });
    });

    tag.get('salsa', { newsitems_per: 1 }).then(function (_data) {
      _this.setState({ salsa: _data });
    });
    tag.get('human-resources', { newsitems_per: 1 }).then(function (_data) {
      _this.setState({ hr: _data });
    });

    var features = [];
    site.all().then(function (_data) {
      _data.features.map(function (f, idx) {
        features.push(_react2.default.createElement(
          'div',
          { key: idx, className: 'item' },
          _react2.default.createElement(_piousboxRender.Feature, { item: f })
        ));
      });
      _this.setState({ features: features });
    });
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      // console.log('+++ Home:', this.props, this.state)

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12, md: 5 },
            _react2.default.createElement(_piousboxRender.TagFeature, { router: _AppRouter2.default, item: this.state.hr }),
            _react2.default.createElement(_piousboxRender.Newsitems, { items: this.state.major })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12, md: 5 },
            _react2.default.createElement(_Ads.AdLargeSquare, null),
            _react2.default.createElement(_piousboxRender.Newsitems, { items: this.state.minor })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12, md: 2, className: 'hide-on-small' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Ads.AdSkyscraper, null)
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Ads.AdSkyscraper, null)
            ),
            _react2.default.createElement(
              'h1',
              null,
              'WDZ'
            ),
            _react2.default.createElement(
              'h1',
              null,
              'TGM'
            ),
            _react2.default.createElement(
              'h1',
              null,
              'SKIM.LAW'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=Home.js.map