
import { combineReducers } from 'redux'

/* import {
  DO_LOGOUT,

  SET_API_URL,
  SET_PROFILE,
} from '../constants/AppConstants'

function apiUrlReducer(state = 'no-state', action) {
  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venuesShowReducer } from './venuesReducer'

import TgmApi from '../components/App/TgmApi'
*/

import config from 'config'

function apiUrlReducer(state = {}, action) {
  return state
}

export default combineReducers({
  apiUrl: apiUrlReducer
})
