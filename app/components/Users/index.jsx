import React from 'react'
import { Link } from 'react-router'

import { AppRouter } from '../App'

class PeopleWidget extends React.Component {
  render () {
    return (<div>people widget</div>)
  }
}

class PersonWidget extends React.Component {
  render () {
    return (
      <div className="PersonWidget" >
        <h5 className="box-header">Profile Highlight</h5>
        <Link to={AppRouter.profileLink(this.props.username)}>{this.props.username}</Link>
      </div>)
  }
}

class UsersShow extends React.Component {
  render () {
    return (
      <div>UsersShow</div>
    )
  }
}

export default {
  PeopleWidget,
  PersonWidget,

  UsersShow,
}
