import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'
// import { authStateReducer } from 'redux-auth'
import { Link, Redirect } from 'react-router'
import { connect } from 'react-redux'
// import { LinkContainer } from 'react-router-bootstrap'
// import FacebookAuth from 'react-facebook-auth'
// import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'

import config from 'config'

import Footer3      from './Footer3'
import Leaderboard  from './Leaderboard'
import HeaderTopBar from './HeaderTopBar'
// import { profileAction } from '../../actions'
import AppRouter from './AppRouter'

class MainNavigationPressroom extends React.Component {

  constructor (props) {
    super(props)
    this.state = { mobileMenuVisible: false }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log("+++ +++ MainNavigationPressroom componentWillReceiveProps:", nextProps)

    if (nextProps.site) {
      document.title = nextProps.site.title
    }
  }

  componentWillMount(nextProps) {
    console.log("+++ +++ MainNavigationPressroom componentWillMount:", nextProps)
  }

  toggleMobileMenu (e) {
		e.preventDefault();
    console.log('+++ toggleMobileMenu')
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible })
    $(this.refs['mobile-menu']).slideToggle(500)
  }

  render () {
    console.log('+++ +++ MainNavigationPressroom render:', this.props, this.state)
    if (!this.props.site) { return (null) }

    let galleriesSelected, homeSelected = 'selected', reportsSelected, tagsSelected, videosSelected
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
    })
    
    return (
      <div >
        <div className="site_container">
          <div className="header_top_bar_container clearfix"><HeaderTopBar /></div>
			    <div className="header_container">
				    <div className="header clearfix">
					    <div className="logo">
						    <h1 style={{ margin: 0, fontFamily: 'serif' }} ><a href="home.html" title="Pressroom">{ this.props.site.title }</a></h1>
						    <h4>{this.props.site.subhead}</h4>
					    </div>
				    </div>
			    </div>
			    <div className="menu_container clearfix">
				    <nav>
				      <ul className="sf-menu">
					      <li className={homeSelected}><Link to={AppRouter.rootPath}>Home</Link></li>
                { config.reportsEnabled &&   <li className={reportsSelected} ><Link to={AppRouter.reportsLink()}>Reports</Link></li> }
                { config.galleriesEnabled && <li className={galleriesSelected} ><Link to={AppRouter.galleriesLink()}>Galleries</Link></li> }
                { config.videosEnabled &&    <li className={videosSelected} ><Link to={AppRouter.videosLink()}>Videos</Link></li> }
                { config.tagsEnabled &&      <li className={tagsSelected} ><Link to={AppRouter.tagsLink()}>Tags</Link></li> }
				      </ul>
				    </nav>
				    <div className="mobile_menu_container">
					    <a href="#" className="mobile-menu-switch" onClick={(e) => {this.toggleMobileMenu(e)}} >
						    <span className="line"></span>
						    <span className="line"></span>
						    <span className="line"></span>
					    </a>
					    <div className="mobile-menu-divider"></div>
					    <nav>
					      <ul className="mobile-menu" ref='mobile-menu' >
						      <li className="selected"><a href="home.html" title="Home">Home</a></li>
						      { config.reportsEnabled && <li className=""><a href="about.html" title="Pages">Reports</a></li> }
						      { config.galleriesEnabled && <li className=""><a href="about.html" title="Pages">Galleries</a></li> }
						      { config.videosEnabled && <li className=""><a href="about.html" title="Pages">Videos</a></li> }
						      { config.tagsEnabled && <li className=""><a href="about.html" title="Pages">Tags</a></li> }
					      </ul>
					    </nav>
				    </div>
          </div>
        </div>
        { this.props.children }
        <Footer3 />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(MainNavigationPressroom)

















