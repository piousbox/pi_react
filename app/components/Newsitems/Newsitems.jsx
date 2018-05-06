import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col,
         Button,
} from 'react-bootstrap'
import { Link } from 'react-router'

import { siteNewsitemsAction, siteShow } from '../../actions'

import Newsitem from './Newsitem'
import Center   from './../Center'
import Clearfix from './../Clearfix'
import { AppRouter } from '../App'

class Newsitems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.gotoPage = this.gotoPage.bind(this)
  }

  gotoPage (page) {
    console.log('+++ gotoPage of Newsitems:', page, this.props, this.state)

    this.setState(Object.assign({}, this.state, { page: page }))
    this.props.dispatch(siteNewsitemsAction({ page: page }))
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ Newsitems willReceiveProps:', nextProps, this.props, this.state)
  }

  render() {
    console.log('+++ +++ Newsitems render:', this.props, this.state)

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
    
    /**
     * pagination
     **/
    let pagination = []
    let pageNumber = 1
    let activeStyle = { fontWeight: 'bold' }
    const lambda = (pageNum, idx) => {
      pagination.push(
        <li key={idx} className={this.props.page == pageNum ? 'selected' : '' }>
          <Link to={AppRouter.newsLink(pageNum)} >{pageNum}</Link>
        </li>)
    }
    if (this.props.site) {
      for (let i = 0; i < this.props.site.n_newsitems; i += this.props.site.newsitems_per_page) {
        lambda(pageNumber++, i)
      }
    }
    let lastPage = Math.ceil( this.props.site.n_newsitems / this.props.site.newsitems_per_page )
    let paginationRender = (
      <Col xs={12}>
        <ul className="pagination clearfix page_margin_top_section">
	        { this.props.page != 1 && <li><Link to={AppRouter.newsLink(parseInt(this.props.page)-1)}>&lt;</Link></li> }
          { pagination }
	        { this.props.page != lastPage && <li><Link to={AppRouter.newsLink(parseInt(this.props.page)+1)}>&gt;</Link></li> }
        </ul>
      </Col>)
    
    return (
      <Row >
        { listitems }
        { paginationRender }
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
