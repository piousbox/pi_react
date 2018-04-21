import React from 'react'
import AdSense from 'react-adsense'

import config from 'config'

class AdSkyscraper extends React.Component {
  render () { 
    if (config.envName === 'development') {
      return (
        <div className="adContainer" style={{ width: '160px', height: '600px', color: 'gray', border: '1px solid gray' }} >AdSkyscraper</div>
      )
    }
    
    return (
      <div className="adContainer" style={{ width: '160px', height: '600px', color: 'white' }} >
        <AdSense.Google client="ca-pub-5283251584689528" slot="1776642375" style={{ width: 160, height: 600, float: 'left' }} format='' />
      </div>
    )
  }
}

export default AdSkyscraper
