import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import bg from './images/bg1.png'

import ig from './images/social/instagram.png'
import fb from './images/social/facebook.png'
import uu from './images/social/youtube.png'

import config from 'config'

import { siteShow } from '../../actions'

import { Link } from 'react-router'
import AppRouter from './AppRouter'

import es from './images/flags/es.png'
import ru from './images/flags/ru.png'
import en from './images/flags/en.png'
import pt from './images/flags/pt.png'

import {
  DO_LOGOUT,
} from '../../constants/AppConstants'

import { connect } from 'react-redux'

class Footer3 extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log('+++ +++ Footer3:', this.props, this.state)

    let langs = []
    if (this.props.site && this.props.site.langs) {
      this.props.site.langs.forEach( lang => {
        let flag = null
        switch (lang) {
          case 'es':
            flag = es
            break
          case 'ru':
            flag = ru
            break
          case 'pt':
            flag = pt
            break
          case 'en':
          default:
            flag = en
        }            
        langs.push(<li key={lang} ><Link to={AppRouter.siteLink(lang)}><img src={flag} alt={lang} /></Link></li>)
      })
    }

    let latestReports = []
    this.props.reports && this.props.reports.map((report, idx) => {
      if (idx < 4) { // limit 4 here
	      latestReports.push(
          <li key={idx} style={{ display: 'block' }} >
            { /* <Link to={AppRouter.reportLink(report)}>
	               <span className="icon small gallery"></span>
	               <img src='images/samples/100x100/image_06.jpg' alt='img' />
                 {report.title}
                 </Link> */ }
	          <div classNameTrash="post_content">
	            <h5><Link to={AppRouter.reportLink(report)}>{report.name}</Link></h5>
	            <ul className="post_details simple">
	              { /* <li className="category"><a href="category_health.html" title="HEALTH">HEALTH</a></li> */ }
	              <li className="date">{report.created_at.substring(0, 10)}</li>
	            </ul>
	          </div>
	        </li>
        )
      }
    })

    return (
      <div className="footer_container">
				<div className="footer clearfix">
          <Row>
            <Col xs={12} md={3}>
							<h4 className="box_header">About Us</h4>
							<p className="padding_top_bottom_25">Piousbox.com is an entertainment site (a blog) of Victor Piousbox.</p>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="box_header">Latest Posts</h4>
	            <div className="vertical_carousel_container clearfix">
	              <ul className="blog small vertical_carousel autoplay-1 scroll-1 navigation-1 easing-easeInOutQuint duration-750"
                    style={{marginLeft: '10px', marginTop: '25px' }} >
                  { latestReports }
                </ul>
              </div>
				    </Col>
            <Col xs={12} md={3}>
              { /* latest galleries */ }
							<h4 className="box_header" classNameTrash="page_margin_top" >Get In Touch With Us</h4>
							<ul className="social_icons dark page_margin_top clearfix">
								<li><a target="_blank" title="" href="http://facebook.com/QuanticaLabs" className="social_icon facebook">&nbsp;</a></li>
								<li><a target="_blank" title="" href="https://twitter.com/QuanticaLabs" className="social_icon twitter">&nbsp;</a></li>
								<li><a title="" href="mailto:contact@pressroom.com" className="social_icon mail">&nbsp;</a></li>
								<li><a title="" href="#" className="social_icon skype">&nbsp;</a></li>
								<li><a title="" href="http://themeforest.net/user/QuanticaLabs?ref=QuanticaLabs" className="social_icon envato">&nbsp;</a></li>
								<li><a title="" href="#" className="social_icon instagram">&nbsp;</a></li>
								<li><a title="" href="#" className="social_icon pinterest">&nbsp;</a></li>
							</ul>
				    </Col>
					</Row>
					<div className="row page_margin_top_section">
						<div className="column column_3_4">
							<ul className="footer_menu">
								<li><h4><Link to={AppRouter.tagLink('music')}>Music</Link></h4></li>
								<li><h4><Link to={AppRouter.tagLink('dance')}>Dance</Link></h4></li>
								<li><h4><Link to={AppRouter.tagLink('ftim')}>The FTIM Adventure</Link></h4></li>
								<li><h4><Link to={AppRouter.tagLink('sports')}>Sports & Health</Link></h4></li>
								<li><h4><Link to={AppRouter.tagLink('photography')}>Photography</Link></h4></li>
							</ul>
						</div>
						<div className="column column_1_4">
							<a className="scroll_top" href="#top" title="Scroll to top">Top</a>
						</div>
					</div>
					<div className="row copyright_row">
						<div className="column column_2_3">&copy; Copyright Wasya Co</div>
						<div className="column column_1_3">
							{ /* <ul className="footer_menu">
								<li><h6><a href="about.html" title="About">About</a></h6></li>
								<li><h6><a href="authors.html" title="Authors">Authors</a></h6></li>
								<li><h6><a href="contact.html" title="Contact Us">Contact Us</a></h6></li>
							</ul> */ }
						</div>
					</div>
				</div>
			</div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(Footer3)

      



/*
const latestGalleriesTrash = (
	<h4 className="box_header">Latest Galleries</h4>
	<div className="horizontal_carousel_container big page_margin_top">
	  <ul className="blog horizontal_carousel visible-1 autoplay-0 scroll-1 navigation-1 easing-easeInOutQuint duration-750">
	    <li className="post">
	      <a href="post_gallery.html" title="Struggling Nuremberg Sack Coach Verbeek">
	        <span className="icon gallery"></span>
	        <img src='images/samples/330x242/image_03.jpg' alt='img' />
	      </a>
	      <h5 className="with_number">
	        <a href="post_gallery.html" title="Struggling Nuremberg Sack Coach Verbeek">Struggling Nuremberg Sack Coach Verbeek</a>
	        <a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
	      </h5>
	      <ul className="post_details simple">
	        <li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
	        <li className="date">
	          10:11 PM, Feb 02
	        </li>
	      </ul>
	    </li>
	    <li className="post">
	      <a href="post_gallery.html" title="Built on Brotherhood, Club Lives Up to Name">
	        <span className="icon gallery"></span>
	        <img src='images/samples/330x242/image_14.jpg' alt='img' />
	      </a>
	      <h5 className="with_number">
	        <a href="post_gallery.html" title="Built on Brotherhood, Club Lives Up to Name">Built on Brotherhood, Club Lives Up to Name</a>
	        <a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
	      </h5>
	      <ul className="post_details simple">
	        <li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
	        <li className="date">
	          10:11 PM, Feb 02
	        </li>
	      </ul>
	    </li>
	    <li className="post">
	      <a href="post_gallery.html" title="New Painkiller Rekindles Addiction Concerns">
	        <span className="icon gallery"></span>
	        <img src='images/samples/330x242/image_04.jpg' alt='img' />
	      </a>
	      <h5 className="with_number">
	        <a href="post_gallery.html" title="New Painkiller Rekindles Addiction Concerns">New Painkiller Rekindles Addiction Concerns</a>
	        <a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
	      </h5>
	      <ul className="post_details simple">
	        <li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
	        <li className="date">
	          10:11 PM, Feb 02
	        </li>
	      </ul>
	    </li>
	  </ul>
	</div>
)
*/
