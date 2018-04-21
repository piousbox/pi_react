import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import { tagsAction } from '../../actions'
import { AppRouter } from '../App'

class TagsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(tagsAction())
  }

  render () {
    // console.log('+++ +++ TagsIndex:', this.props, this.state)

    let tags = []
    this.props.tagsList.map((tag, index) => {
      tags.push(<li key={index} ><Link to={AppRouter.tagLink(tag.name_seo)}>{tag.name}</Link></li>)
    })

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            {this.props.children}
          </Col>
          <Col xs={12} md={6}>
            <h5 style={{ textAlign: 'center' }} >Tags</h5>
            <ul>{ tags }</ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

TagsIndex.propTypes = {
  tags: PropTypes.object,
  tagsList: PropTypes.array,
}

const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.tags,
    tagsList: state.tagsList,
  }
}

export default connect(mapStateToProps)(TagsIndex)
