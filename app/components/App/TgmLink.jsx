
import React from 'react'
import { Link } from 'react-router'
import AppRouter from './AppRouter'

class TgmLink extends React.Component {
  render () {
    if (this.props.newsitem) {
      switch (this.props.newsitem.item_type) {
        case 'gallery':
          return (<Link to={ AppRouter.galleryPhotoLink(this.props.newsitem.galleryname) }>{ this.props.newsitem.name }</Link>)
        case 'report':
          return (<Link to={ AppRouter.reportLink(this.props.newsitem.reportname) }>{ this.props.newsitem.name }</Link>)
        case 'video':
          return (<Link to={ AppRouter.videosLink(this.props.newsitem.youtube_id) }>{ this.props.newsitem.name }</Link>)
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
