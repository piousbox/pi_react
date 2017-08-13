import React from 'react'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Link }    from 'react-router'

import TgmRouter from './TgmRouter'

class Features extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    // console.log('+++ +++ features props:', this.props)
    // console.log('+++ +++ features state:', this.state)

    const perRow = 4

    let features = []
    if (this.props.features) {
      this.props.features.forEach((f, idx) => {
        if (f.reportname) {
          features.push(
            <Col key={idx} xs={12/perRow} >
              <Panel>
                <h3><Link to={TgmRouter.reportLink(f.reportname)}  >{ f.name }</Link></h3>
                <img src={f.photo_url} alt={f.name} />
                <br />
                { f.subhead }
              </Panel>
            </Col>)
        } else if (f.galleryname) {
          features.push(
            <Col key={idx} xs={12/perRow} >
              <Panel>
                <h3><Link to={TgmRouter.galleryPhotoLink(f.galleryname)}  >{ f.name }</Link></h3>
                <img src={f.photo_url} alt={f.name} />
                <br />
                { f.subhead }
              </Panel>
            </Col>)
        }
        if ((idx+1) % perRow === 0) {
          features.push(<div style={{ clear: 'both' }} />)
        }
      })
    }

    return (<Row>{ features }</Row>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(Features)

      
      