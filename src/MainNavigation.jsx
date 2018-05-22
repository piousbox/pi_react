import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Navbar, Nav, NavItem,
  Grid, Row, Col,
} from 'react-bootstrap'

import config from 'config'
import AppRouter from './AppRouter'

import { Tag, Site } from '../../piousbox-api/src/index'
// import { Tag, Site } from 'piousbox-api'

class MainNavigation extends React.Component {
  constructor(props) {
    super(props)
    const site = new Site(config)
    this.state = { mainMenu: [] }

    let mainMenu = []
    site.all().then(_data => {
      _data.feature_tags.map((tag, idx) => {
        mainMenu.push(<div key={idx} className="item"><Link to={AppRouter.tagLink(tag)}>{tag.name}</Link></div>)
      })
      this.setState({ mainMenu: mainMenu })
    })

  }
  componentWillReceiveProps(nextProps) {
    console.log('+++ MainNavigation reveices props:', nextProps)
  }
  render () {
    // console.log('+++ MainNavigation render:', this.props, this.state)

    return (
      <div>

        <div className="main-header">
          <div className="search" >search, social</div>
          <div className="clearfix" />
          <Grid>
            <Row >
              <Col xs={12}>
                <div className="title" >
                  <Link to="/"><h1>Piousbox</h1></Link>
                </div>
                <div className="subtitle" >subtitle</div>
              </Col>
            </Row>
          </Grid>
          <div className="divider-large" />
          <Grid>
            <Row>
              <Col xs={12}>
                <div className="main-menu" >{ this.state.mainMenu }</div>
              </Col>
            </Row>
          </Grid>
          <div className="divider-small" />
          <Grid>
            <Row>
              <Col xs={12}>
                <div className="second-menu" >
                  <div className='item'><Link to="/reports">Reports</Link></div>
                  <div className='item'><Link to="/galleries">Galleries</Link></div>
                  <div className='item'><Link to="/videos">Videos</Link></div>
                  <div className='item'><Link to="/events">Events</Link></div>
                  <div className='item'><Link to="/people">People</Link></div>
                </div>
              </Col>
            </Row>
          </Grid>
          <div className="divider-small" />
        </div>

        <Grid>
          <Row>
            <Col xs={12}>
              { this.props.children }
            </Col>
          </Row>
        </Grid>

        <div className="main-footer">
          <Grid>
            <Row>
              <Col sm={12}>
                <div className="center">Copyright &copy; 2018 Wasya co</div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default MainNavigation

