import React from 'react'

import Clearfix    from './Clearfix'
import TgmLink     from './TgmLink'
import AppRouter   from './AppRouter'

const docTitle = (g) => {
  return `${g} - The Moby Travel Guide`
}

class Center extends React.Component {
  render () {
    return (<div style={{ clear: 'both' }} />)
  }
}

/**
 * Meta is a separate component
 **/
export default {
  Center,
  Clearfix,

  docTitle,

  TgmLink,
  AppRouter,
  
}
