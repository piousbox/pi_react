import React from 'react'

import { CONST, T } from '../../constants'

class Meta extends React.Component {
  render () {
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

    items.push(<span key="itemType" className={CONST.Tag} >{T.report}</span>)

    return (
      <div className="Meta" >
        { items }
      </div>
    )
  }
}

export default Meta
