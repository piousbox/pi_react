'use strict';

var _chai = require('chai');

var _TgmApi = require('../TgmApi.jsx');

var _TgmApi2 = _interopRequireDefault(_TgmApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TgmApi', function () {
  it('is sane', function () {
    var tgmApi = _TgmApi2.default;
    (0, _chai.expect)(tgmApi.profile).to.be.a('string');
    (0, _chai.expect)(tgmApi.fbLogin).to.be.a('string');
  });
});
//# sourceMappingURL=TgmApi-test.js.map