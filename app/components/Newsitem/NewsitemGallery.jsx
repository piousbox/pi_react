import React from 'react'
import { Link } from 'react-router'
import { Row, Col, } from 'react-bootstrap'

import { Meta, TgmLink, AppRouter } from '../App'

class NewsitemGallery extends React.Component {
  render () {
    let newsitem = {}
    let photos = []
    let onePhoto = null
    if (this.props.newsitem.photos) {
      this.props.newsitem.photos.forEach((photo, idx) => {
        if (idx !== 0) { photos.push(<li><img key={idx} src={ photo.thumb_url } alt='' /></li>) }
      })
      onePhoto = <img style={{ cursor: 'pointer', border: '10px solid gray', padding: '10px', width: '100%' }} 
                      src={this.props.newsitem.photos[0].small_url} alt='' />
    }

    return (
			<Row className="NewsitemGallery" style={{ marginTop: '2em' }} >
        <Col xs={12} md={6}>{ onePhoto }</Col>
        <Col xs={12} md={6}>
					<h2><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
					<ul className="post_details" >
            <li className="category">{ this.props.newsitem.item_type }</li>
					  { this.props.newsitem.tag_name && <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> }
						<li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
					</ul>
          <ul className="photos" style={{ clear: 'both' }} >{ photos }</ul>
					{ this.props.newsitem.description && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
					{ ('undefined' === typeof this.props.newsitem.item_type ||
             this.props.newsitem.item_type === 'photo') ? null : <a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a> }
				</Col>
			</Row>)
  }
}

export default NewsitemGallery
