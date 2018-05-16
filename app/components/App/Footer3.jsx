import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import bg from './images/bg1.png'
import ig from './images/social/instagram.png'
import fb from './images/social/facebook.png'
import uu from './images/social/youtube.png'
import es from './images/flags/es.png'
import ru from './images/flags/ru.png'
import en from './images/flags/en.png'
import pt from './images/flags/pt.png'

import config from 'config'
import { siteShow } from '../../actions'

import AppRouter from './AppRouter'

class Footer3 extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    // console.log('+++ +++ Footer3:', this.props, this.state)
    // if (Object.keys(this.props.site).length === 0) { return (null) }

    let langs = []
    this.props.site.langs && this.props.site.langs.forEach( lang => {
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
	          <div >
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
      <div>
        <div className="mainFooter">
          <Grid>
            <Row>
              <Col xs={12} md={3}>
							  <h4 className="box-header">About {this.props.site.domain}</h4>
							  <p>{ this.props.site.description }</p>
              </Col>
              <Col xs={12} md={6}>
                <h4 className="box-header">Latest Posts</h4>
	              <ul style={{marginLeft: '10px', marginTop: '25px' }} >
                  { latestReports }
                </ul>
              </Col>
              <Col xs={12} md={3}>
							  <h4 className="box-header" >Get In Touch With Us</h4>
				      </Col>
					  </Row>
            <Row>
              <Col xs={12} >
							  <ul className="footer-menu">
								  <li><Link to={AppRouter.tagLink('music')}>Music</Link></li>
								  <li><Link to={AppRouter.tagLink('dance')}>Dance</Link></li>
								  <li><Link to={AppRouter.tagLink('ftim')}>The FTIM Adventure</Link></li>
								  <li><Link to={AppRouter.tagLink('sports')}>Sports & Health</Link></li>
								  <li><Link to={AppRouter.tagLink('photography')}>Photography</Link></li>
							  </ul>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="footer4">
          <Grid>
            <Row>
              <Col xs={12} sm={12} >
                2018 &copy; Copyright Wasya Co<br /><a href="#">Terms of Service</a>
              </Col>
            </Row>
			    </Grid>
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

      

