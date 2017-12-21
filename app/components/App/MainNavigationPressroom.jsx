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

    this.state = { site: {}, mobileMenuVisible: false }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ MainNavigationPressroom componentWillReceiveProps:", nextProps)

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
    
    return (
      <div >
        <div className="site_container">
          { /* <div className="header_top_bar_container clearfix"><HeaderTopBar /></div> */ }
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
					      <li className="selected"><a href="#" title="Home">Home</a></li>
                { config.reportsEnabled &&   <li><Link to={AppRouter.reportsLink()}>Reports</Link></li> }
                { config.galleriesEnabled && <li><Link to={AppRouter.galleriesLink()}>Galleries</Link></li> }
                { config.videosEnabled &&    <li><Link to={AppRouter.videosLink()}>Videos</Link></li> }
                { config.tagsEnabled &&      <li><Link to={AppRouter.tagsLink()}>Tags</Link></li> }
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
























        /* <Navbar>
           <Navbar.Header>
           <Navbar.Brand>
           <Link to="/">{ config.siteTitle }</Link>
           </Navbar.Brand>
           <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
           <Nav bsStyle="pills" pullRight>
           { config.citiesEnabled ?    <li><Link to='/en/cities'>Cities</Link></li>                 : null }
           { config.tagsEnabled ?      <li><Link to={AppRouter.tagsLink()}>Tags</Link></li>         : null }
           { config.galleriesEnabled ? <li><Link to={AppRouter.galleriesLink}>Galleries</Link></li> : null }
           { config.reportsEnabled ?   <li><Link to={AppRouter.reportsLink}>Reports</Link></li>     : null }
           { config.galleriesEnabled ? <li><Link to={AppRouter.galleriesLink}>Galleries</Link></li> : null }
           </Nav>
           </Navbar.Collapse>
           </Navbar> */ 
