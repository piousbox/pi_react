import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import { Link } from 'react-router'
import Lightbox from 'react-image-lightbox'

import Center from './../Center'
import styles from './_Newsitems.scss'
import NewsitemPhoto from './NewsitemPhoto'

import { VideoEmbed, VideoPreview } from '../Videos'

import { Meta, TgmLink, AppRouter } from '../App'

class Newsitem extends React.Component {
  render() {
    // console.log('+++ +++ Newsitem props:', this.props, this.state)

    let newsitem = {}

    if (this.props.newsitem.item_type === 'video') {
      if (this.props.site.play_videos_in_preview) {
        return (<VideoEmbed video={ this.props.newsitem } />)
      } else {
        return (<VideoPreview video={ this.props.newsitem } />)
      }
    }
    
    let photos = []
    let onePhoto = null
    if (this.props.newsitem.item_type === 'gallery') {
      if (this.props.newsitem.photos) {
        this.props.newsitem.photos.forEach( (photo, idx) => {
          photos.push(<img key={idx} src={ photo.thumb_url } alt='' />)
        })
      }
    } else if (this.props.newsitem.item_type === 'photo') {
      return(<NewsitemPhoto newsitem={this.props.newsitem} photo={this.props.newsitem.photos[0]} />)
    } else if (this.props.newsitem.item_type === 'report') {
      onePhoto = (<img src={ this.props.newsitem.photo_url }
                       style={{ width: '100px', float: 'left', padding: '5px' }} alt='' />)
    }
    
    let descr
    if (this.props.newsitem.descr) {
      descr = (<div dangerouslySetInnerHTML={{ __html: this.props.newsitem.descr }} />)
    }
    
    return (
			<div className="post">
        { /* onePhoto */ }
				<TgmLink newsitem={this.props.newsitem} >{ onePhoto }</TgmLink>
				<div className="post_content">
					<h2>
            <TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || 'Untitled'}</TgmLink>
					</h2>
					<ul className="post_details">
						{ this.props.newsitem.tag_name ? <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> :
              <li className="category">Uncategorized</li> }
						<li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
					</ul>
					<div dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} />
					{ ('undefined' === typeof this.props.newsitem.item_type ||
             this.props.newsitem.item_type === 'photo') ? null : <a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a> }
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

export default connect(mapStateToProps)(Newsitem)

/*
<Panel>
<h3><TgmLink newsitem={ this.props.newsitem } /></h3>
<Meta item={ this.props.newsitem } />
{ onePhoto }
{ descr }
{ photos }
<div style={{ clear: 'both' }} />
</Panel>
*/
