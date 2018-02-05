import React from 'react'

class AdSkyscraper extends React.Component {
  render () {
    return (
      <div className="adContainer" style={{ width: '160px', height: '600px', background: 'gray', color: 'white' }} >
        <AdSense.Google client="ca-pub-5283251584689528" slot="1776642375" style={{ width: '160px', height: "600px" }} />
      </div>
    )
  }
}

export default AdSkyscraper
