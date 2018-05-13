'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Newsitems = require('../Newsitems');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureTags = function (_React$Component) {
  _inherits(FeatureTags, _React$Component);

  function FeatureTags() {
    _classCallCheck(this, FeatureTags);

    return _possibleConstructorReturn(this, (FeatureTags.__proto__ || Object.getPrototypeOf(FeatureTags)).apply(this, arguments));
  }

  _createClass(FeatureTags, [{
    key: 'render',
    value: function render() {
      // console.log('+++ +++ FeatureTags render:', this.props, this.state)

      var rendered = [];
      this.props.tags && this.props.tags.map(function (tag, idx) {
        rendered.push(_react2.default.createElement(
          'div',
          { key: idx, className: 'FeatureTag' },
          _react2.default.createElement(
            'h3',
            { className: 'header' },
            tag.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'tagContainer' },
            _react2.default.createElement(_Newsitems.Newsitem, { newsitem: tag.newsitems[0] })
          )
        ));
      });

      return _react2.default.createElement(
        'div',
        null,
        rendered
      );
    }
  }]);

  return FeatureTags;
}(_react2.default.Component);

exports.default = FeatureTags;
//# sourceMappingURL=FeatureTags.js.map