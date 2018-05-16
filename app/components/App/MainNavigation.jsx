import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'
import { Link, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import config       from 'config'

//import { siteShow } from '../../actions'
import actions from '../../actions'
const siteShow = actions.siteShow

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
    console.log('+++ +++ MainNavigation render:', this.props, this.state)
    if (!this.props.site) { return (null) }

    let galleriesSelected, homeSelected = 'selected', reportsSelected, tagsSelected, videosSelected, peopleSelected


    /**
     * unreachable
     */
    return (
      <div >
        <HeaderTopBar />

        <div className="center main-logo">
					<h1 style={{ margin: 0, fontFamily: 'serif' }} ><NavLink to="/">{ this.props.site.title }</NavLink></h1>
					<h4>{this.props.site.subhead}</h4>
				</div>
        
        <div className="menu-primary">
          <Grid>
            <Row>
              <Col xs={12}>
                <ul>
                  <li><NavLink to={AppRouter.rootLink()}>Home</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('salsa')}>Salsa</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('bachata')}>Bachata</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('sketches')}>Sketches</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('travel')}>Travel</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('music')}>Music</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('javascript')}>Javascript</NavLink></li>
                  <li><NavLink to={AppRouter.tagLink('ruby')}>Ruby</NavLink></li>
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
                  { config.reportsEnabled &&   <li className={reportsSelected} ><NavLink to={AppRouter.reportsLink()}>Reports</NavLink></li> }
                  { config.galleriesEnabled && <li className={galleriesSelected} ><NavLink to={AppRouter.galleriesLink()}>Galleries</NavLink></li> }
                  { config.videosEnabled &&    <li className={videosSelected} ><NavLink to={AppRouter.videosLink()}>Videos</NavLink></li> }
                  { config.tagsEnabled &&      <li className={tagsSelected} ><NavLink to={AppRouter.tagsLink()}>Tags</NavLink></li> }
                  { config.peopleEnabled &&    <li className={peopleSelected} ><NavLink to={AppRouter.peopleLink()}>People</NavLink></li> }
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
        
        <Grid>{ this.props.children }</Grid>

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


















