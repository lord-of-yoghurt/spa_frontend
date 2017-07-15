import React from 'react'
import Posts from './Posts'
import PostForm from './PostForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <Posts />
        <PostForm />
      </div>
    )
  }
}

export default App
