'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactStripeElements = require('react-stripe-elements');

var _reactBootstrap = require('react-bootstrap');

var _reactFacebookAuth = require('react-facebook-auth');

var _reactFacebookAuth2 = _interopRequireDefault(_reactFacebookAuth);

var _actions = require('../../actions');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _TgmApi = require('./TgmApi');

var _TgmApi2 = _interopRequireDefault(_TgmApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var avatar = '/public/fe9739de09c9d1601f452ecc607d67d7.jpg';
var star = '/public/3f6875077e73b2ea7039f793557ac842.png';


var MyFacebookButton = function MyFacebookButton(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { onClick: onClick },
    'F'
  );
};

var _CheckoutForm = function (_React$Component) {
  _inherits(_CheckoutForm, _React$Component);

  function _CheckoutForm(props) {
    _classCallCheck(this, _CheckoutForm);

    var _this = _possibleConstructorReturn(this, (_CheckoutForm.__proto__ || Object.getPrototypeOf(_CheckoutForm)).call(this, props));

    _this.state = {};
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(_CheckoutForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      console.log("+++ handlesubmit:", e);
      this.props.stripe.createToken().then(function (payload) {

        payload = Object.assign({}, payload, { amount: 500,
          profile: _this2.props.profile });
        console.log("+++ payload:", payload);

        fetch(_TgmApi2.default.buyStars, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(payload)
        }).then(function (r) {
          return r.json();
        }).then(function (_data) {
          console.log("+++ success!", _data);
          _this2.props.dispatch((0, _actions.profileAction)());
          _this2.props.handleSuccess();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("+++ +++ _CheckoutForm:", this.props, this.state);

      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(_reactStripeElements.CardElement, null),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              '$5'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              '$10'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              '$15'
            )
          )
        ),
        _react2.default.createElement(
          _Center2.default,
          null,
          _react2.default.createElement(
            'button',
            null,
            'Buy Stars'
          )
        )
      );
    }
  }]);

  return _CheckoutForm;
}(_react2.default.Component);

var CheckoutForm = (0, _reactStripeElements.injectStripe)(_CheckoutForm);

var FbConnect = function (_React$Component2) {
  _inherits(FbConnect, _React$Component2);

  function FbConnect(props) {
    _classCallCheck(this, FbConnect);

    var _this3 = _possibleConstructorReturn(this, (FbConnect.__proto__ || Object.getPrototypeOf(FbConnect)).call(this, props));

    props.dispatch((0, _actions.profileAction)());
    _this3.state = {
      profile: {}
    };
    _this3.handleSuccess = _this3.handleSuccess.bind(_this3);
    return _this3;
  }

  _createClass(FbConnect, [{
    key: 'handleSuccess',
    value: function handleSuccess(e) {
      this.setState({ showBuySuccess: true, showBuyMore: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log("+++ +++ rendering FbConnect:", this.props, this.state);

      var loggedIn = !!(this.props.profile && this.props.profile.name);

      var fbLogin = _react2.default.createElement(_reactFacebookAuth2.default, { appId: _config2.default.fbAppId, fields: 'name,email,picture',
        callback: function callback(response) {
          _this4.props.dispatch((0, _actions.loginAction)(response));
        },
        component: MyFacebookButton });

      if (loggedIn) {
        return _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' } },
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.showBuySuccess, onHide: function onHide() {
                _this4.setState({ showBuySuccess: false });
              } },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Thanks!'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                'p',
                null,
                'Your purchase went through, you should see the updated stars.'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: function onClick() {
                    _this4.setState({ showBuySuccess: false });
                  } },
                'Close'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.showBuyMore, onHide: function onHide() {
                _this4.setState({ showBuyMore: false });
              } },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Buy Stars'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                _reactStripeElements.StripeProvider,
                { apiKey: _config2.default.stripePublicKey },
                _react2.default.createElement(
                  _reactStripeElements.Elements,
                  null,
                  _react2.default.createElement(CheckoutForm, { profile: this.props.profile, dispatch: this.props.dispatch, handleSuccess: this.handleSuccess })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: function onClick() {
                    _this4.setState({ showBuyMore: false });
                  } },
                'Close'
              )
            )
          ),
          _react2.default.createElement('img', { className: 'avatar', src: avatar, alt: '' }),
          _react2.default.createElement(
            'h5',
            null,
            'What\'s up ',
            this.props.profile.name
          ),
          'You have ',
          this.props.profile.n_stars,
          ' ',
          _react2.default.createElement('img', { style: { display: 'inline' }, src: star, alt: 'star' }),
          '\'s.',
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: function onClick() {
                _this4.setState({ showBuyMore: true });
              } },
            'Buy More'
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                _this4.props.dispatch((0, _actions.logoutAction)());
              } },
            'Logout'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' } },
          fbLogin
        );
      }
    }
  }]);

  return FbConnect;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FbConnect);
//# sourceMappingURL=FbConnect.js.map