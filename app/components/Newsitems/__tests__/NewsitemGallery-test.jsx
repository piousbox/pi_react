import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { shallow }    from 'enzyme'
import { Provider }   from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk          from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

import NewsitemGallery from '../NewsitemGallery'
import store from '../../../stores'

describe('NewsitemsGallery', () => {

  it('Should render', () => {
    let store1 = mockStore({
      city: {
        galleries: [
          {name: 'Name', photos: []}
        ]
      }
    })
    let rendered = ReactTestUtils.renderIntoDocument(
      <Provider store={store1} ><NewsitemGallery
        store={store1} params={{cityname: 'cityname'}} 
        galleries={{ gallery: [1, 2, 3] }} 
        newsitem={{created_at: '2018-01-01' }} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(rendered)
    expect(elem.tagName.toLowerCase()).to.equal('div')
    // expect(elem.querySelector('h2 a').innerHTML).to.eql('Name')
  })

})

