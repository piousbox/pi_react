import React from 'react'

import { Newsitem } from '../Newsitems'

class FeatureTags extends React.Component {
  render () {
    console.log('+++ +++ FeatureTags render:', this.props, this.state)

    let rendered = []
    this.props.tags && this.props.tags.map((tag, idx) => {
      rendered.push(
        <div key={idx} className="FeatureTag" >
          <h3 className="header" >{tag.name}</h3>
          <div className="tagContainer">
            <Newsitem newsitem={tag.newsitems[0]} />
          </div>
        </div>
      )
    })      
    
    return (<div>{rendered}</div>)
  }
}

export default FeatureTags
