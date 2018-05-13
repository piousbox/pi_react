'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TgmApi = {
  fbLogin: _config2.default.apiUrl + '/api/users/fb_sign_in',
  profile: _config2.default.apiUrl + '/api/users/profile',
  updateProfile: _config2.default.apiUrl + '/api/users/profile/update',

  buyStars: _config2.default.apiUrl + '/api/buyStars'
};

exports.default = TgmApi;
//# sourceMappingURL=TgmApi.js.map