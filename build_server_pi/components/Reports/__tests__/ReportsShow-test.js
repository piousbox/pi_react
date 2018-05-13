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

require('whatwg-fetch');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _ReportsShow = require('../ReportsShow');

var _ReportsShow2 = _interopRequireDefault(_ReportsShow);

var _stores = require('../../../stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);

describe('ReportsShow', function () {
  it('sets site in state', function () {
    var trueUrls = { // @TODO: refactor this into AppRouter
      // reports: `${config.apiUrl}/api/reports.json?domain=${config.domain}&reports_page=1`,
      site: _config2.default.apiUrl + '/api/sites/view/' + _config2.default.domain + '.json'
    };
    var dispatched = {
      // reports: false, 
      site: false
    };
    var oldFetch = fetch;
    fetch = function fetch(a) {
      // console.log('+++ +++ called fetch!', a)
      // if (a === trueUrls.reports) { dispatched.reports = true }
      if (a === trueUrls.site) {
        dispatched.site = true;
      }
      return oldFetch(a);
    };

    var store1 = mockStore({
      reports: [{ name: 'Name' }],
      report: { name: 'abra' },
      site: {
        n_reports: 5
      }
    });
    var home = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store1 },
      _react2.default.createElement(_ReportsShow2.default, { params: { reports_page: 1 } })
    ));
    // expect( dispatched.reports ).to.equal( true )
    // expect( dispatched.site ).to.equal( true )
  });
});
//# sourceMappingURL=ReportsShow-test.js.map