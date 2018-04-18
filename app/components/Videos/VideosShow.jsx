import React from 'react'
import { Grid, Row, Col,
         Nav
} from 'react-bootstrap'

class VideosShow extends React.Component {
  render () {
    // console.log('+++ +++ VideosShow:', this.props, this.state)

    return (
      <Grid>
        <Row>
          <Col sm={12} >
            <div style={{ textAlign: 'center', margin: 'auto' }}>
              { /* <h1>{ this.props.params.name }</h1> */ }
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.params.youtube_id}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <br /><br />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default VideosShow

      
