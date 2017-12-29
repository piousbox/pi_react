import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {
  Grid, Row, Col,
} from 'react-bootstrap'

import { videosAction } from '../../actions'
import { AppRouter } from '../App'
import VideoPreview from './VideoPreview'

class VideosIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(videosAction({ page: props.params.videos_page }))
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ videosIndex will receive props:", nextProps, this.props, this.state)
    if (nextProps.params.videos_page !== this.props.params.videos_page) {
      this.props.dispatch(videosAction({ page: nextProps.params.videos_page }))
    }
  }

  render () {
    let videos = []
    if (this.props.videos) {
      this.props.videos.map((video, index) => {
        videos.push(<VideoPreview key={index} video={video} />)
      })
    }

    let pages = [], page, active
    for (let i=1; i<=Math.ceil(this.props.site.n_videos/10); i++) { // @TODO: this 10 shouldn't be hardwired
      page = !!this.props.params.videos_page ? this.props.params.videos_page : 1
      active = page == i ? 'active' : ''
      pages.push(<Link key={i} className={`btn btn-default ${active}`} to={AppRouter.videosLink({videos_page:i})}>{i}</Link>)
    }
    let pagination = (<div className="pagination">{ pages }</div>)
    
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            { pagination }
            { videos }
            { pagination }
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    videos: state.videos,
    site: state.site,
  }
}


export default connect(mapState)(VideosIndex)
