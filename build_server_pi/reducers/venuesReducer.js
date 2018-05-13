'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * venuesReducer
 */

var venueReducer = function venueReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_VENUE:
      return action.venue;
    default:
      return state;
  }
};

var venuesReducer = function venuesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.CONST.setVenues:
      // console.log('+++ venuesReducer:', action)
      return action.venues;
    default:
      return state;
  }
};

exports.default = {
  venueReducer: venueReducer,
  venuesReducer: venuesReducer
};
//# sourceMappingURL=venuesReducer.js.map