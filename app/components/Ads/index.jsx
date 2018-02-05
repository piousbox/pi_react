import React from 'react'

import AdBanner      from './AdBanner'
import AdLargeSquare from './AdLargeSquare'
import AdSkyscraper  from './AdSkyscraper'

class AdCot extends React.Component {
  render () {
    return (
      <div className="AdMySmallSquare">
        <h4>
          <a href="https://colombia-tailors.com">colombia-tailors.com</a>
        </h4>
      </div>)
  }
}

class AdSkim extends React.Component {
  render () {
    return (
      <div className="AdMySmallSquare">
        <h4>
          <a href="https://skim.law">skim.law</a>
        </h4>
      </div>)
  }
}

class AdTgm extends React.Component {
  render () {
    return (
      <div className="AdMySmallSquare">
        <h4>
          <a href="https://travel-guide.mobi">travel-guide.mobi</a>
        </h4>
      </div>)
  }
}
class AdWasya extends React.Component {
  render () {
    return (
      <div className="AdMySmallSquare">
        <h4>
          <a href="https://wasya.co">wasya.co</a>
        </h4>
      </div>)
  }
}

class AdWdz extends React.Component {
  render () {
    return (
      <div className="AdMySmallSquare">
        <h4>
          <a href="https://webdevzine.com">webdevzine.com</a>
        </h4>
      </div>)
  }
}

export default {
  AdBanner,
  AdCot,
  AdLargeSquare,
  AdSkim,
  AdSkyscraper,
  AdTgm,
  AdWasya,
  AdWdz
}

