import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider }   from 'react-redux'

import TagsIndex  from '../TagsIndex.jsx'
import store from '../../../stores'

describe('TagsIndex', () => {
  it('Should render TagsIndex', () => {
    let home = ReactTestUtils.renderIntoDocument(
      <Provider store={store}><TagsIndex store={store} params={{}} /></Provider>
    )
    let elem = ReactDOM.findDOMNode(home)
    expect(elem.tagName.toLowerCase()).to.equal('div')
  })
})
