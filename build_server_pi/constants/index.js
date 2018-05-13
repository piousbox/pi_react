'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = exports.SET = exports.CONST = exports.SET_VENUES = exports.SET_VENUE = exports.SET_TGM2_HOME = exports.SET_SITE_NEWSITEMS = exports.SET_SITE = exports.SET_REPORTS = exports.SET_REPORT = exports.SET_PROFILE = exports.SET_MY_REPORTS = exports.SET_MY_GALLERIES = exports.SET_LOCATION = exports.SET_GALLERIES = exports.SET_GALLERY = exports.SET_CITY = exports.SET_CITIES_SHOW = exports.SET_CITIES = exports.SET_CITIES_INDEX = exports.ITEMS_UPDATED = exports.ITEMS_GET_ERROR = exports.ITEMS_GET_SUCCESS = exports.DO_LOGOUT = exports.DEBUG = exports.CITIES_INDEX_UPDATED = exports.APP_TITLE = undefined;

var _package = require('../../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_TITLE = exports.APP_TITLE = _package2.default.name;

var CITIES_INDEX_UPDATED = exports.CITIES_INDEX_UPDATED = 'cities index updated';

var DEBUG = exports.DEBUG = process.env.NODE_ENV !== 'production';
var DO_LOGOUT = exports.DO_LOGOUT = 'do logout';

var ITEMS_GET_SUCCESS = exports.ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
var ITEMS_GET_ERROR = exports.ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
var ITEMS_UPDATED = exports.ITEMS_UPDATED = 'ITEMS_UPDATED';

var SET_CITIES_INDEX = exports.SET_CITIES_INDEX = 'set cities index';
var SET_CITIES = exports.SET_CITIES = 'set cities';
var SET_CITIES_SHOW = exports.SET_CITIES_SHOW = 'set cities show';
var SET_CITY = exports.SET_CITY = 'set city';

var SET_GALLERY = exports.SET_GALLERY = 'set gallery';
var SET_GALLERIES = exports.SET_GALLERIES = 'set galleries';

var SET_LOCATION = exports.SET_LOCATION = 'set location';

var SET_MY_GALLERIES = exports.SET_MY_GALLERIES = 'set my galleries';
var SET_MY_REPORTS = exports.SET_MY_REPORTS = 'set my reports';

var SET_PROFILE = exports.SET_PROFILE = 'set profile';

var SET_REPORT = exports.SET_REPORT = 'set report';
var SET_REPORTS = exports.SET_REPORTS = 'set reports';

var SET_SITE = exports.SET_SITE = 'set site';
var SET_SITE_NEWSITEMS = exports.SET_SITE_NEWSITEMS = 'set site newsitems';

var SET_TGM2_HOME = exports.SET_TGM2_HOME = 'set tgm2 home';

var SET_VENUE = exports.SET_VENUE = 'set venue';
var SET_VENUES = exports.SET_VENUES = 'set venues';

var CONST = exports.CONST = {
  setVenues: 'set venues',
  Tag: 'm-const-tag' // used in Meta
};

var SET = exports.SET = {
  galleries: 'set-galleries-099',

  tags: 'set-tags-1q',
  tag: 'set-tag-5',

  video: 'set-video',
  videos: 'set-videos'

};

var T = exports.T = { // translate
  report: 'report'
};
//# sourceMappingURL=index.js.map