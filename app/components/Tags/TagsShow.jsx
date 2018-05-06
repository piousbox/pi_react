import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { tagAction } from '../../actions'

import { Newsitems } from '../Newsitems'
import { VideosIndex } from '../Videos'
import { AdLargeSquare } from '../Ads'

class TagShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.dispatch(tagAction(props.params.tagname))

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('+++ tagShow will receive props')
    if (nextProps.params.tagname !== this.props.params.tagname) {
      this.props.dispatch(tagAction(nextProps.params.tagname))
    }
  }

  componentWillUpdate () {
    // console.log('+++ tagShow will update')
  }

  render () {
    // console.log('+++ tagShow:', this.props, this.state)

    return (
      <Row>
        <Col xs={12} md={6} >
          <h5 style={{ textAlign: 'center' }}>Tag {this.props.tag.name}</h5>
          <Newsitems newsitems={this.props.tag.newsitems} params={this.props.params} />
        </Col>
        <Col xs={12} md={6} >
          <AdLargeSquare />
          <AdLargeSquare />
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
