import React from 'react'
import { Link } from 'react-router'
import { Row, Col, } from 'react-bootstrap'

import { TgmLink, AppRouter, Center, Clearfix } from '../App'
import Meta from '../Meta'

class NewsitemGallery extends React.Component {
  constructor(props) {
    super(props)
    this.oneImgRef = 'oneImgRef' // React.createRef()
  }

  render () {
    console.log('+++ +++ NewsitemGallery:', this.props, this.state)
    console.log('+++ height?', this.oneImgRef.offsetHeight)

    let newsitem = {}
    let photos = []
    if (this.props.newsitem && this.props.newsitem.photos) {
      photos.push(
        <li key="one"><img ref={this.oneImgRef} style={{ cursor: 'pointer', width: '50%', float: 'left' }} 
          src={this.props.newsitem.photos[0].small_url} alt='' />
        </li>)
      
      photos.push(
        <li key="two"><img style={{ cursor: 'pointer', width: '50%', height: '50%', border: '1ps solid red', float: 'left' }} 
          src={this.props.newsitem.photos[1].small_url} alt='' />
        </li>)

      photos.push(
        <li key="three"><img style={{ cursor: 'pointer', width: '50%', float: 'left' }} 
          src={this.props.newsitem.photos[2].small_url} alt='' />
        </li>)
    }

    return (
			<Row className="NewsitemGallery" style={{ marginBottom: '2em' }} >
        <Col xs={12}>
          <h2 style={{ margin: 0 }} ><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
          <Meta item={this.props.newsitem} />
        </Col>
        <Col xs={12}>
          <ul className="photos">{ photos }</ul>
          <Clearfix />
				</Col>
        { this.props.newsitem.description && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
			</Row>)
  }
}

export default NewsitemGallery
