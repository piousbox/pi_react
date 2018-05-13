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

var reportsReducer = function reportsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_REPORTS:
      return action.reports;
    default:
      return state;
  }
};
/*
 * reportsReducer
 */

var reportsShowReducer = function reportsShowReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_REPORT:
      return action.report;
    default:
      return state;
  }
};

exports.default = {
  reportsReducer: reportsReducer,
  reportsShowReducer: reportsShowReducer
};
//# sourceMappingURL=reportsReducer.js.map