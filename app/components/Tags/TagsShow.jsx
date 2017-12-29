import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { tagAction } from '../../actions'

import { VideosIndex } from '../Videos'

class TagShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.dispatch(tagAction(props.params.tagname))

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ tagShow will receive props')
    if (nextProps.params.tagname !== this.props.params.tagname) {
      this.props.dispatch(tagAction(nextProps.params.tagname))
    }
  }

  componentWillUpdate () {
    // console.log('+++ tagShow will update')
  }

  render () {
    console.log('+++ tagShow render:', this.props, this.state)

    return (
      <Row>
        <Col xs={12}>
          { this.props.tag && <h5 style={{ textAlign: 'center' }}>Tag {this.props.tag.name}</h5> }
          { this.props.tag && <VideosIndex videos={this.props.tag.videos} params={this.props.params} /> }
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tag: state.tag,
  }
}

export default connect(mapStateToProps)(TagShow)
