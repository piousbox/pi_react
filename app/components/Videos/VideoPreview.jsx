import React from 'react'
import { Link } from 'react-router'
import { Panel } from 'react-bootstrap'
import Center from '../Center'
import Meta from '../Meta'

class VideoPreview extends React.Component {
  render () {
    return(
      <Panel>
        { this.props.site && this.props.site.play_videos_in_preview ? 
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video.youtube_id}`} frameBorder="0" allowFullScreen></iframe> :
          <Link to={`/en/videos/show/${this.props.video.youtube_id}`}><img src={`https://img.youtube.com/vi/${this.props.video.youtube_id}/0.jpg`} width="100%" alt='' /></Link>
        }
        <h3><Link to={`/en/videos/show/${this.props.video.youtube_id}`}>{ this.props.video.name }</Link></h3>
        <Meta item={this.props.video } />
      </Panel>
    )
  }
}

export default VideoPreview
