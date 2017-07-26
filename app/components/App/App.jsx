import React    from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router, Route, Redirect, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'

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
import store      from '../../stores'


function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

class App extends React.Component {
  state = getAppState()

  componentDidMount() {
    console.log("+++ +++ store: ", store)

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
      <Provider store={store} >
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Redirect from="/en/galleries/show_long/:galleryName/:photoIdx" to="http://travel-guilde.mobi/en/galleries/show/:galleryName/" />
          <Route path="/en/galleries" component={Clients} />
        </Router>
      </Provider>
    );
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

