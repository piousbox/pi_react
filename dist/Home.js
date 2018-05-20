'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'World-class Competition Salsa',
              _react2.default.createElement('br', null),
              'in Santa Cruz, CA'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Want to up your salsa game? Now\u2019s your chance! Join us for an Advanced Salsa Workshop led by Beni, and impress your next dance partner with a graceful dip, snappy turn, and elegant flourish! We are committed to helping nurture the vibrant salsa community here in Santa Cruz County by organizing workshops where you can polish your skills and elevate your technique. You love dancing, and so do we!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This workshop is intended for dancers of an intermediate level, and instruction will be tailored to your level of comfort and skill. Our flexible routines can be adjusted to your personal style. This time around, we will pay some special attention to dips: learn how to make this move beautiful and exciting, while maintaining safety and comfort for both partners!'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'Instructors'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              'Beni'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Beni is cool. He\'s from Mexico, he actually knows this stuff.'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              'Hannah'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Hannah is cool. She helps us out. She actually dances in a lot of different styles.'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _react2.default.createElement(
              'h1',
              null,
              'Victor'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Victor is alright. He moves furniture around and makes sure things go smoothly from operation point of view.'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'Map, Address & Directions'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement(
              'h3',
              null,
              'Lauden Nelson Community Center'
            ),
            '301 Center St.,',
            _react2.default.createElement('br', null),
            'Santa Cruz, CA 95060'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 6 },
            _react2.default.createElement('div', { id: 'map', style: { width: '100%', height: '300px' } })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              'h1',
              null,
              'Schedule'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Friday May 4th, 7-9pm'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Friday May 11th, 7-9pm'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Friday May 18th, 7-9pm'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Friday May 25th, 7-9pm'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Friday June 1st, 7-9pm'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Friday June 8th, 7-9pm'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'center' },
              _react2.default.createElement(
                _reactBootstrap.Button,
                { to: 'https://www.eventbrite.com/e/advanced-salsa-workshop-santa-cruz-tickets-45753801853' },
                'Buy Tickets'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=Home.js.map