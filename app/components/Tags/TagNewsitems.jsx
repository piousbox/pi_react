import React from 'react'
import { connect } from 'react-redux'

import { tagAction } from '../../actions'

import { Newsitem } from '../Newsitem'

class TagNewsitems extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(tagAction(props.tagname))
  }

  componentWillReceiveProps(nextProps) {
    console.log('+++ TagNewsitems will receive props:', nextProps, this.props, this.state)
  }

  render () {
    console.log('+++ tagNewsitems render:', this.props, this.state, Object.keys(this.props.tags), this.props.tagname, this.props.tags[this.props.tagname] )
    window.a = this.props.tags
    window.b = this.props.tagname

    let newsitems = []
    this.props.tags[this.props.tagname] && this.props.tags[this.props.tagname].newsitems.map((n, idx) => { 
      console.log('a?')
      newsitems.push(<Newsitem key={idx} newsitem={n} />)
    })

    return (
      <div>
        { /* <h2>{ this.props.tagname }</h2> */ }
        { newsitems }
      </div>)
  }
}

const mapState = (state, ownProps) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapState)(TagNewsitems)
