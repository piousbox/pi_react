// import './index.html'
// import 'babel-core/polyfill'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'

import App from './components/App/App'
import store from './stores'
import reducer from './reducers'

// this is actually client, not server
/* hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
) */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
