import React from 'react'
import 'whatwg-fetch'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      username: ''
    }

    this.handleChange     = this.handleChange.bind(this)
    this.handleSubmit     = this.handleSubmit.bind(this)
    this.handleClearForm  = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    const target   = event.target,
          value    = target.value,
          name     = target.name;

    this.setState({
      [name]: value
    })
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      title: '',
      body: '',
      username: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onPostSubmit(this.state)
    this.handleClearForm(event)
  }

  render() {
    return (
      <div className="PostForm">
        <hr></hr>
        <h3>Submit New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange} /></p>
          <p>Body: <textarea name="body" value={this.state.body} onChange={this.handleChange} /></p>
          <p>Username: <input name="username" type="text" value={this.state.username} onChange={this.handleChange} /></p>
          <p><input type="submit" value="Yarrr!" /></p>
        </form>
      </div>
    )
  }
}
