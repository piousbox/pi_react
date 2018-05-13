'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _constants = require('../constants');

var _citiesReducer = require('./citiesReducer');

var _galleriesReducer = require('./galleriesReducer');

var _reportsReducer = require('./reportsReducer');

var _sitesReducer = require('./sitesReducer');

var _venuesReducer = require('./venuesReducer');

var _TgmApi = require('../components/App/TgmApi');

var _TgmApi2 = _interopRequireDefault(_TgmApi);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleries = function galleries() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.galleries:
      console.log('+++ galleries reducer:', action);
      return action.galleries;
    default:
      return state;
  }
};

function locationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_LOCATION:
      /* fetch(TgmApi.location( action.locationname )).then(r => r.json()).then(_data => {
        console.log("+++ +++ locationReducer data is:", _data)
        return _data.location
      }) */
      return action.location;
    default:
      return state;
  }
}

function myReportsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  // @TODO
  return state;
}

function myGalleriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  // @TODO
  return state;
}

function newsitemsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_SITE_NEWSITEMS:
      return action.newsitems;
    default:
      return state;
  }
}

function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_PROFILE:
      return action.fbAccount;

    default:
      return state;
  }
}

var tag = function tag() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.tag:
      return action.tag;
    default:
      return state;
  }
};

/**
 * this used to be a set, now its a list. _vp_ 20180418
 * this must be a set for all tags (major, minor) and there's the list in tagsList. _vp_ 20180420
 */
var tags = function tags() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.tag:

      console.log('+++ set tag:', action);

      var tmp = Object.assign({}, state);
      tmp[action.tag.tagname] = action.tag;
      return tmp;
    case _constants.SET.tags:
      return action.tags;
    default:
      return state;
  }
};
var tagsList = function tagsList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.tag:
      var tmp = [];
      var flag = false;
      state.map(function (i) {
        if (i.tagname === action.tag.tagname) {
          tmp.push(action.tag);
          flag = true;
        } else {
          tmp.push(i);
        }
      });
      if (!flag) {
        tmp.push(action.tag);
      }
      return tmp;
    case _constants.SET.tags:
      return action.tags;
    default:
      return state;
  }
};

// v
var videos = function videos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.videos:
      return action.videos;
    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  cities: _citiesReducer.citiesIndexReducer,
  city: _citiesReducer.citiesShowReducer,

  gallery: _galleriesReducer.galleriesShowReducer,
  galleries: galleries,

  location: locationReducer,

  myReports: myReportsReducer,
  myGalleries: myGalleriesReducer,

  newsitems: newsitemsReducer,

  profile: profileReducer,

  report: _reportsReducer.reportsShowReducer,
  reports: _reportsReducer.reportsReducer,

  site: _sitesReducer.sitesReducer,

  tag: tag, // I think this is not used, unless i'm looking at /en/tags/show/<tag>
  tags: tags, // this is the sophisto list
  tagsList: tagsList, // this is the simple list

  venue: _venuesReducer.venueReducer,
  venues: _venuesReducer.venuesReducer,
  videos: videos
});
//# sourceMappingURL=index.js.map