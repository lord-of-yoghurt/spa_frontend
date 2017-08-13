import React from 'react'
import Post from './Post'
import PostForm from './PostForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // TODO:
    // fetch('http://localhost:3000/api/posts')
    //   .then(res => {
    //     this.posts = res.json()
    //     console.log(this.posts)
    //   }).then(json => {
    //     console.log('JSON retrieved', json)
    //   }).catch(ex => {
    //     console.log('JSON not retrieved', ex)
    //   })
  }
  
  render() {
    const posts = [
      { id: 1, name: 'Great news!', description: 'This is an example of great news.' },
      { id: 2, name: 'Okay news', description: 'Nothing out of the ordinary here.' },
      { id: 3, name: 'Bad news', description: 'Well, this just sucks!' }
    ]

    return (
      <div>
        {posts.map((post) => {
          return <Post key={post.id} id={post.id} name={post.name} />
        })}
        <PostForm />
      </div>
    )
  }
}
