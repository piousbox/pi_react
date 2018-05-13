'use strict';

module.exports = {
  getComponent: function getComponent(nextState, cb) {
    require.ensure([], function (require) {
      cb(null, require('../components/home'));
    });
  }
};
//# sourceMappingURL=home.js.map