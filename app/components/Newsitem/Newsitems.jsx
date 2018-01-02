import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col,
         Button,
} from 'react-bootstrap'

import { siteNewsitemsAction, siteShow } from '../../actions'

import Newsitem from './Newsitem'
import Center   from './../Center'
import Clearfix from './../Clearfix'

class Newsitems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.gotoPage = this.gotoPage.bind(this)
  }

  gotoPage (page) {
    this.setState(Object.assign({}, this.state, { page: page }))
    this.props.dispatch(siteNewsitemsAction({ page: page }))
  }

  render() {
    // console.log('+++ +++ Newsitems render:', this.props, this.state)

    let listitems = []
    let newsitems = this.props.newsitems
    if (newsitems && newsitems.length > 0) {
      let idx = 0
      newsitems.map((n, idx) => {
        listitems.push(
          <Col key={idx} xs={12} ><Newsitem key={idx} newsitem={ n } /></Col>
        )
        if ((idx+1) % 2 === 0) {
          listitems.push(<Clearfix key={`${idx}-clearfix`} />)
        }
      })
    }
    
    let pagination = []
    let pageNumber = 1
    let activeStyle = { fontWeight: 'bold' }
    const lambda = (pageNum, idx) => {
      pagination.push(
        <li key={idx} className={this.state.page == pageNum ? 'selected' : '' }>
          <a className="btn" onClick={() => {this.gotoPage(pageNum)}}>{pageNum}</a>
        </li>)
    }
    if (this.props.site) {
      for (let i = 0; i < this.props.site.n_newsitems; i += this.props.site.newsitems_per_page) {
        lambda(pageNumber++, i)
      }
    }
    let lastPage = Math.ceil( this.props.site.n_newsitems / this.props.site.newsitems_per_page )
    
    return (
      <Row >
        { listitems }

        <Col xs={12}>
          <ul className="pagination clearfix page_margin_top_section">
	          { this.state.page !== 1 && <li className=""><a className="btn" onClick={() => {this.gotoPage(this.state.page-1)}}>&lt;</a></li> }
            { pagination }
	          { this.state.page !== lastPage && <li className=""><a className="btn" onClick={() => {this.gotoPage(this.state.page+1)}}>&gt;</a></li> }
          </ul>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(Newsitems)
