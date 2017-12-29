import React from 'react'
import { Link } from 'react-router'

import { Meta, TgmLink, AppRouter } from '../App'

class NewsitemReport extends React.Component {
  render () {
    let onePhoto = null
    if (this.props.newsitem.photos) {
      onePhoto = <img src={ this.props.newsitem.photos[0].small_url } alt='' />
    }

    return (
			<div className="post">
        { onePhoto }
				<TgmLink newsitem={this.props.newsitem} >{ onePhoto }</TgmLink>
				<div className="post_content">
					<h2 className="with_number">
            <TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink>
					</h2>
					<ul className="post_details">
            <li className="category">{ this.props.newsitem.item_type }</li>
					  { this.props.newsitem.tag_name && <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> }
						<li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
					</ul>
					<p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} />
					{ ('undefined' === typeof this.props.newsitem.item_type ||
             this.props.newsitem.item_type === 'photo') ? null : <a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a> }
				</div>
			</div>)
  }
}

export default NewsitemReport
