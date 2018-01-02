import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col,
         Panel,
 } from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'
import Center from '../Center'
import { galleriesIndex } from '../../actions'
import GalleriesIndexItem from './GalleriesIndexItem'
import { AppRouter } from '../App'

class GalleriesIndex extends React.Component {
  constructor(props) {
    super(props)
    // console.log('+++ +++ GalleriesIndex constructor:', props)

    props.dispatch(galleriesIndex({ page: this.props.params.galleries_page }))

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log("+++ +++ galleriesIndex will receive props:", nextProps, this.props, this.state)
    if (nextProps.params.galleries_page !== this.props.params.galleries_page) {
      this.props.dispatch(galleriesIndex({ page: nextProps.params.galleries_page }))
    }
  }

  render () {
    // console.log('+++ +++ GalleriesIndex render:', this.props, this.state)
    if (!this.props.galleries || this.props.galleries.length === 0) { return (null) }

    let galleries = []
    this.props.galleries.forEach((n, idx) => {
      galleries.push(<GalleriesIndexItem key={idx} gallery={n} />)
    })
    
    let pages = [], page, active
    for (let i=1; i<=Math.ceil(this.props.site.n_galleries/10); i++) { // @TODO: this 10 shouldn't be hardwired
      page = !!this.props.params.galleries_page ? this.props.params.galleries_page : 1
      active = page == i ? 'active' : ''
      pages.push(<Link key={i} className={`btn btn-default ${active}`} to={AppRouter.galleriesLink({galleries_page:i})}>{i}</Link>)
    }
    let pagination = <div className="pagination">{ pages }</div>

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            { pagination }
            { galleries }
            { pagination }
          </Col>
        </Row>
      </Grid>
    )
  }
}

GalleriesIndex.propTypes = {
  params: PropTypes.object.isRequired,
  galleries: PropTypes.array,
  site: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.site,
    galleries: state.galleries,
  }
}

export default connect(mapStateToProps)(GalleriesIndex)

