import React from 'react'
import { Link } from 'react-router'
import { Row, Col, } from 'react-bootstrap'

import { Meta, TgmLink, AppRouter, Center, Clearfix } from '../App'

class NewsitemGallery extends React.Component {
  render () {
    let newsitem = {}
    let photos = []
    let onePhoto = null
    if (this.props.newsitem.photos) {
      onePhoto = (<img style={{ cursor: 'pointer', border: '10px solid gray', padding: '10px', width: '50%', float: 'left' }} 
                       src={this.props.newsitem.photos[0].small_url} alt='' />)
      
      this.props.newsitem.photos.forEach((photo, idx) => {
        if (idx !== 0) { 
          if (idx < 5) { // only 4 pics, and the first one is big, so it's idx 1 thru 4.
            photos.push(<li key={idx} ><img key={idx} src={ photo.thumb_url } alt='' /></li>) 
          }
        }
      })
    }

    return (
			<Row className="NewsitemGallery" style={{ marginBottom: '2em' }} >
        <Col xs={12}>
          <h2 style={{ margin: 0 }} ><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
					<ul className="meta" >
            <li className="category">{ this.props.newsitem.item_type }</li>
					  { this.props.newsitem.tag_name && <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> }
						<li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
					</ul>
        </Col>
        <Col xs={12}>
          <ul className="photos">
            <li>{ onePhoto }</li>{ photos }
          </ul>
          <Clearfix />
				</Col>
        { this.props.newsitem.description && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
				{ /* ('undefined' === typeof this.props.newsitem.item_type ||
                   this.props.newsitem.item_type === 'photo') ? null : <a title="Read more" href="post.html" className="readMore"><span className="arrow"></span><span>READ MORE</span></a> */ }
			</Row>)
  }
}

export default NewsitemGallery
