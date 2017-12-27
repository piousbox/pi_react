
let AppRouter = {

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
  videosPagesPath: '/:lang(en|ru|pt|es)/videos',
  videosLink: (args={}) => { 
    if (args.videos_page) {
      return `/en/videos/page/${args.videos_page}`
    } else { 
      return `/en/videos`
    }
  },
}

export default AppRouter

/*
   cityPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname',
   cityLink: (g) => {
   if (typeof g === 'string') {
   return `/en/cities/travel-to/${g}`
   } else if (typeof g === 'object' ){
   return `/en/cities/travel-to/${g.cityname}`
   } else {
   console.log('no city passed to cityLink!')
   return null
   }
   },
   cityEventPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/events/show/:eventname',
   cityEventLink: (g) => { return `/en/cities/travel-to/${g.cityname}/events/show/${g.eventname}` },
   cityGalleriesPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/galleries',
   cityGalleriesLink: (g) => { 
   if ('string' === typeof g) {
   return `/en/cities/travel-to/${g}/galleries`
   } else if ('object' === typeof g) {
   return `/en/cities/travel-to/${g.cityname}/galleries`
   }
   },
   cityUsersPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/people',
   cityUsersLink: (g) => {
   return `/en/cities/travel-to/${g.cityname}/people`
   },
   cityVenuesPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/venues',
   cityVenuesLink: (g) => {
   return `/en/cities/travel-to/${g.cityname}/venues`
   },
   cityVenuePath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/venues/show/:venuename',
   cityVenueLink: (g, gg) => {
   if (arguments.length === 1) {
   return `/en/cities/travel-to/${g.cityname}/venues/show/${g.venuename}`
   } else {
   return `/en/cities/travel-to/${g}/venues/show/${gg}`
   }
   },
   cityReportsPath: "/:lang(en|ru|pt|es)/cities/travel-to/:cityname/reports",
   cityReportsLink: (g) => { 
   if ('string' === typeof g) {
   return `/en/cities/travel-to/${g}/reports`
   } else if ('object' === typeof g) {
   return `/en/cities/travel-to/${g.cityname}/reports`
   }
   },
   cityWrapperPath: "/:lang(en|ru|pt|es)/cities/travel-to",
 */
