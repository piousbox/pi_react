import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {
  Grid, Row, Col,
} from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'
import Center from '../Center'

import { reportsIndex } from '../../actions'
import { AppRouter } from '../App'
import Leaderboard from '../App/Leaderboard'
import LargeSquare from '../App/LargeSquare'
import ReportsIndexItem from './ReportsIndexItem'


class ReportsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(reportsIndex({ page: props.params.reports_page }))
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ reportsIndex will receive props:", nextProps, this.props, this.state)
    if (nextProps.params.reports_page !== this.props.params.reports_page) {
      this.props.dispatch(reportsIndex({ page: nextProps.params.reports_page }))
    }
  }

  render () {
    console.log('+++ +++ render ReportsIndex:', this.props, this.state)
    if (this.props.reports.length === 0) { return (null) }

    let reports = []
    this.props.reports.forEach((n, idx) => {
      reports.push(<ReportsIndexItem key={idx} report={n} />)
    })
    
    let pages = [], page, active
    for (let i=1; i<=Math.ceil(this.props.site.n_reports/10); i++) { // @TODO: this 10 shouldn't be hardwired
      page = !!this.props.params.reports_page ? this.props.params.reports_page : 1
      active = page == i ? 'active' : ''
      pages.push(<Link key={i} className={`btn btn-default ${active}`} to={AppRouter.reportsLink({reports_page:i})}>{i}</Link>)
    }
    let pagination = <div className="pagination">{ pages }</div>

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} >
                 { reports }
                 { pagination }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

ReportsIndex.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    reports: state.reports,
    site: state.site,
  }
}

export default connect(mapStateToProps)(ReportsIndex)

