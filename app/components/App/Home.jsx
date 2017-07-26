import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Panel,
         Navbar, Nav,
} from 'react-bootstrap'

import styles from './_App.scss'
import bg from './images/bg/flower_1.jpg'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="bgWhite">

          <Navbar fixedTopTrash >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Piousbox</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>

          { /* <br /><br /><br /> */ }
          
          <Grid>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://wasya.co">Wasya.co</a>
                  </div>
                </Panel>
              </Col>

              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://bjjcollective.com">Bjjcollective.com</a>
                  </div>
                </Panel>
              </Col>

              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://travel-guide.mobi">Travel-guide.mobi</a>
                  </div>
                </Panel>
              </Col>


              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://piousbox.github.io">Piousbox Resume</a>
                  </div>
                </Panel>
              </Col>


              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://github.com/piousbox">Piousbox Github</a>
                  </div>
                </Panel>
              </Col>


              <Col sm={12} md={6} lg={4}>
                <Panel>
                  <div className="nineItem">
                    <a href="http://blog.piousbox.com">Piousbox Blog</a>
                  </div>
                </Panel>
              </Col>

            </Row>
          </Grid>
        </div>

        <div className="mainFooter">
          <Grid>
            <Row>
              <Col sm={6} smOffset={6}>
                <br />
                ~__^
                <br /><br />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Home
