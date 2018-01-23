import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import { siteNewsitemsAction, siteShow, } from '../../actions'

import Clearfix      from './Clearfix'
import Features      from './Features'
import Footer        from './Footer'
import { Newsitems  } from '../Newsitem'

class Home extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(siteNewsitemsAction({ page: 1 }))
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ Home willReceiveProps:', nextProps, this.props, this.state)
    if (this.props.params.newsitems_page != nextProps.params.newsitems_page) {
      nextProps.dispatch(siteNewsitemsAction({ page: nextProps.params.newsitems_page }))
    }
  }

  render () {
    console.log('+++ +++ rendering Home:', this.props, this.state)

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <Newsitems newsitems={this.props.newsitems} page={this.props.params.newsitems_page||1} />
          </Col>
          <Col xs={12} md={4}>
            <Features features={this.props.site.features} />
          </Col>
        </Row>
      </Grid>         
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newsitems: state.newsitems,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Home)

