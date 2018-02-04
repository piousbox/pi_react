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
import { Newsitems } from '../Newsitems'
import { TagNewsitems, FeatureTags } from '../Tags'
import { 
  AdSkyscraper, AdLargeSquare, AdBanner, AdSkim, AdWdz, AdCot, AdWasya 
} from '../Ads'

class TagWidget extends React.Component {
  render () {
    return (<div>tag widget</div>)
  }
}


class PeopleWidget extends React.Component {
  render () {
    return (<div>people widget</div>)
  }
}

class PersonWidget extends React.Component {
  render () {
    return (<div>person widget</div>)
  }
}

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
          <Col xs={12} md={5}>
            <TagNewsitems tagname="major" />
            <TagWidget tagname="bizdev" />
            <TagWidget tagname="human-resources" />
          </Col>
          <Col xs={12} md={5}>
            <AdLargeSquare />
            <br /><br />
            <FeatureTags tags={this.props.site.feature_tags } />
            <TagNewsitems tagname="minor" />
          </Col>
          <Col xs={12} md={2}>
            <AdSkyscraper />
            <AdSkyscraper />
            <PeopleWidget tagname="writers" />
            <AdSkim />
            <AdWdz />
            <AdCot />
            <PersonWidget username="piousbox" />
            <PersonWidget username="bondar" />
            <AdWasya />
          </Col>
        </Row>
      </Grid>         
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tags: state.tags,
    newsitems: state.newsitems,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Home)

