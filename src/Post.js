import React from 'react'

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
