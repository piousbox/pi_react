import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'
import { Link } from 'react-router'
import Lightbox from 'react-image-lightbox'

import NewsitemPhoto   from './NewsitemPhoto'
import NewsitemGallery from './NewsitemGallery'
import NewsitemReport  from './NewsitemReport'

import { VideoEmbed, VideoPreview } from '../Videos'

class Newsitem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('+++ +++ Newsitem render:', this.props, this.state)

    if (this.props.newsitem.item_type === 'video') {
      if (this.props.site.play_videos_in_preview) { return (<VideoEmbed video={ this.props.newsitem } />) }
      return (<VideoPreview video={ this.props.newsitem } />) 
    }
    if (this.props.newsitem.item_type === 'photo')   { return(<NewsitemPhoto   newsitem={this.props.newsitem} photo={this.props.newsitem.photos[0]} />) }
    if (this.props.newsitem.item_type === 'gallery') { return(<NewsitemGallery newsitem={this.props.newsitem} />) }  
    if (this.props.newsitem.item_type === 'report')  { return(<NewsitemReport newsitem={this.props.newsitem} />) }
    return(null)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(Newsitem)
