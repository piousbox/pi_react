'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require('chai');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _reactRedux = require('react-redux');

var _TagsIndex = require('../TagsIndex.jsx');

var _TagsIndex2 = _interopRequireDefault(_TagsIndex);

var _stores = require('../../../stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TagsIndex', function () {
  it('Should render TagsIndex', function () {
    var home = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _reactRedux.Provider,
      { store: _stores2.default },
      _react2.default.createElement(_TagsIndex2.default, { store: _stores2.default, params: {} })
    ));
    var elem = _reactDom2.default.findDOMNode(home);
    (0, _chai.expect)(elem.tagName.toLowerCase()).to.equal('div');
  });
});
//# sourceMappingURL=TagsIndex-test.js.map