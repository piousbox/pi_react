'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function citiesIndexReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CITIES_INDEX:
      return action.cities;
    default:
      return state;
  }
}
/*
 * citiesReducer
 */

var citiesShowReducer = function citiesShowReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CITY:
      return action.city;
    default:
      return state;
  }
};

exports.default = {
  citiesIndexReducer: citiesIndexReducer,
  citiesShowReducer: citiesShowReducer
};
//# sourceMappingURL=citiesReducer.js.map