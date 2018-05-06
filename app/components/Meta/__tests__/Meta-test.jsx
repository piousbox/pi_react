import React          from 'react'
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'

import { CONST, T } from '../../../constants'

import Meta from '../index.jsx'

describe('App', () => {
  it('Should render the correct element', () => {
    let app1 = ReactTestUtils.renderIntoDocument(
      <Meta item={{}} />
    )
    let elem = ReactDOM.findDOMNode(app1)
    expect(elem.tagName.toLowerCase()).to.equal('div')
  })

  it('honors "without" prop', () => {
    let newsitem = { item_type: 'Report' }
    let rendered = ReactTestUtils.renderIntoDocument(
      <Meta item={newsitem} without={CONST.Tag} />
    )
    let elem = ReactDOM.findDOMNode(rendered)
    expect(elem.querySelector(`.${CONST.Tag}`).innerHTML).to.eql(T.report)
  })

})
