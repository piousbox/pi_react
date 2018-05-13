'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseStore = function (_EventEmitter) {
  _inherits(BaseStore, _EventEmitter);

  function BaseStore() {
    var _ref;

    _classCallCheck(this, BaseStore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = BaseStore.__proto__ || Object.getPrototypeOf(BaseStore)).call.apply(_ref, [this].concat(args)));

    _this.data = new Set([]);
    return _this;
  }

  _createClass(BaseStore, [{
    key: 'setAll',
    value: function setAll(items) {
      this.data = new Set(items);
      this.emitChange();
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return Array.from(this.data);
    }
  }, {
    key: 'set',
    value: function set(item) {
      if (!this.data.has(item)) {
        this.data.add(item);
        this.emitChange();
      }
    }
  }, {
    key: 'remove',
    value: function remove(item) {
      this.data.delete(item);
      this.emitChange();
    }
  }]);

  return BaseStore;
}(_events.EventEmitter);

exports.default = BaseStore;
//# sourceMappingURL=BaseStore.js.map