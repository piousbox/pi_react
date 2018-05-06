
import { combineReducers } from 'redux'

import {
  DO_LOGOUT,

  SET,
  SET_LOCATION,
  SET_PROFILE,
  SET_SITE_NEWSITEMS,

} from '../constants'

import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer, reportsReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venueReducer, venuesReducer,
} from './venuesReducer'

import TgmApi from '../components/App/TgmApi'

import config from 'config'

const galleries = (state=[], action) => {
  switch (action.type) {
    case SET.galleries:
      console.log('+++ galleries reducer:', action)
      return action.galleries
    default:
      return state
  }
}

function locationReducer (state = {}, action) {
  switch (action.type) {
    case SET_LOCATION:
      /* fetch(TgmApi.location( action.locationname )).then(r => r.json()).then(_data => {
        console.log("+++ +++ locationReducer data is:", _data)
        return _data.location
      }) */
      return action.location
    default:
      return state
  }
}

function myReportsReducer (state = {}, action) {
  // @TODO
  return state
}

function myGalleriesReducer (state = {}, action) {
  // @TODO
  return state
}

function newsitemsReducer(state = {}, action) {
  switch (action.type) {
    case SET_SITE_NEWSITEMS:
      return action.newsitems
    default:
      return state
  }
}

function profileReducer (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.fbAccount

    default:
      return state
  }
}

const tag = (state={}, action) => {
  switch (action.type) {
    case SET.tag:
      return action.tag
    default:
      return state
  }
}

/**
 * this used to be a set, now its a list. _vp_ 20180418
 * this must be a set for all tags (major, minor) and there's the list in tagsList. _vp_ 20180420
 */
const tags = (state={}, action) => {
  switch (action.type) {
    case SET.tag:
    
      console.log('+++ set tag:', action)

      let tmp = Object.assign({}, state)
      tmp[action.tag.tagname] = action.tag
      return tmp
    case SET.tags:
      return action.tags
    default:
      return state
  }
}
const tagsList = (state=[], action) => {
  switch (action.type) {
    case SET.tag:
      let tmp = []
      let flag = false
      state.map((i) => {
        if (i.tagname === action.tag.tagname) {
          tmp.push(action.tag)
          flag = true
        } else {
          tmp.push(i)
        }
      })
      if (!flag) {
        tmp.push(action.tag)
      }
      return tmp
    case SET.tags:
      return action.tags
    default:
      return state
  }
}

// v
const videos = (state=[], action) => {
  switch (action.type) {
      case SET.videos:
      return action.videos
    default:
      return state
  }
}

export default combineReducers({
  cities: citiesIndexReducer,
  city: citiesShowReducer,

  gallery: galleriesShowReducer,
  galleries,

  location: locationReducer,

  myReports: myReportsReducer,
  myGalleries: myGalleriesReducer,

  newsitems: newsitemsReducer,

  profile: profileReducer,

  report: reportsShowReducer,
  reports: reportsReducer,

  site: sitesReducer,

  tag,      // I think this is not used, unless i'm looking at /en/tags/show/<tag>
  tags,     // this is the sophisto list
  tagsList, // this is the simple list

  venue: venueReducer,
  venues: venuesReducer,
  videos,
})
