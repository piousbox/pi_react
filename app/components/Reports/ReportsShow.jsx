import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Disqus from 'react-disqus-thread'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'
const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
} = ShareButtons
const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const LivejournalIcon = generateShareIcon('livejournal');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');
import DocumentMeta from 'react-document-meta'
import { Helmet } from 'react-helmet'

import config from 'config'
import Center from '../Center'

import { AppRouter } from '../App'
import { reportsShow, siteShow } from '../../actions'

import Meta from '../Meta'
import { 
  Clearfix,  
  // LargeSquare, Leaderboard,
} from '../App'

class ReportsShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      report: {}
    }
    props.dispatch(reportsShow({ reportname: props.params.reportname }))
  }

  componentWillReceiveProps(nextProps) {
    // console.log("+++ +++ reportsShow received props:", nextProps)

    this.setState(Object.assign({}, this.state, {report: nextProps.report }))
  }

  render () {
    console.log('+++ +++ ReportsShow:', this.props, this.state)
    let url = `https://${config.domain}${AppRouter.reportLink(this.state.report)}`

    return (
      <Grid>
        { this.state.report.name && <Helmet>
          <meta property="og:url"                content={url} />
          <meta property="og:type"               content="article" />
          <meta property="og:title"              content={this.state.report.name} />
          <meta property="og:description"        content={this.state.report.name} />
          <meta property="og:image"              content={this.state.report.photo_url} />
          </Helmet> }
        <Row>
          <Col xs={12}>
            <Center>
              <h1>{ this.state.report.name }</h1>
              <Meta item={this.state.report} />
              
              <div className="social-buttons">
                <TwitterShareButton url={url} >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={url} >  
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <p className='socialMediaCount'><FacebookShareCount url={url} /></p>
                <Clearfix />
              </div>

            </Center>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <div className="subhead" style={{ margin: '2em 0 2em 0' }} ><i>{this.state.report.subhead}</i></div>
            <div style={{ float: 'left', padding: '5px', width: '410px', clear: 'right' }}>
              <img src={this.state.report.photo_url} alt={this.state.report.name} />
            </div>
            { /* <div style={{ float: 'left', padding: '5px', width: '350px', clear: 'left' }}><LargeSquare /></div> */ }
            <div dangerouslySetInnerHTML={{__html: this.state.report.description}} />
            <br /><br />
            { /* <Leaderboard /> */ }
            { this.state.report.name && <Disqus shortname={config.disqusShortname} 
                                           identifier={this.state.report.reportname}
                                           title={this.state.report.name} 
                                           url={url} /> }
          </Col>
        </Row>
      </Grid>
    )
  }
}

ReportsShow.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    report: state.report,
  }
}

export default connect(mapStateToProps)(ReportsShow)

