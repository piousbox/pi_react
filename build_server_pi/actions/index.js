'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('../dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _constants = require('../constants');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _TgmApi = require('../components/App/TgmApi');

var _TgmApi2 = _interopRequireDefault(_TgmApi);

var _profileActions = require('./profileActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * tgm_react (of bjjc) appActions.js
 */

// import ReduxThunk from 'redux-thunk'

var setApiUrl = function setApiUrl() {
  return {
    type: _constants.SET_API_URL,
    apiUrl: _config2.default.apiUrl
  };
};

var setLocation = function setLocation(locationName) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/locations/' + locationName + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_LOCATION,
        location: _data
      });
    });
  };
};

var citiesIndex = function citiesIndex() {
  return function (dispatch, getState) {
    var state = getState();
    var url = _config2.default.apiUrl + "/api/cities.json";

    if (state.cities.length > 0) {
      dispatch({
        type: _constants.SET_CITIES_INDEX,
        cities: state.cities
      });
    } else {
      fetch(url).then(function (r) {
        return r.json();
      }).then(function (_data) {
        dispatch({
          type: _constants.SET_CITIES_INDEX,
          cities: _data
        });
      });
    }
  };
};

var citiesShow = function citiesShow(args) {
  return function (dispatch, getState) {
    var state = getState();
    var url = _config2.default.apiUrl + '/api/cities/view/' + args.cityname + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_CITY,
        cityname: args.cityname,
        city: _data.city,
        galleries: _data.galleries
      });
    });
  };
};

var galleriesIndex = function galleriesIndex(args) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/galleries.json?domain=' + _config2.default.domain;
    if (args.cityname) {
      url = url + '&cityname=' + args.cityname;
    }
    if (args.page) {
      url = url + '&galleries_page=' + args.page;
    }
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET.galleries,
        galleries: _data
      });
    });
  };
};

var galleriesShow = function galleriesShow(args) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/galleries/view/' + args.galleryname + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_GALLERY,
        galleryname: args.galleryname,
        gallery: _data.gallery
      });
    });
  };
};

/* const myGalleriesAction = (args) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_GALLERIES,
    })
  }
}
const myReportsAction = (args) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_REPORTS,
    })
  }
} */

var reportsShow = function reportsShow(args) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/reports/view/' + args.reportname + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_REPORT,
        report: _data.report
      });
    });
  };
};

var reportsIndex = function reportsIndex() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // console.log('+++ +++ reportsAction:', args)
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/reports.json?domain=' + _config2.default.domain;
    if (args.page) {
      url = url + '&reports_page=' + args.page;
    }
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_REPORTS,
        reports: _data
      });
    });
  };
};

var siteNewsitemsAction = function siteNewsitemsAction() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch, getState) {
    var state = getState();
    var url = _config2.default.apiUrl + '/api/sites/view/' + _config2.default.domain + '/newsitems/' + args.page + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_SITE_NEWSITEMS,
        newsitems: _data.newsitems
      });
    });
  };
};

var siteShow = function siteShow() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // console.log('+++ +++ siteAction', args)
  return function (dispatch, getState) {
    var state = getState();
    var url = _config2.default.apiUrl + '/api/sites/view/' + _config2.default.domain + '.json';
    if (state.site && state.site.domain) {
      // ;
    } else {
      fetch(url).then(function (r) {
        return r.json();
      }).then(function (_data) {
        dispatch({
          type: _constants.SET_SITE,
          site: _data.site
        });
      });
    }
  };
};

var tagAction = function tagAction(tagname) {
  return function (dispatch) {
    var url = _config2.default.apiUrl + '/api/tags/view/' + tagname + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({ type: _constants.SET.tag, tag: _data });
    });
  };
};

var tagsAction = function tagsAction() {
  return function (dispatch) {
    var url = _config2.default.apiUrl + '/api/sites/view/' + _config2.default.domain + '/tags.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({ type: _constants.SET.tags, tags: _data });
    });
  };
};

// v
var venuesShow = function venuesShow(args) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/venues/view/' + args.venuename + '.json';
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET_VENUE,
        venue: _data.venue
      });
    });
  };
};

var venuesIndexAction = function venuesIndexAction(arg) {
  // console.log('+++ venuesIndexAction:', arg)
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/venues.json?cityname=' + arg.cityname;
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.CONST.setVenues,
        venues: _data.venues
      });
    });
  };
};

var videoAction = function videoAction() {};

var videosAction = function videosAction(args) {
  return function (dispatch, getState) {
    var url = _config2.default.apiUrl + '/api/videos.json?a=b';
    if (args.page) {
      url = url + '&videos_page=' + args.page;
    }
    fetch(url).then(function (r) {
      return r.json();
    }).then(function (_data) {
      dispatch({
        type: _constants.SET.videos,
        videos: _data.videos
      });
    });
  };
};

exports.default = {
  citiesIndex: citiesIndex,
  citiesShow: citiesShow,

  galleriesIndex: galleriesIndex,
  galleriesShow: galleriesShow,

  loginAction: _profileActions.loginAction,
  logoutAction: _profileActions.logoutAction,
  profileAction: _profileActions.profileAction,

  // myReportsAction,
  // myGalleriesAction,

  reportsShow: reportsShow,
  reportsIndex: reportsIndex,

  setApiUrl: setApiUrl,
  setLocation: setLocation,
  siteShow: siteShow,
  siteNewsitemsAction: siteNewsitemsAction,

  tagAction: tagAction,
  tagsAction: tagsAction,

  venuesShow: venuesShow,
  venuesIndexAction: venuesIndexAction,
  videoAction: videoAction,
  videosAction: videosAction

};
//# sourceMappingURL=index.js.map