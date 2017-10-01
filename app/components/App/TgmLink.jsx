
import React from 'react'
import { Link } from 'react-router'
import TgmRouter from './TgmRouter'

class TgmLink extends React.Component {
  render () {
    if (this.props.newsitem) {
      switch (this.props.newsitem.item_type) {
        case 'gallery':
          return (<Link to={ TgmRouter.galleryPhotoLink(this.props.newsitem.galleryname) }>{ this.props.newsitem.name }</Link>)
        case 'report':
          return (<Link to={ TgmRouter.reportLink(this.props.newsitem.reportname) }>{ this.props.newsitem.name }</Link>)
        case 'video':
          return (<Link to={ TgmRouter.videosLink(this.props.newsitem.youtube_id) }>{ this.props.newsitem.name }</Link>)
        case 'photo':
          return (<span>{ this.props.newsitem.name }</span>)
        default:
          return (<div>info not provided</div>)
      }
    } else {
      return (
        <div>Default TgmLink - info not provided</div>
      )
    }
  }
}

export default TgmLink
