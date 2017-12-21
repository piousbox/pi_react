import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

// import FacebookAuth from 'react-facebook-auth'
// import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'
// import { authStateReducer } from 'redux-auth'

import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'

import Clearfix      from './Clearfix'
import Features      from './Features'
import Footer        from './Footer'
import { Newsitems  } from '../Newsitem'

// import { LinkContainer } from 'react-router-bootstrap'

import { siteShow } from '../../actions'

/*
const loginFbUser = (r) => {
  console.log('+++ +++ todo!')
}
const saveFbUser = (r) => {
  console.log('+++ +++ more todo!')
}
const MyFacebookButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Login with facebook
    </button>
  )
}
*/

class LatestPosts extends React.Component {
  render () {
    return (
      <div>
			  <h4 className="box_header page_margin_top_section">Latest Posts</h4>
			  <div className="vertical_carousel_container clearfix">
          <div className="caroufredsel_wrapper caroufredsel_wrapper_vertical_carousel style-1" >
            <ul className="blog small vertical_carousel autoplay-1 scroll-1 navigation-1 easing-easeInOutQuint duration-750 pr_preloader_vl_0 style-2" >
              
			        <li className="post" style={{ position: 'relative', margin: '1em 0' }} >
			          <a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html" style={{ float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' }} >
			            <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" />
			          </a>
                <div style={{ margin: '0 0 0 110px', minHeight: '110px' }} >
			            <h5 style={{ marginTop: 0 }} ><a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html">Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate</a></h5>
			            <ul className="post_details simple">
			              <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			              <li className="date">2017-12-12</li>
			            </ul>
                </div>
                <div style={{ clear: 'both' }} />
			        </li>

			        <li className="post" style={{ position: 'relative', margin: '1em 0' }} >
			          <a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html" style={{ float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' }} >
			            <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" />
			          </a>
                <div style={{ margin: '0 0 0 110px', minHeight: '110px' }} >
			            <h5 style={{ marginTop: 0 }} ><a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html">Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate</a></h5>
			            <ul className="post_details simple">
			              <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			              <li className="date">2017-12-12</li>
			            </ul>
                </div>
                <div style={{ clear: 'both' }} />
			        </li>

			        <li className="post" style={{ position: 'relative', margin: '1em 0' }} >
			          <a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html" style={{ float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' }} >
			            <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" />
			          </a>
                <div style={{ margin: '0 0 0 110px', minHeight: '110px' }} >
			            <h5 style={{ marginTop: 0 }} ><a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html">Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate</a></h5>
			            <ul className="post_details simple">
			              <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			              <li className="date">2017-12-12</li>
			            </ul>
                </div>
                <div style={{ clear: 'both' }} />
			        </li>

            </ul>
          </div>
			  </div>
      </div>
    )
  }
}

class TopAuthors extends React.Component {
  render () {
    return (
      <div>
			  <h4 className="box_header page_margin_top_section">Top Authors</h4>
			  <ul className="authors rating clearfix">
			    <li className="author">
			      <a title="Debora Hilton" href="author.html" className="thumb">
			        <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_01.jpg" />
			        <span data-value="34" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">3</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">4</span></span></span></span></span></div></span><div style={{ height: '100px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			      </a>
			      <div className="details">
			        <h5><a title="Debora Hilton" href="author.html">Debora Hilton</a></h5>
			        <h6>EDITOR</h6>
			      </div>
			    </li>
			    <li className="author">
			      <a title="Anna Shubina" href="author.html" className="thumb">
			        <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_02.jpg" />
			        <span data-value="25" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span></div></span><div style={{ height: '73.52px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1"></div></div>
			      </a>
			      <div className="details">
			        <h5><a title="Anna Shubina" href="author.html">Anna Shubina</a></h5>
			        <h6>EDITOR</h6>
			      </div>
			    </li>
			    <li className="author">
			      <a title="Liam Holden" href="author.html" className="thumb">
			        <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_03.jpg" />
			        <span data-value="9" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">9</span></span></span></span></span></div></span><div style={{ height: '26.47px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			      </a>
			      <div className="details">
			        <h5><a title="Liam Holden" href="author.html">Liam Holden</a></h5>
			        <h6>PUBLISHER</h6>
			      </div>
			    </li>
			    <li className="author">
			      <a title="Heather Dale" href="author.html" className="thumb">
			        <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_04.jpg" />
			        <span data-value="2" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span></div></span><div style={{ height: '5.88px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			      </a>
			      <div className="details">
			        <h5><a title="Heather Dale" href="author.html">Heather Dale</a></h5>
			        <h6>ILLUSTRATOR</h6>
			      </div>
			    </li>
			  </ul>
      </div>
    )
  }
}

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

            { /* <Features features={this.props.site.features} /> */ }
            <Newsitems />

						<div className="blog big" >

							<div className="post">
								<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">
									<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_10.jpg" style={{ display: 'block' }} />
								</a>
								<div className="post_content">
									<h2 className="with_number">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">Built on Brotherhood, Club Lives Up to Name</a>
										{ /* <a title="2 comments" href="post.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a> */ }
									</h2>
									<ul className="post_details">
										<li className="category"><a title="WORLD" href="category_world.html">Salsa</a></li>
										<li className="date">
											2017-12-12
										</li>
									</ul>
									<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
									<a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
								</div>
							</div>

            </div>

						<ul className="pagination clearfix page_margin_top_section">
							<li className="left"><a title="" href="#">&nbsp;</a></li>
							<li className="selected"><a title="" href="#">1</a></li>
							<li><a title="" href="#">2</a></li>
							<li><a title="" href="#">3</a></li>
							<li className="right"><a title="" href="#">&nbsp;</a></li>
            </ul>

          </Col>
          <Col xs={12} md={4}>
            <LatestPosts />
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

