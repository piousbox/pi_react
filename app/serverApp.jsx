import './favicon.ico'
import './index.html'
import 'babel-core/polyfill'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'

import App from './components/App/App'
import './scss/app.scss'
import store from './stores'
import reducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
