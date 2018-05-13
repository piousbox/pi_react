'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require('chai');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _index = require('../index.jsx');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {
  it('Should render the correct element', function () {
    var app1 = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_index2.default, null));
    var elem = _reactDom2.default.findDOMNode(app1);
    (0, _chai.expect)(elem.tagName.toLowerCase()).to.equal('div');
  });
});
//# sourceMappingURL=Center-test.js.map