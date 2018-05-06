import config from 'config'

let AppRouter = {
  rootPath: '/',
  rootLink: () => { return '/' },

  galleriesPath: '/:lang(en|ru|pt|es)/galleries',
  galleriesPagesPath: '/:lang(en|ru|pt|es)/galleries/page/:galleries_page',
  galleriesLink: (args={}) => {
    if (args.galleries_page) {
      return `/en/galleries/page/${args.galleries_page}`
    } else {
      return '/en/galleries'
    }
  },
  galleryPath: '/:lang(en|ru|pt|es)/galleries/show/:galleryname',
  galleryLink: (g) => { 
    if (typeof g === 'string') {
      return `/en/galleries/show/${g}`
    } else if (typeof g === 'object') {
      return `/en/galleries/show/${g.galleryname}`
    }
  },
  galleryPhotoPath: '/:lang(en|ru|pt|es)/galleries/show/:galleryname/:photoIdx',
  galleryPhotoLink: (g, i) => {
    if ('string' === typeof g) {
      return `/en/galleries/show/${g}/${i||0}`
    } else if ('object' === typeof g) {
      return `/en/galleries/show/${g.galleryname}/${g.photoIdx||0}`
    }
  },

  newsPath: `/en/sites/show/:domain/newsitems/:newsitems_page`,
  newsLink: (g) => {
    if (undefined === g) { g = 1 }
    return `/en/sites/show/${config.domain}/newsitems/${g}`
  },

  peoplePath: '/en/people',
  peopleLink: () => { return '/en/people' },
  profilePath: '/en/people/show/:username',
  profileLink: (g) => { return `/en/people/show/${g}` },

  reportPath: '/:lang(en|ru|pt|es)/reports/show/:reportname',
  reportLink: (g) => { 
    if (typeof g === 'string') {
      return `/en/reports/show/${g}`
    } else if (typeof g === 'object') {
      let lang = g.lang ? g.lang : 'en'
      return `/${lang}/reports/show/${g.reportname}`
    }
  },
  reportsPath: '/:lang(en|ru|pt|es)/reports',
  reportsPagesPath: '/:lang(en|ru|pt|es)/reports/page/:reports_page',
  reportsLink: (args={}) => {
    if (args.reports_page) {
      return `/en/reports/page/${args.reports_page}`
    } else {
      return '/en/reports' 
    }
  },
  
  sitePath: '/:lang(en|ru|es|pt)/sites/show',
  sitePath1: `/:lang(en|ru|es|pt)/sites/show/:domain`,
  sitePath2: `/:lang(en|ru|es|pt)/sites/show/:domain/newsitems`,
  siteLink: (g) => {
    if (typeof g === 'string') {
      return `/${g}/sites/show`
    } else if (typeof g === 'object') {
      return `/${g.lang}/sites/show`
    }
  },
           
  tagPath: '/:lang(en|ru|pt|es)/tags/show/:tagname',
  tagLink: (g) => {
    if (typeof g === 'string') {
      return `/en/tags/show/${g}`
    } else if (typeof g === 'object') {
      let lang = g.lang ? g.lang : 'en'
      return `/${lang}/tags/show/${g.tagname}`
    }
  },
  tagsPath: '/:lang(en|ru|pt|es)/tags',
  tagsLink: () => { return '/en/tags' },

  videoPath: '/:lang(en|ru|pt|es)/videos/show/:youtube_id',
  videoLink: (g) => { return `/en/videos/show/${g}` },
  videosPath: '/:lang(en|ru|pt|es)/videos',
  videosPagesPath: '/:lang(en|ru|pt|es)/videos/page/:videos_page',
  videosLink: (args={}) => { 
    if (args.videos_page) {
      return `/en/videos/page/${args.videos_page}`
    } else if (args.page) {
      return `/en/videos/page/${args.page}`
    } else { 
      return `/en/videos`
    }
  },
}

export default AppRouter
