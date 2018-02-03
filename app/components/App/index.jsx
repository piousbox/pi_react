import React from 'react'

import Clearfix    from './Clearfix'
import Meta        from './Meta'
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

export default {
  Center,
  Clearfix,

  docTitle,

  Meta,

  TgmLink,
  AppRouter,
  
}
