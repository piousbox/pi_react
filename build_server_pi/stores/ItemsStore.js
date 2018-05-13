'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseStore2 = require('./BaseStore');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemsStore = function (_BaseStore) {
  _inherits(ItemsStore, _BaseStore);

  function ItemsStore() {
    _classCallCheck(this, ItemsStore);

    return _possibleConstructorReturn(this, (ItemsStore.__proto__ || Object.getPrototypeOf(ItemsStore)).apply(this, arguments));
  }

  _createClass(ItemsStore, [{
    key: 'emitChange',
    value: function emitChange() {
      this.emit(_constants.ITEMS_UPDATED);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(_constants.ITEMS_UPDATED, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(_constants.ITEMS_UPDATED, callback);
    }
  }]);

  return ItemsStore;
}(_BaseStore3.default);

var store = new ItemsStore();

_AppDispatcher2.default.register(function (action) {
  console.log('+++ +++ ItemsStore reducer is called:', action);

  switch (action.actionType) {
    case _constants.ITEMS_GET_SUCCESS:
      // store.setAll(action.items);
      return action.items;
    case _constants.SET_API_URL:
      // store.set({ apiUrl: action.apiUrl })
      return action.apiUrl;
    default:
  }
});

exports.default = store;
//# sourceMappingURL=ItemsStore.js.map