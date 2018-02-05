import React from 'react'
import AdSense from 'react-adsense'

class AdLargeSquare extends React.Component {
  render () {
    return (
      <div className="adContainer" style={{ width: '336px', height: '280px', color: 'white' }} >
        <AdSense.Google client="ca-pub-5283251584689528" slot="8263704264" style={{ width: 336, height: 280, float: 'left' }} format='' />
      </div>
    )
  }
}

export default AdLargeSquare
