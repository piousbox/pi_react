
import { createStore, applyMiddleware } from 'redux'
import thunk   from 'redux-thunk'
import reducer from '../reducers'

const preloadedState = { preloaded: 'sta1a',
  site: { hereBe: 'si2asdf' },
  tags: {
    travel: { name: 'Travel',
      reports: [ 
        { name: 'Report name 1' },
        { name: 'Report name 2' },
        { name: 'Report name 3' },
        { name: 'Report name 4' },
        { name: 'Report name 5' },
        { name: 'Report name 6' },
        { name: 'Report name 7' },
      ]
    },
    // 'human-resources': { name: 'Human Resources' }
  }
}

console.log('+++ pre state:', preloadedState)

let store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )

export default store
