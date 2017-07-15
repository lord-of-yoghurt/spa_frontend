import React from 'react'

const Post = () => {
  const news = [
    { id: 1, name: 'Great news!', description: 'This is an example of great news.' },
    { id: 2, name: 'Okay news', description: 'Nothing out of the ordinary here.' },
    { id: 3, name: 'Bad news', description: 'Well, this just sucks!' }
  ]

  console.log(news)

  return(
    <div className="posts">
      <h2>Here are all the news!</h2>
      <ul>
        { news.map((item) => {
          return (
            <li>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default Post
