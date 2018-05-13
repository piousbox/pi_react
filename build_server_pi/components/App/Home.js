'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('../../actions');

var _Clearfix = require('./Clearfix');

var _Clearfix2 = _interopRequireDefault(_Clearfix);

var _Features = require('./Features');

var _Features2 = _interopRequireDefault(_Features);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Newsitems = require('../Newsitems');

var _Tags = require('../Tags');

var _Ads = require('../Ads');

var _Users = require('../Users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    props.dispatch((0, _actions.siteNewsitemsAction)({ page: 1 }));
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log('+++ Home willReceiveProps:', nextProps, this.props, this.state)
      if (this.props.params.newsitems_page != nextProps.params.newsitems_page) {
        nextProps.dispatch((0, _actions.siteNewsitemsAction)({ page: nextProps.params.newsitems_page }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ +++ rendering Home:', this.props, this.state)

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 5 },
          _react2.default.createElement(_Tags.TagNewsitems, { tagname: 'major' }),
          _react2.default.createElement(_Tags.TagWidget, { tagname: 'travel' }),
          _react2.default.createElement(_Tags.TagWidget, { tagname: 'human-resources' })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 5 },
          _react2.default.createElement(_Ads.AdLargeSquare, null),
          _react2.default.createElement(_Tags.FeatureTags, { tags: this.props.site.feature_tags }),
          _react2.default.createElement(_Tags.TagNewsitems, { tagname: 'minor' }),
          _react2.default.createElement(_Tags.TagWidget, { tagname: 'technology' }),
          _react2.default.createElement(_Tags.TagWidget, { tagname: 'jokes-humour' })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 2 },
          _react2.default.createElement(_Ads.AdSkyscraper, null),
          _react2.default.createElement(_Ads.AdSkyscraper, null),
          _react2.default.createElement(_Ads.AdSkim, null),
          _react2.default.createElement(_Ads.AdTgm, null),
          _react2.default.createElement(_Ads.AdWdz, null),
          _react2.default.createElement(_Ads.AdCot, null),
          _react2.default.createElement(_Users.PersonWidget, { username: 'piousbox' }),
          _react2.default.createElement(_Users.PersonWidget, { username: 'bondar' }),
          _react2.default.createElement(_Ads.AdWasya, null)
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    tags: state.tags,
    newsitems: state.newsitems,
    site: state.site
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);
//# sourceMappingURL=Home.js.map