
// import './favicon.ico'
// import './index.html'
// import 'babel-core/polyfill'
// import 'normalize.css/normalize.css'

import { Provider } from 'react-redux'
import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

import App from './components/App/App'
// import './scss/app.scss'
import store from './stores'
import reducer from './reducers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
