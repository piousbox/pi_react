'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _constants = require('../../constants');

var _App = require('../App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meta = function (_React$Component) {
  _inherits(Meta, _React$Component);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).apply(this, arguments));
  }

  _createClass(Meta, [{
    key: 'render',
    value: function render() {
      console.log('+++ Meta:', this.props, this.state);
      if (Object.keys(this.props.item).length == 0) {
        return _react2.default.createElement('div', null);
      }

      var items = [];

      if (this.props.item && this.props.item.tag) {
        items.push(_react2.default.createElement(
          'span',
          { key: 'tag', className: 'tag' },
          this.props.item.tag,
          ' \xA0 '
        ));
      }
      if (this.props.item && this.props.item.tag_name) {
        items.push(_react2.default.createElement(
          'span',
          { key: 'tag', className: 'tag' },
          this.props.item.tag_name,
          ' \xA0 '
        ));
      }

      if (this.props.item.city_name) {
        items.push(_react2.default.createElement(
          'span',
          { key: 'city', className: 'city' },
          this.props.item.city_name,
          ' \xA0 '
        ));
      }

      // items.push(<span key="itemType" className={CONST.Tag} >{T.report}</span>)

      return _react2.default.createElement(
        'div',
        { className: 'Meta' },
        _react2.default.createElement(
          'span',
          { className: 'item-type' },
          this.props.item.item_type
        ),
        false && this.props.item.cityname ? _react2.default.createElement(
          'span',
          null,
          '\xA0in city ',
          _react2.default.createElement(
            _reactRouter.Link,
            { to: _App.AppRouter.cityLink(this.props.item.cityname) },
            this.props.item.cityname
          )
        ) : null,
        this.props.item.tagname ? _react2.default.createElement(
          'span',
          null,
          '\xA0tag ',
          _react2.default.createElement(
            _reactRouter.Link,
            { to: _App.AppRouter.tagLink(this.props.item.tagname) },
            this.props.item.tagname
          )
        ) : null,
        '\xA0on ',
        _react2.default.createElement(
          'u',
          null,
          this.props.item.created_at.substr(0, 10)
        ),
        '\xA0by ',
        _react2.default.createElement(
          'u',
          null,
          this.props.item.username
        )
      );
    }
  }]);

  return Meta;
}(_react2.default.Component);

exports.default = Meta;
//# sourceMappingURL=index.js.map