import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'

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
      <Router history={hashHistory}>
        <Route path="/"         component={Home} />
      </Router>
    );
  }
}

/* App.propTypes = {
  children: PropTypes.node.isRequired
} */

export default App

