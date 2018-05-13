import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './app/reducers'
import App from './app/components/App/App'
import { renderToString } from 'react-dom/server'
import qs from 'qs'

import './favicon.ico'
// import 'babel-core/polyfill'
// import 'normalize.css/normalize.css'
import ReactDOM from 'react-dom'

// import './app/scss/app.scss'
import store from './app/stores'
import reducer from './app/reducers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


const app = Express()
const port = 3001

app.use('/static', Express.static('static'))

function handleRender(req, res) {
  const params=qs.parse(req.query)

  const counter = parseInt(params.counter, 10) || 0
  let preloadedState = { counter }

  const store = createStore(counterApp)
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const finalState = store.getState()
  res.send(renderFullPage(html, finalState))
}
app.use(handleRender)

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port)

