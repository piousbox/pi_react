import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { tagAction } from '../../actions'

import { Newsitem } from '../Newsitems'

class TagNewsitems extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(tagAction(props.tagname))
  }

  componentWillReceiveProps(nextProps) {
    // console.log('+++ TagNewsitems will receive props:', nextProps, this.props, this.state)
  }

  render () {
    console.log('+++ tagNewsitems render:', this.props, this.state )

    let newsitems = []
    this.props.tags[this.props.tagname] && this.props.tags[this.props.tagname].newsitems.map((n, idx) => { 
      newsitems.push(<Newsitem key={idx} newsitem={n} />)
    })

    return (
      <div>
        { /* <h2>{ this.props.tagname }</h2> */ }
        { newsitems }
      </div>)
  }
}

TagNewsitems.propTypes = {
  tagname: PropTypes.string,
  tags: PropTypes.object,
  tagsList: PropTypes.array,
}

const mapState = (state, ownProps) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapState)(TagNewsitems)
