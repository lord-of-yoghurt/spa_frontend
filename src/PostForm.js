import React from 'react'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Title here',
      body: 'So what happened?',
      username: 'Your nickname plz'
    }

    this.handleChange     = this.handleChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleClearForm  = this.handleClearForm.bind(this);
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
    this.handleClearForm(event)
    console.log(this.state)
  }

  render() {
    return (
      <div className="PostForm">
        <hr></hr>
        <h3>New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <p><input name="title" type="text" placeholder={this.state.title} onChange={this.handleChange} /></p>
          <p><textarea name="body" placeholder={this.state.body} onChange={this.handleChange} /></p>
          <p><input name="username" type="text" placeholder={this.state.username} onChange={this.handleChange} /></p>
          <p><input type="submit" value="Yarrr!" /></p>
          <p><button onClick={this.handleClearForm}>Clear this mess</button></p>
        </form>
      </div>
    )
  }
}
