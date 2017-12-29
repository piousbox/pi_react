import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import { siteShow } from '../../actions'

import Clearfix      from './Clearfix'
import Features      from './Features'
import Footer        from './Footer'
import { Newsitems  } from '../Newsitem'

class Home extends React.Component {
  constructor(props) {
    super(props) 
    console.log('+++ +++ Home constructor:', props)

    props.dispatch(siteShow())
    if (props.site) {
      localStorage.setItem("lang", props.site.lang)
    }
  }

  componentWillMount() {
  }

  render () {
    // console.log('+++ +++ rendering Home:', this.props, this.state)

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <Newsitems />
          </Col>
          <Col xs={12} md={4}>
            <p>features go here</p>

            <Features features={this.props.site.features} />
            { /* <LatestPosts /> */ }
            { /* <TopAuthors /> */ }
          </Col>
        </Row>
      </Grid>         
    )
  }
}

Home.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Home)

