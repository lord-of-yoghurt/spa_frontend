import React from 'react'
import PropTypes from 'prop-types'

export default class Post extends React.Component {
  render() {
    return(
      <div>
        <h2>News #{this.props.id}</h2>
        {this.props.name}
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}
