import React from 'react'
import { Link } from 'react-router'

import { CONST, T } from '../../constants'
import { AppRouter } from '../App'

class Meta extends React.Component {
  render () {
    console.log('+++ Meta:', this.props, this.state)
    if (Object.keys(this.props.item).length==0) { return (<span />) }

    let items = []

    if (this.props.item && this.props.item.tag) {
      items.push(<span key='tag' className="tag" >{this.props.item.tag} &nbsp; </span>)
    }
    if (this.props.item && this.props.item.tag_name) {
      items.push(<span key='tag' className="tag" >{this.props.item.tag_name} &nbsp; </span>)
    }

    if (this.props.item.city_name) {
      items.push(<span key='city' className="city" >{this.props.item.city_name} &nbsp; </span>)
    }

    // items.push(<span key="itemType" className={CONST.Tag} >{T.report}</span>)

    return (
      <div className="Meta">
        <span className="item-type">{this.props.item.item_type}</span>
        {false && this.props.item.cityname ? <span>&nbsp;in city <Link to={AppRouter.cityLink(this.props.item.cityname)} >{this.props.item.cityname}</Link></span> : null}
        {this.props.item.tagname ? <span>&nbsp;tag <Link to={AppRouter.tagLink(this.props.item.tagname)} >{this.props.item.tagname}</Link></span> : null}
        &nbsp;on <u>{this.props.item.created_at.substr(0,10)}</u>
        &nbsp;by <u>{this.props.item.username}</u>
      </div>
    )
  }
}

export default Meta

