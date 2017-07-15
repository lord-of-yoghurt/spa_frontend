import React from 'react'
import Post from './Post'

const Posts = (props) => {
  const newsItems = props.news.map((item) => {
    return <Post key={item.id} name={item.name} description={item.description} />
  });

  return(
    <div className="posts">
      <h2>Here are all the news!</h2>
      <ul>
        { newsItems }
      </ul>
    </div>
  )
}

export default Posts
