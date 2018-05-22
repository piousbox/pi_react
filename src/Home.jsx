import React from 'react'
import { 
  Grid, Row, Col,
  Button, 
} from 'react-bootstrap'

import config from 'config'
import AppRouter from './AppRouter'
import { AdLargeSquare, AdSkyscraper } from './Ads'

import { Tag, Site } from '../../piousbox-api/src/index'
// import { Tag, Site } from 'piousbox-api'

import { Features, Feature, Newsitems, TagFeature } from '../../piousbox-render/src/index'
// import { Features } from 'piousbox-render'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { features: [] }

    const tag  = new Tag(config)
    const site = new Site(config)

    tag.get('major', { newsitems_per: 5 }).then(_data => {
      this.setState({ major: _data.newsitems })
    })
    tag.get('minor', { newsitems_per: 5 }).then(_data => {
      this.setState({ minor: _data.newsitems })
    })

    tag.get('salsa', { newsitems_per: 1 }).then(_data => {
      this.setState({ salsa: _data })
    })
    tag.get('human-resources', { newsitems_per: 1 }).then(_data => {
      this.setState({ hr: _data })
    })

    let features = []
    site.all().then(_data => {
      _data.features.map((f, idx) => {
        features.push(<div key={idx} className="item"><Feature item={f} /></div>)
      })
      this.setState({ features: features })
    })
  }


  render () {
    // console.log('+++ Home:', this.props, this.state)

    return (
      <div>
        { /* <Row><div className="features">{ this.state.features }</div></Row> */ }
        <Row>
          <Col sm={12} md={5} >
            <TagFeature router={AppRouter} item={this.state.hr} />
            <Newsitems items={this.state.major} />
          </Col>
          <Col sm={12} md={5} >
            <AdLargeSquare /> 
            { /* <TagFeature item={this.state.salsa} /> */ }
            <Newsitems items={this.state.minor} />
          </Col>
          <Col sm={12} md={2} className="hide-on-small">
            <div><AdSkyscraper /></div>
            <div><AdSkyscraper /></div>
            <h1>WDZ</h1>
            <h1>TGM</h1>
            <h1>SKIM.LAW</h1>
          </Col>
        </Row>
      </div>)
  }
}

export default Home

