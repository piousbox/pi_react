'use strict';

require('babel-core/polyfill');

var context = require.context('.', true, /-test\.jsx?$/);
context.keys().forEach(context);
//# sourceMappingURL=app.tests.js.map