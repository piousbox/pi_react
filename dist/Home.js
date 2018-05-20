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

var _newsitems = require('newsitems');

var _piousboxApi = require('piousbox-api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Newsitem, Newsitems } from '../../newsitems/src/index'


// import { Tag, Site } from '../../piousbox-api/src/index'


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {};

    var tag = new _piousboxApi.Tag(_config2.default);
    tag.get('major', { newsitems_per: 5 }).then(function (_data) {
      _this.setState({ major: _data.newsitems });
    });

    /* tag.get('minor').then(_data => {
      this.setState({ minor: _data })
    })
    const site = new Site(config)
    site.features().then(_data => {
      this.setState({ features: _data })
    }) */
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
            _react2.default.createElement(_newsitems.Newsitems, { items: this.state.major })
          ),
          _react2.default.createElement(_reactBootstrap.Col, { sm: 12, md: 5 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12, md: 2 },
            _react2.default.createElement(
              'h1',
              null,
              'WDZ'
            ),
            _react2.default.createElement(
              'div',
              null,
              'skyscraper 1'
            ),
            _react2.default.createElement(
              'div',
              null,
              'skyscraper 2'
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