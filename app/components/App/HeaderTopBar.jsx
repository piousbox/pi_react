import React from 'react'
import { Grid, Row, Col, } from 'react-bootstrap'

import config from 'config'
import fb from './images/social/facebook.png'
import ig from './images/social/instagram.png'

class HeaderTopBar extends React.Component {
  render () {
    return (
      <div className="grayBg" >
        <Grid>
          <Row>
            <Col xs={12} style={{ marginTop: '5px' }} >
              <a className="floatRight" target="_blank" href="http://facebook.com/Piousbox" title="facebook"><img src={fb} alt='facebook' style={{ height: '50px' }} /></a>
              <a className="floatRight" target="_blank" href="http://facebook.com/Piousbox" title="facebook"><img src={ig} alt='instagram' style={{ height: '50px' }} /></a>
				      <form className="floatRight" style={{ marginRight: '1em' }} >
					      <input readOnly={true} type="text" name="q" placeholder="Search..." value="Search..." style={{ lineHeight: '30px' }} />
                <i className="fa fa-search fa-1x" style={{ marginLeft: '-30px', padding: '4px' }} />
				      </form>
              <div className="clearfix" />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default HeaderTopBar
