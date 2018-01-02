import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { shallow }    from 'enzyme'
import { Provider }   from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk          from 'redux-thunk'
import 'whatwg-fetch'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

import config from 'config'
import ReportsIndex from '../ReportsIndex'
import store from '../../../stores'

describe('ReportsIndex', () => {

  it('renders', () => {
    let store1 = mockStore({
      reports: [
        { name: 'Name' }
      ],
      site: {
        n_reports: 5,
      }
    })
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><ReportsIndex params={{ reports_page: 1 }} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(home)
    expect(elem.tagName.toLowerCase()).to.equal('div')
    expect(elem.querySelector('h2 a').innerHTML).to.eql('Name')
  })

  it('sets site in state', () => {
    let trueUrls = { // @TODO: refactor this into AppRouter
      reports: `${config.apiUrl}/api/reports.json?domain=${config.domain}&reports_page=1`,
      site: `${config.apiUrl}/api/sites/view/${config.domain}.json`,
    }
    let dispatched = { reports: false, site: false, }

    let oldFetch   = fetch
    fetch = function(a) {
      // console.log('+++ +++ called fetch!', a)
      if (a === trueUrls.reports) { dispatched.reports = true }
      if (a === trueUrls.site) { dispatched.site = true }
      return oldFetch(a)
    }

    let store1 = mockStore({
      reports: [
        { name: 'Name' }
      ],
      site: {
        n_reports: 5,
      },
    })
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><ReportsIndex params={{ reports_page: 1 }} /></Provider>
    )
    expect( dispatched.reports ).to.equal( true )
    // expect( dispatched.site ).to.equal( true )
  })

})
