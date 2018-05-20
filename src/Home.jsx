import React from 'react'
import { 
  Grid, Row, Col,
  Button, 
} from 'react-bootstrap'

import config from 'config'
import { Newsitem, Newsitems } from '../../newsitems/src/index'
import { Features, Feature } from '../../pi-features/src/index'
import { Tag, Site } from '../../piousbox-api/src/index'
// import { Tag, Site } from 'piousbox-api'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    const tag = new Tag(config)
    const site = new Site(config)
    tag.get('major').then(_data => {
      console.log('+++ got major data:', _data)
      this.setState({ major: _data })
    })
    /* tag.get('minor').then(_data => {
      this.setState({ minor: _data })
    })
    site.features().then(_data => {
      this.setState({ features: _data })
    }) */
  }

  render () {
    console.log('+++ Home:', this.props, this.state)
    return (
      <div>
        <Row>
          <Col sm={12} md={5} >
            <Newsitems items={this.state.major} />
          </Col>
          <Col sm={12} md={5} >
            { /* <Features items={this.state.features} /> */ }
          </Col>
          <Col sm={12} md={2} >
            <h1>WDZ</h1>
            <div>skyscraper 1</div>
            <div>skyscraper 2</div>
          </Col>
        </Row>
      </div>)
  }
}

export default Home

