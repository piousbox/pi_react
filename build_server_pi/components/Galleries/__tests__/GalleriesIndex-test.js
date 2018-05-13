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

var _GalleriesIndex = require('../GalleriesIndex');

var _GalleriesIndex2 = _interopRequireDefault(_GalleriesIndex);

var _stores = require('../../../stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);

describe('GalleriesIndex', function () {

  /* it('Should render GI Home', () => {
    let store1 = mockStore({
      city: {
        galleries: [
          {name: 'Name', photos: []}
        ]
      }
    })
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><GalleriesIndex store={store1} params={{cityname: 'cityname'}} galleries={{ gallery: [1, 2, 3] }} g3={"g5"}
                      props={{ g1: 'g1', galleries: 'az' }} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(home)
    // console.log('+++ elem:', elem)
    expect(elem.tagName.toLowerCase()).to.equal('div')
    expect(elem.querySelector('h2 a').innerHTML).to.eql('Name')
  }) */

});
//# sourceMappingURL=GalleriesIndex-test.js.map