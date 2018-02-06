import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'
import { Link, Redirect } from 'react-router'
import { connect } from 'react-redux'

import config       from 'config'
import { siteShow } from '../../actions'

import Footer3      from './Footer3'
import Leaderboard  from './Leaderboard'
import HeaderTopBar from './HeaderTopBar'
import AppRouter    from './AppRouter'

class MainNavigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { mobileMenuVisible: false }
    props.dispatch(siteShow())
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log("+++ +++ MainNavigation componentWillReceiveProps:", nextProps)

    if (nextProps.site) {
      document.title = nextProps.site.title
    }
  }

  componentWillMount(nextProps) {
    // console.log("+++ +++ MainNavigation componentWillMount:", nextProps)
  }

  toggleMobileMenu (e) {
		e.preventDefault();
    // console.log('+++ toggleMobileMenu')
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible })
    $(this.refs['mobile-menu']).slideToggle(500)
  }

  render () {
    // console.log('+++ +++ MainNavigation render:', this.props, this.state)
    if (!this.props.site) { return (null) }

    let galleriesSelected, homeSelected = 'selected', reportsSelected, tagsSelected, videosSelected, peopleSelected
    this.props.routes.map((route, idx) => {
      // galleries
      if (route.path === AppRouter.galleriesPath ||
          route.path === AppRouter.galleriesPagesPath ||
          route.path === AppRouter.galleryPath ||
          route.path === AppRouter.galleryPhotoPath) {
        galleriesSelected = 'selected'
        homeSelected = null
      }
      // reports
      if (route.path === AppRouter.reportsPath ||
          route.path === AppRouter.reportsPagesPath ||
          route.path === AppRouter.reportPath) {
        reportsSelected = 'selected'
        homeSelected = null
      }
      // tags
      if (route.path === AppRouter.tagsPath ||
          route.path === AppRouter.tagPath) {
        tagsSelected = 'selected'
        homeSelected = null
      }
      // videos
      if (route.path === AppRouter.videosPath ||
          route.path === AppRouter.videosPagesPath ||
          route.path === AppRouter.videoPath) {
        videosSelected = 'selected'
        homeSelected = null
      }
      // people
      if (route.path === AppRouter.peoplePath) {
        peopleSelected = 'selected'
        homeSelected = null
      }
    })
    
    return (
      <div >
        <HeaderTopBar />

        <div className="center main-logo">
					<h1 style={{ margin: 0, fontFamily: 'serif' }} ><Link to="/">{ this.props.site.title }</Link></h1>
					<h4>{this.props.site.subhead}</h4>
				</div>
        
        <div className="menu-primary">
          <Grid>
            <Row>
              <Col xs={12}>
                <ul>
                  <li><Link to={AppRouter.rootLink()}>Home</Link></li>
                  <li><Link to={AppRouter.tagLink('salsa')}>Salsa</Link></li>
                  <li><Link to={AppRouter.tagLink('bachata')}>Bachata</Link></li>
                  <li><Link to={AppRouter.tagLink('sketches')}>Sketches</Link></li>
                  <li><Link to={AppRouter.tagLink('travel')}>Travel</Link></li>
                  <li><Link to={AppRouter.tagLink('music')}>Music</Link></li>
                  <li><Link to={AppRouter.tagLink('javascript')}>Javascript</Link></li>
                  <li><Link to={AppRouter.tagLink('ruby')}>Ruby</Link></li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
        
        <div className="menu-secondary">
          <Grid>
            <Row>
              <Col xs={12}>
                <ul>
                  { config.reportsEnabled &&   <li className={reportsSelected} ><Link to={AppRouter.reportsLink()}>Reports</Link></li> }
                  { config.galleriesEnabled && <li className={galleriesSelected} ><Link to={AppRouter.galleriesLink()}>Galleries</Link></li> }
                  { config.videosEnabled &&    <li className={videosSelected} ><Link to={AppRouter.videosLink()}>Videos</Link></li> }
                  { config.tagsEnabled &&      <li className={tagsSelected} ><Link to={AppRouter.tagsLink()}>Tags</Link></li> }
                  { config.peopleEnabled &&    <li className={peopleSelected} ><Link to={AppRouter.peopleLink()}>People</Link></li> }
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
        
        { this.props.children }

        <Footer3 reports={this.props.site.reports} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(MainNavigation)


















