'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _Reports2Show = require('../Reports/Reports2Show');

var _Reports2Show2 = _interopRequireDefault(_Reports2Show);

var _actions = require('../../actions');

var _FbConnect = require('./FbConnect');

var _FbConnect2 = _interopRequireDefault(_FbConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrowLeft = '/public/e100f91b4dae486fc273398fa938c78b.png';
var arrowRight = '/public/efb3084b17ba06c581681d5d79bb0a68.png';
var arrowUp = '/public/dbd59ff914566f4b692cfca7b15870ab.png';
var arrowDown = '/public/b66c8e9b078c5506b599e5b9c6a906c7.png';

var Headerz = function (_React$Component) {
  _inherits(Headerz, _React$Component);

  function Headerz(props) {
    _classCallCheck(this, Headerz);

    var _this = _possibleConstructorReturn(this, (Headerz.__proto__ || Object.getPrototypeOf(Headerz)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Headerz, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'header header-slim' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'T.G.M'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'header' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Cities'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Tags'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'News'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Profile'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'header-2' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Home'
          ),
          ' > ',
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Tags'
          ),
          ' > ',
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Dancing'
          ),
          ' > ',
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Salsa'
          )
        )
      );
    }
  }]);

  return Headerz;
}(_react2.default.Component);

var Tgm2 = function (_React$Component2) {
  _inherits(Tgm2, _React$Component2);

  function Tgm2(props) {
    _classCallCheck(this, Tgm2);

    var _this2 = _possibleConstructorReturn(this, (Tgm2.__proto__ || Object.getPrototypeOf(Tgm2)).call(this, props));

    _this2.state = { collapseState: 'center',
      collapseFooter: 'up'
    };

    _this2.collapseLeft = _this2.collapseLeft.bind(_this2);
    _this2.collapseRight = _this2.collapseRight.bind(_this2);
    _this2.collapseUp = _this2.collapseUp.bind(_this2);
    _this2.collapseDown = _this2.collapseDown.bind(_this2);

    _this2.rerender = _this2.rerender.bind(_this2);
    return _this2;
  }

  _createClass(Tgm2, [{
    key: 'rerender',
    value: function rerender() {
      console.log('+++ +++ rerender?', this.props);

      if (this.props.params.locationname) {
        this.props.dispatch((0, _actions.setLocation)(this.props.params.locationname));
      }
    }
  }, {
    key: 'collapseLeft',
    value: function collapseLeft() {
      if (this.state.collapseState === 'left') {
        /* nothing */
      } else if (this.state.collapseState === 'center') {
        this.setState({ collapseState: 'left' });
      } else if (this.state.collapseState === 'right') {
        this.setState({ collapseState: 'center' });
      }
      this.rerender();
    }
  }, {
    key: 'collapseRight',
    value: function collapseRight() {
      if (this.state.collapseState === 'right') {
        /* nothing */
      } else if (this.state.collapseState === 'center') {
        this.setState({ collapseState: 'right' });
      } else if (this.state.collapseState === 'left') {
        this.setState({ collapseState: 'center' });
      }
      this.rerender();
    }
  }, {
    key: 'collapseUp',
    value: function collapseUp() {
      if (this.state.collapseFooter === 'up') {
        // nothing
      } else if (this.state.collapseFooter === 'down') {
        this.setState({ collapseFooter: 'up' });
      }
      this.rerender();
    }
  }, {
    key: 'collapseDown',
    value: function collapseDown() {
      if (this.state.collapseFooter === 'down') {
        // nothing
      } else if (this.state.collapseFooter === 'up') {
        this.setState({ collapseFooter: 'down' });
      }
      this.rerender();
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('+++ +++ render Tgm2:', this.props, this.state)

      var rightPane = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Alberto\'s'
          ),
          _react2.default.createElement(
            'p',
            null,
            'I guess it\'s quite popular and also there are a lot of good dancers regularing that place. Would recommend, if there is no problem with me coming in there the next time, which will be when?'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Santa Clara Dance Studio'
          ),
          _react2.default.createElement(
            'p',
            null,
            'That\'s fridays. I\'ve never been there, and will post a review as soon as I go there to check it out.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Palomar Ballroom'
          ),
          _react2.default.createElement(
            'p',
            null,
            'It\'s a bit far from where I live, but Santa Cruz is nice (relatively, with sidenotes) and the population that goes to that ballroom is quite nice.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'Agenda Salsa'
          ),
          _react2.default.createElement(
            'p',
            null,
            'That\'s Wednesdays, which is nice b/c it\'s not on Friday. The instruction is so-so, but you can still meet nice people and have fun there.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Panel,
          null,
          _react2.default.createElement(
            'h5',
            null,
            'The Starlite Ballroom'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Sundays, let\'s check it out. Terrible calendar infographic. Cannot be worse I think. Impossible to read. But hey, if the ballroom is okay, I\'m in.'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(Headerz, null),
        _react2.default.createElement(
          'div',
          { className: 'folder folder-both folder-collapse-' + this.state.collapseState + ' footer-' + this.state.collapseFooter },
          _react2.default.createElement(
            'div',
            { className: 'folder folder-left folder-half' },
            _react2.default.createElement(
              'ul',
              { className: 'nav nav-tabs' },
              _react2.default.createElement(
                'li',
                { className: '' },
                _react2.default.createElement(
                  'a',
                  { href: '#web-design-6', 'data-toggle': 'tab', 'aria-expanded': 'false' },
                  'Map'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                _react2.default.createElement(
                  'a',
                  { href: '#graphic-design-6', 'data-toggle': 'tab', 'aria-expanded': 'false' },
                  _react2.default.createElement(
                    'span',
                    { className: 'title-head' },
                    'News'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: '' },
                _react2.default.createElement(
                  'a',
                  { href: '#developement-6', 'data-toggle': 'tab', 'aria-expanded': 'false' },
                  _react2.default.createElement(
                    'span',
                    { className: 'title-head' },
                    'People'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tab-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'tab-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'tab-pane active', id: 'web-design-6' },
                  this.props.children
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'folder-ctrl' },
              _react2.default.createElement(
                'a',
                { className: 'btn-left', onClick: this.collapseLeft },
                _react2.default.createElement('img', { src: arrowLeft, alt: '' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'btn-right', onClick: this.collapseRight },
                _react2.default.createElement('img', { src: arrowRight, alt: '' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'folder folder-right folder-half' },
            _react2.default.createElement(
              'ul',
              { className: 'nav nav-tabs' },
              _react2.default.createElement(
                'li',
                { className: 'active' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Videos'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: '' },
                _react2.default.createElement(
                  'a',
                  { href: '#graphic-design-6', 'data-toggle': 'tab', 'aria-expanded': 'false' },
                  _react2.default.createElement(
                    'span',
                    { className: 'title-head' },
                    'News'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: '' },
                _react2.default.createElement(
                  'a',
                  { href: '#developement-6', 'data-toggle': 'tab', 'aria-expanded': 'false' },
                  _react2.default.createElement(
                    'span',
                    { className: 'title-head' },
                    'People'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tab-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'tab-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'tab-pane active' },
                  rightPane
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'folder-footer' },
            _react2.default.createElement(
              'div',
              { className: 'folder-footer-ctrl' },
              _react2.default.createElement(
                'a',
                { className: 'btn-up', onClick: this.collapseUp },
                _react2.default.createElement('img', { src: arrowUp, alt: '' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'btn-down', onClick: this.collapseDown },
                _react2.default.createElement('img', { src: arrowDown, alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'folder-footer-content' },
              _react2.default.createElement(_FbConnect2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Tgm2;
}(_react2.default.Component);

Tgm2.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    leftPane: state.leftPane,
    rightPane: state.rightPane
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Tgm2);
//# sourceMappingURL=Tgm2.js.map