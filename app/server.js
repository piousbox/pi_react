import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'

import store from './stores'

import { renderToString } from 'react-dom/server'
import qs from 'qs'
import reactdom from 'react-dom'
import reducer from './reducers'
import StaticRouter from 'react-router-dom/staticrouter'

import MainNavigation from './components/App/MainNavigation'
import Home from './components/App/Home'



// import ServerApp from './serverApp'
class ServerApp1 extends React.Component {
  render () {
    // console.log('+++ ServerApp1:', this.props, this.state)
    return (
      <Provider store={store}>
        <MainNavigation site={{ a: 'b' }} >
          <Home />
        </MainNavigation>
      </Provider>
    )
  }
}





class ServerApp2 extends React.Component {
  render () {
    console.log('+++ ServerApp2:', this.props, this.state)
    return (
      <div><h2>AppServer2</h2></div>
    )
  }
}

const app = Express()
const port = 3001

app.use('/static', Express.static('static'))

function handleRender(req, res) {
  const params=qs.parse(req.query)

  const counter = parseInt(params.counter, 10) || 0
  let preloadedState = { counter }


  const store = createStore(counterApp)
  console.log('+++ store:', store)

  const context = { some: 'context' }
  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context} >
      <Provider store={store} >
        <ServerApp1 what={'vers'} />
      </Provider>
    </StaticRouter>
  )
  console.log('+++ +++ html:', html)



  const finalState = store.getState()
  res.send(renderFullPage(html, finalState))
}
app.use(handleRender)

// const preloadedState = window.__PRELOADED_STATE__
// delete window.__PRELOADED_STATE__


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

