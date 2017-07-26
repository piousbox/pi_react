import React    from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router, Route, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import 'whatwg-fetch'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import AppActions from '../../actions/AppActions'
import ItemsStore from '../../stores/ItemsStore'
import Home       from './Home'
import { ProcessWrapped } from '../OurProcess'
import Products   from './Products'
import Clients    from './Clients'
import Stack      from '../Stack/Stack'


function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

class Redirect extends React.Component {
  componentWillMount () {
    console.log('+++ +++ my redirect props:', this.props)
    console.log('+++ +++ my redirect stats:', this.stats) 

    window.location = this.state.route.loc
  }
}

class App extends React.Component {
  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Home} />
        <Route path="/en/galleries/show_long/:galleryName/:photoIdx" component={Redirect} />
        <Route path="/en/galleries" component={Clients} />
      </Router>
    )
  }
}

/* App.propTypes = {
  children: PropTypes.node.isRequired
} */

function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
  }
}

export default connect(mapStateToProps)(App)

