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

function sitesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_SITE:
      // console.log('+++ +++ SET_SITE:', action)

      return action.site;
    default:
      return state;
  }
}
/*
 * sitesReducer
 */

exports.default = {
  sitesReducer: sitesReducer
};
//# sourceMappingURL=sitesReducer.js.map