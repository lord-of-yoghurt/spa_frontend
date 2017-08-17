import React from 'react'
import PropTypes from 'prop-types'

export default class Post extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <p>Author: {this.props.username}</p>
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  username: PropTypes.string
}
