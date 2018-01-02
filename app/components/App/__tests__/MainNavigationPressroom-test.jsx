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
import MainNavigationPressroom from '../MainNavigationPressroom'
import store from '../../../stores'

describe('MainNavigationPressroom', () => {
  it('sets site in state', () => {
    let trueUrls = { // @TODO: refactor this into AppRouter
      site: `${config.apiUrl}/api/sites/view/${config.domain}.json`,
    }
    let dispatched = { 
      // reports: false, 
      site: false, 
    }
    let oldFetch   = fetch
    fetch = function(a) {
      // console.log('+++ +++ called fetch!', a)
      if (a === trueUrls.site) { dispatched.site = true }
      return oldFetch(a)
    }

    let store1 = mockStore({
      site: {
        n_reports: 5,
      },
    })
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><MainNavigationPressroom params={{}} routes={[]} /></Provider>
    )
    expect( dispatched.site ).to.equal( true )
  })
})
