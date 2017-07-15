import React from 'react'
import ReactDOM from 'react-dom'
import Posts from './Posts'
import PostForm from './PostForm'

class App extends React.Component {
  constructor(props) {
    super(props)

    const news = [
      { id: 1, name: 'Great news!', description: 'This is an example of great news.' },
      { id: 2, name: 'Okay news', description: 'Nothing out of the ordinary here.' },
      { id: 3, name: 'Bad news', description: 'Well, this just sucks!' }
    ]
  }

  render() {
    return (
      <div>
        <Posts news={ this.props.news } />
        <PostForm />
      </div>
    )
  }
}

export default App
