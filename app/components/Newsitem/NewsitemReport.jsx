import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import { Meta, TgmLink, AppRouter } from '../App'

class NewsitemReport extends React.Component {
  render () {
    return (
      <Row style={{ marginTop: '2em' }} >
        <Col xs={12} md={6}>
			    <TgmLink newsitem={this.props.newsitem} >
            <img style={{ border: '10px solid gray', padding: '10px', width: '100%' }} src={this.props.newsitem.photo_url} alt=''  />
          </TgmLink>
        </Col>
        <Col xs={12} md={6}>
          <h2><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
			    <ul className="post_details">
			      <li className="category">{this.props.newsitem.item_type}</li>
            { this.props.newsitem.tag_name && <li className="category"><Link to={AppRouter.tagLink(this.props.newsitem.tag_name)}>{this.props.newsitem.tag_name}</Link></li> }
            { this.props.newsitem.username && <li className="category">By {this.props.newsitem.username}</li> }
            <li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
			    </ul>
			    { this.props.newsitem.desciption && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
        </Col>
      </Row>)
  }
}

export default NewsitemReport
