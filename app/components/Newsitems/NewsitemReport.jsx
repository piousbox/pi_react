import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import { Meta, TgmLink, AppRouter } from '../App'
import { CONST } from '../../constants'

class NewsitemReport extends React.Component {
  render () {
    console.log('+++ +++ NewsitemReport:', this.props, this.state)

    return (
      <div style={{ marginBottom: '2em' }} >
        { /* <TgmLink newsitem={this.props.newsitem} >
          <img style={{ padding: '10px', width: '100%' }} src={this.props.newsitem.photo_url} alt=''  />
        </TgmLink> */ }
        <h2><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
        <Meta item={this.props.newsitem} without={CONST.tag} />
        <ul className="post_details">
          <li className="category">{this.props.newsitem.item_type}</li>
          { this.props.newsitem.tag_name && <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> }
          { this.props.newsitem.username && <li className="category">By {this.props.newsitem.username}</li> }
          <li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
        </ul>
        { this.props.newsitem.desciption && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
      </div>)
  }
}

export default NewsitemReport
