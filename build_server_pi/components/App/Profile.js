'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Center = require('../Center');

var _Center2 = _interopRequireDefault(_Center);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _TgmApi = require('./TgmApi');

var _TgmApi2 = _interopRequireDefault(_TgmApi);

var _reactRouter = require('react-router');

var _Profile = require('../Profile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Galleries
 */
var MyGalleries = function (_React$Component) {
  _inherits(MyGalleries, _React$Component);

  function MyGalleries() {
    _classCallCheck(this, MyGalleries);

    return _possibleConstructorReturn(this, (MyGalleries.__proto__ || Object.getPrototypeOf(MyGalleries)).apply(this, arguments));
  }

  _createClass(MyGalleries, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Center2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Galleries'
          )
        )
      );
    }
  }]);

  return MyGalleries;
}(_react2.default.Component);

/**
 * Profile
 */


var Profile = function (_React$Component2) {
  _inherits(Profile, _React$Component2);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this2 = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this2.handleSubmit = function (e) {
      e.preventDefault();
      fetch(_TgmApi2.default.updateProfile, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          user_profile: _this2.state.profile,
          accessToken: _this2.state.profile.accessToken
        })
      }).then(function (r) {
        return r.json();
      }).then(function (_data) {
        console.log('+++ +++ updated profile:', _data);
      });
    };

    _this2.handleCityChange = function (e) {
      _this2.state.profile.current_city_id = e.target.value;
    };

    _this2.handleAboutChange = function (e) {
      _this2.state.profile.about = e.target.value;
    };

    _this2.handleSelect = function (e) {
      switch (e) {
        case "reports":
          break;
        case "galleries":
          break;
        default:
          console.log('+++ +++ handleSelect - this should not happen!', e);
      }
      _this2.setState(Object.assign({}, _this2.state, { activeKey: e }));
    };

    _this2.state = { profile: {},
      cities: [],
      activeKey: 'galleries',
      menuContent: _react2.default.createElement(MyGalleries, null),
      my: {
        galleries: [],
        reports: [],
        videos: []
      }
    };
    return _this2;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount(nextProps) {
      console.log("+++ +++ profile nextProps:", nextProps);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('+++ +++ profile will receive props:', nextProps);
      this.setState(Object.assign({}, this.state, { profile: nextProps.profile }));
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("+++ +++ Profile render props:", this.props);
      console.log("+++ +++ Profile render state:", this.state);

      var menuContent = null;
      switch (this.state.activeKey) {
        case 'galleries':
          menuContent = _react2.default.createElement(MyGalleries, null);
          break;
        case 'reports':
          menuContent = _react2.default.createElement(_Profile.MyReports, null);
          break;
        default:
          console.log('+++ +++ this 234 should never happen');
      }

      var citiesOptions = [];
      if (Object.keys(this.props.cities).length > 0) {
        this.props.cities.forEach(function (city, idx) {
          citiesOptions.push(_react2.default.createElement(
            'option',
            { key: idx, value: city.id },
            city.name
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
            { xs: 12, md: 6, mdOffset: 3, xsOffset: 0, lg: 6, lgOffset: 0 },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _Center2.default,
                null,
                _react2.default.createElement(
                  'h1',
                  null,
                  'My Profile'
                )
              ),
              _react2.default.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 3 },
                    _react2.default.createElement('img', { src: '//graph.facebook.com/' + this.props.profile.id + '/picture', alt: '' })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 9 },
                    this.state.profile.name,
                    _react2.default.createElement('br', null),
                    this.state.profile.email
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12 },
                    _react2.default.createElement(
                      'b',
                      null,
                      'About me:'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('textarea', { style: { width: '100%' }, rows: '4', value: this.state.profile.about,
                      onChange: this.handleAboutChange })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12 },
                    _react2.default.createElement(
                      'b',
                      null,
                      'Current City:'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'select',
                      { value: this.state.profile.current_city_id, onChange: this.handleCityChange },
                      _react2.default.createElement(
                        'option',
                        { selected: !this.state.profile.current_city_id, disabled: true },
                        'Choose City...'
                      ),
                      citiesOptions
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 3, xsOffset: 9 },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { bsStyle: 'primary', type: 'submit', value: 'Submit' },
                      'Submit'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, md: 6, mdOffset: 3, xsOffset: 0, lg: 6, lgOffset: 0 },
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { bsStyle: 'tabs', activeKey: this.state.activeKey, onSelect: this.handleSelect },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 'reports' },
                'Reports'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 'galleries' },
                'Galleries'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 'videos' },
                'Videos'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: { borderTop: 'none' } },
              menuContent
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
    cities: state.cities
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Profile);
//# sourceMappingURL=Profile.js.map