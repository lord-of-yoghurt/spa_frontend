import React from 'react'
import Post from './Post'
import PostForm from './PostForm'
import 'whatwg-fetch'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount() {
    // TODO: pass error message to Post component if there is an error
    fetch('http://localhost:3000/api/posts')
      .then(res =>
        res.json()
        .then(data => ({
          data: data
        }))
      .then(res => {
        this.setState({posts: res.data})
      }))
      .catch(e => {
        if (e) {
          this.setState({error: `Error! ${e.toString}`})
        }
      })
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            username={post.username}
          />
        })}
        <PostForm />
      </div>
    )
  }
}
