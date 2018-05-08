import React from 'react'
import { Link } from 'react-router'
import { Row, Col, } from 'react-bootstrap'

import { TgmLink, AppRouter, Center, Clearfix } from '../App'
import Meta from '../Meta'

class NewsitemGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.oneImgRef = 'oneImgRef' // React.createRef()
  }

  componentDidMount () {
    let height = this.oneImgRef.clientHeight
    height = 300
    this.setState({ oneImgHeight: height })
    // console.log('+++ height2:', height)
  }
  
  render () {
    console.log('+++ +++ NewsitemGallery:', this.props, this.state)

    let newsitem = {}
    let photos = []
    let h = this.state.oneImgHeight ? this.state.oneImgHeight / 2 : 0
    if (this.props.newsitem && this.props.newsitem.photos[0]) {
      photos.push(
        <li key="one" style={{ cursor: 'pointer', width: '50%', height: '300px',  border: '1px solid red', float: 'left',
                               background: `url(${this.props.newsitem.photos[0].small_url})` }} />)
    }

    if (this.props.newsitem && this.props.newsitem.photos[1]) {
      photos.push(
        <li key="two" style={{ cursor: 'pointer', width: '50%', height: h,  border: '1px solid red', float: 'left',
                               background: `url(${this.props.newsitem.photos[1].small_url})` }} />)
    }

    if (this.props.newsitem && this.props.newsitem.photos[2]) {
      photos.push(
        <li key="three" style={{ cursor: 'pointer', width: '50%', height: h,  border: '1px solid green', float: 'left',
                               background: `url(${this.props.newsitem.photos[2].small_url})` }} />)
    }

    return (
			<Row className="NewsitemGallery" style={{ marginBottom: '2em' }} >
        <Col xs={12}>
          <h2 style={{ margin: 0 }} ><TgmLink newsitem={this.props.newsitem} >{this.props.newsitem.title || this.props.newsitem.name}</TgmLink></h2>
          <Meta item={this.props.newsitem} />
        </Col>
        <Col xs={12}>
          <ul className="photos">{ photos }</ul>
          And a few more...
          <Clearfix />
				</Col>
        { this.props.newsitem.description && <p dangerouslySetInnerHTML={{ __html: this.props.newsitem.description }} /> }
			</Row>)
  }
}

export default NewsitemGallery
