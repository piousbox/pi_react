import React from 'react'
import Lightbox from 'react-image-lightbox'
import { Row, Col, } from 'react-bootstrap'

import { AppRouter, TgmLink} from '../App'

class NewsitemPhoto extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }
  }

  render () {
    return (
      <Row style={{ marginTop: '2em' }} >
        <Col xs={12} md={6}>
			    <img style={{ cursor: 'pointer', border: '10px solid gray', padding: '10px', width: '100%' }} 
               src={this.props.photo.small_url} alt='' onClick={() => { this.setState({isOpen: true}) }} />
        </Col>
        <Col xs={12} md={6}>
			    <h2 style={{cursor: 'pointer'}} onClick={() => { this.setState({isOpen: true}) }} >{this.props.newsitem.title||this.props.newsitem.name||'Untitled'}</h2>
			    <ul className="post_details">
			      <li className="category">{this.props.newsitem.item_type}</li>
            <li className="date">{ this.props.newsitem.created_at.substr(0,10) }</li>
			    </ul>
			    { this.props.newsitem.desciption && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
        </Col>
        { this.state.isOpen && <Lightbox mainSrc={this.props.photo.original_url} onCloseRequest={() => { this.setState({isOpen: false }) }} ></Lightbox> }
      </Row>			  
    )
  }
}

export default NewsitemPhoto
