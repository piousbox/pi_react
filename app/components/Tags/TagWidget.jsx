import React from 'react'
import { connect } from 'react-redux'
import { 
  Grid, Row, Col, Panel,
} from 'react-bootstrap'

import { tagAction } from '../../actions'

class TagWidget extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(tagAction(props.tagname))
  }

  componentWillReceiveProps(nextProps) {
  }
 
  render () {
    if (!this.props.tags[this.props.tagname]) return (null)
    // console.log('+++ TagWidget render:', this.props, this.state)

    return (
      <div className="TagWidget" >
        <Panel>
          <div className="box-header">{ this.props.tagname }</div>
          <Row>
            <Col md={6}>
              <h3>{ this.props.tags[this.props.tagname].reports[0].name }</h3>
            </Col>
            <Col md={6}>
              <h4>{ this.props.tags[this.props.tagname].reports[1].name }</h4>
              <h4>{ this.props.tags[this.props.tagname].reports[2].name }</h4>
              <h4>{ this.props.tags[this.props.tagname].reports[3].name }</h4>
            </Col>
          </Row>
        </Panel>
      </div>)
  }
}

const mapState = (state, ownProps) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapState)(TagWidget)
