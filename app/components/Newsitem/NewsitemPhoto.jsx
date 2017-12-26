import React from 'react'
import Lightbox from 'react-image-lightbox'

import { AppRouter, TgmLink} from '../App'

class NewsitemPhoto extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }
  }

  render () {
    return (
      <div className="post">
			  <img style={{cursor: 'pointer'}} src={this.props.photo.small_url} alt='' onClick={() => { this.setState({isOpen: true}) }} />
			  <div className="post_content">
			    <h2>
            <TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || 'Untitled'}</TgmLink>
			    </h2>
			    <ul className="post_details">
			      { this.props.newsitem.tag_name ? 
              <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> : <li className="category">Uncategorized</li> }
            <li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
			    </ul>
			    <div dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} />
			    { ('undefined' === typeof this.props.newsitem.item_type ||
             this.props.newsitem.item_type === 'photo') ? null : <a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a> }
			  </div>

        { this.state.isOpen && <Lightbox mainSrc={this.props.photo.original_url} onCloseRequest={() => { this.setState({isOpen: false }) }} ></Lightbox> }
			</div>
    )
  }
}

export default NewsitemPhoto
