'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require('chai');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _enzyme = require('enzyme');

var _reactRedux = require('react-redux');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _NewsitemGallery = require('../NewsitemGallery');

var _NewsitemGallery2 = _interopRequireDefault(_NewsitemGallery);

var _stores = require('../../../stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);

describe('NewsitemsGallery', function () {

  it('Should render', function () {
    var store1 = mockStore({
      city: {
        galleries: [{ name: 'Name', photos: [] }]
      }
    });
    var rendered = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store1 },
      _react2.default.createElement(_NewsitemGallery2.default, {
        store: store1, params: { cityname: 'cityname' },
        galleries: { gallery: [1, 2, 3] },
        newsitem: { created_at: '2018-01-01' } })
    ));
    var elem = _reactDom2.default.findDOMNode(rendered);
    (0, _chai.expect)(elem.tagName.toLowerCase()).to.equal('div');
    // expect(elem.querySelector('h2 a').innerHTML).to.eql('Name')
  });
});
//# sourceMappingURL=NewsitemGallery-test.js.map