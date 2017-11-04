import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post'
import PostForm from './PostForm'
import 'whatwg-fetch'
import { addPost } from './actions/PostActions'

const BASE_URL = 'http://localhost:3000/api' // for dev
// const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/api' // for prod

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }

    this.addPost = this.addPost.bind(this)
  }

  testRedux() {
    console.log('You clicked!')
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts() {
    fetch(`${BASE_URL}/posts`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({posts: data})
      })
      .catch(e => {
        console.log(`Error! ${e.toString()}`)
      })
  }

  addPost(data) {
    fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        posts: this.state.posts.concat([data])
      })
    })
    .catch(e => {
      console.log(`There was an error! ${e.toString()}`)
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.props.dispatch(addPost())}}>Test Redux</button>
        {this.state.posts.map((post) => {
          return <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            username={post.username}
          />
        })}
        <PostForm onPostSubmit={this.addPost} />
      </div>
    )
  }
}

export default connect()(App);
