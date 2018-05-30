/*
 * Blog component
 */

import React from 'react'
import { Link } from 'react-router'

import config from 'config'
import AppRouter from '../App/AppRouter'

import { 
  Grid, Row, Col,
} from 'react-bootstrap'

import blogImg from './images/bg/blog.jpg'

class CaseStudies extends React.Component {
  constructor(props) {
    super(props)
    this.state= { items: [ { name: 'Loading...', photo: {} } ] }
  }

  componentWillMount () {
    fetch(`${config.apiUrl}/api/tags/view/case-studies.json`, {}).then(r => r.json()).then(_data => {
      console.log('+++ case studies data:', _data)

      this.setState({ items: _data.reports })
    }).catch(_e => {
      console.log('+++ cannot fetch case studies::', _e)
    })
  }

  render () {
    let items = []
    this.state.items.map((item, idx) => {
      items.push(
        <div key={idx} >
          <br />
          <Link to={AppRouter.blogItemLink(item)}>
            <img style={{ float: 'left', padding: '0 1rem 1rem 0' }} src={item.photo.thumb_url} alt='' />
          </Link>
          <h1 className="m-b20 m-t0"><Link to={AppRouter.blogItemLink(item)}>{ item.name }</Link></h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <div style={{ clear: 'both', height: '3rem' }} />
        </div>
      )
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Case Studies</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              { items }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state= { items: [ { name: 'Loading...' } ] }
  }

  componentWillMount () {
    fetch(`${config.apiUrl}/api/sites/view/wasya.co/reports.json`, {}).then(r => r.json()).then(_data => {
      // console.log('+++ data:', _data)
      this.setState({ items: _data })
    }).catch(_e => {
      console.log('+++ problem:', _e)
    })
  }

  render () {
    let items = []
    // These are entire entries. I want only titles. _vp_ 20180417
    /* this.state.items.map((item, idx) => {
      items.push(
        <div>
          <br />
          <h1 className="m-b20 m-t0">{ item.name }</h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <h2>{ item.subhead }</h2>
          <div dangerouslySetInnerHTML={{__html: item.description }} />
          <br /><br /><br />
        </div>)
    }) */
    this.state.items.map((item, idx) => {
      items.push(
        <div key={idx} >
          <br />
          <h1 className="m-b20 m-t0"><Link to={AppRouter.blogItemLink(item)}>{ item.name }</Link></h1>
          <div className="dez-separator bg-primary"></div>
          <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
          <br /><br /><br />
        </div>
      )
    })

    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Articles</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              { items }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

class BlogItem extends React.Component {
  constructor(props) {
    super(props)
    this.state= { item: { name: 'Loading...', photo: {} } }
  }

  componentWillMount () {
    fetch(`${config.apiUrl}/api/reports/view/${this.props.params.reportname}.json`, {}).then(r => r.json()).then(_data => {
      this.setState({ item: _data.report })
    }).catch(_e => {
      console.log('+++ cannot fetch articles:', _e)
    })
  }

  render () {
    // console.log('+++ +++ BlogItem:', this.props, this.state)
    let item = this.state.item
    return (
      <div>
        <div style={{ backgroundImage: `url(${blogImg})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">{item.name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Wasya Blog</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col md={9} sm={12} className="m-b30">
              <br />
              <h1 className="m-b20 m-t0">{ item.name }</h1>
              <div className="dez-separator bg-primary"></div>
              <div><em>{item.created_at ? `On ${item.created_at}` : null}</em></div>
              <img style={{ padding: '1rem' }} src={item.photo && item.photo.large_url} alt='' />
              <h2>{ item.subhead }</h2>
              <div dangerouslySetInnerHTML={{__html: item.description }} />
              <br /><br /><br />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default {
  CaseStudies,

  BlogIndex,
  BlogItem,
}