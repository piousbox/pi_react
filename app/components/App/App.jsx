import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect,
         IndexRoute,
} from 'react-router'
import { Provider, connect } from 'react-redux'
// import 'whatwg-fetch'

import config     from 'config'
import PropTypes from 'prop-types'

import bg         from './images/noisy_grid.png'
import store      from '../../stores'

import Home from './Home'

import MainNavigationPressroom from './MainNavigationPressroom'
import AppRouter from './AppRouter'

import { 
  GalleriesIndex, GalleriesShow, GalleriesPhotoShow, 
} from '../Galleries'
import { ReportsIndex, ReportsShow 
} from '../Reports'
import { TagsShow } from '../Tags/TagsShow'
import { VideosIndex, VideosShow } from '../Videos'

import { TagsIndex, TagShow } from '../Tags'

const routes = [
  { path: '/',
    component: MainNavigationPressroom,
    indexRoute: { component: Home },
    childRoutes: [

      { path: AppRouter.sitePath, component: Home },
      
      { path: AppRouter.galleriesPath, component: GalleriesIndex, },
      { path: AppRouter.galleriesPagesPath, component: GalleriesIndex },
      { path: AppRouter.galleryPath, component: GalleriesShow },
      { path: AppRouter.galleryPhotoPath, component: GalleriesPhotoShow },

      { path: AppRouter.reportsPath, component: ReportsIndex },
      { path: AppRouter.reportsPagesPath, component: ReportsIndex },
      { path: AppRouter.reportPath,  component: ReportsShow },

      { path: AppRouter.tagsPath, component: TagsIndex, childRoutes: [
        { path: AppRouter.tagPath, component: TagShow },
      ]},
      
      { path: AppRouter.videosPath, component: VideosIndex },
      { path: AppRouter.videosPagesPath, component: VideosIndex },
      { path: AppRouter.videoPath, component: VideosShow },
    ],
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onChange () {}

  handleUpdate () {
    window.scrollTo(0, 0);
  }

  render() {
    console.log('+++ +++ App props:', this.props, this.state)

    return (
      <Provider store={store} >
        <Router history={browserHistory} routes={routes} onUpdate={this.handleUpdate} />
      </Provider>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)

