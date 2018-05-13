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

var _reactBootstrap = require('react-bootstrap');

var _reactDisqusThread = require('react-disqus-thread');

var _reactDisqusThread2 = _interopRequireDefault(_reactDisqusThread);

var _reactShare = require('react-share');

var _reactDocumentMeta = require('react-document-meta');

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

var _reactHelmet = require('react-helmet');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _App = require('../App');

var _actions = require('../../actions');

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton,
    GooglePlusShareButton = _reactShare.ShareButtons.GooglePlusShareButton,
    LinkedinShareButton = _reactShare.ShareButtons.LinkedinShareButton,
    TwitterShareButton = _reactShare.ShareButtons.TwitterShareButton,
    TelegramShareButton = _reactShare.ShareButtons.TelegramShareButton,
    WhatsappShareButton = _reactShare.ShareButtons.WhatsappShareButton,
    PinterestShareButton = _reactShare.ShareButtons.PinterestShareButton,
    VKShareButton = _reactShare.ShareButtons.VKShareButton,
    OKShareButton = _reactShare.ShareButtons.OKShareButton,
    RedditShareButton = _reactShare.ShareButtons.RedditShareButton,
    TumblrShareButton = _reactShare.ShareButtons.TumblrShareButton,
    LivejournalShareButton = _reactShare.ShareButtons.LivejournalShareButton,
    EmailShareButton = _reactShare.ShareButtons.EmailShareButton;
var FacebookShareCount = _reactShare.ShareCounts.FacebookShareCount,
    GooglePlusShareCount = _reactShare.ShareCounts.GooglePlusShareCount,
    LinkedinShareCount = _reactShare.ShareCounts.LinkedinShareCount,
    PinterestShareCount = _reactShare.ShareCounts.PinterestShareCount,
    VKShareCount = _reactShare.ShareCounts.VKShareCount,
    OKShareCount = _reactShare.ShareCounts.OKShareCount,
    RedditShareCount = _reactShare.ShareCounts.RedditShareCount,
    TumblrShareCount = _reactShare.ShareCounts.TumblrShareCount;

var FacebookIcon = (0, _reactShare.generateShareIcon)('facebook');
var TwitterIcon = (0, _reactShare.generateShareIcon)('twitter');
var TelegramIcon = (0, _reactShare.generateShareIcon)('telegram');
var WhatsappIcon = (0, _reactShare.generateShareIcon)('whatsapp');
var GooglePlusIcon = (0, _reactShare.generateShareIcon)('google');
var LinkedinIcon = (0, _reactShare.generateShareIcon)('linkedin');
var PinterestIcon = (0, _reactShare.generateShareIcon)('pinterest');
var VKIcon = (0, _reactShare.generateShareIcon)('vk');
var OKIcon = (0, _reactShare.generateShareIcon)('ok');
var RedditIcon = (0, _reactShare.generateShareIcon)('reddit');
var TumblrIcon = (0, _reactShare.generateShareIcon)('tumblr');
var LivejournalIcon = (0, _reactShare.generateShareIcon)('livejournal');
var MailruIcon = (0, _reactShare.generateShareIcon)('mailru');
var EmailIcon = (0, _reactShare.generateShareIcon)('email');

var ReportsShow = function (_React$Component) {
  _inherits(ReportsShow, _React$Component);

  function ReportsShow(props) {
    _classCallCheck(this, ReportsShow);

    var _this = _possibleConstructorReturn(this, (ReportsShow.__proto__ || Object.getPrototypeOf(ReportsShow)).call(this, props));

    _this.state = {
      report: {}
    };
    props.dispatch((0, _actions.reportsShow)({ reportname: props.params.reportname }));
    return _this;
  }

  _createClass(ReportsShow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log("+++ +++ reportsShow received props:", nextProps)

      this.setState(Object.assign({}, this.state, { report: nextProps.report }));
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('+++ +++ ReportsShow:', this.props, this.state);
      var url = 'https://' + _config2.default.domain + _App.AppRouter.reportLink(this.state.report);

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        this.state.report.name && _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('meta', { property: 'og:url', content: url }),
          _react2.default.createElement('meta', { property: 'og:type', content: 'article' }),
          _react2.default.createElement('meta', { property: 'og:title', content: this.state.report.name }),
          _react2.default.createElement('meta', { property: 'og:description', content: this.state.report.name }),
          _react2.default.createElement('meta', { property: 'og:image', content: this.state.report.photo_url })
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2.default.createElement(
              _Center2.default,
              null,
              _react2.default.createElement(
                'h1',
                null,
                this.state.report.name
              ),
              _react2.default.createElement(_Meta2.default, { item: this.state.report }),
              _react2.default.createElement(
                'div',
                { className: 'social-buttons' },
                _react2.default.createElement(
                  TwitterShareButton,
                  { url: url },
                  _react2.default.createElement(TwitterIcon, { size: 32, round: true })
                ),
                _react2.default.createElement(
                  FacebookShareButton,
                  { url: url },
                  _react2.default.createElement(FacebookIcon, { size: 32, round: true })
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'socialMediaCount' },
                  _react2.default.createElement(FacebookShareCount, { url: url })
                ),
                _react2.default.createElement(_App.Clearfix, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 8, xsOffset: 2 },
            _react2.default.createElement(
              'div',
              { className: 'subhead', style: { margin: '2em 0 2em 0' } },
              _react2.default.createElement(
                'i',
                null,
                this.state.report.subhead
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { float: 'left', padding: '5px', width: '410px', clear: 'right' } },
              _react2.default.createElement('img', { src: this.state.report.photo_url, alt: this.state.report.name })
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.report.description } }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            this.state.report.name && _react2.default.createElement(_reactDisqusThread2.default, { shortname: _config2.default.disqusShortname,
              identifier: this.state.report.reportname,
              title: this.state.report.name,
              url: url })
          )
        )
      );
    }
  }]);

  return ReportsShow;
}(_react2.default.Component);

ReportsShow.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    report: state.report
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReportsShow);
//# sourceMappingURL=ReportsShow.js.map