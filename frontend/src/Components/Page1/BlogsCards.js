import React from 'react'

function BlogsCards(props) {
    const Blog = props.Blog;
    
  return (
    <div class="card">
    <a style={{textDecoration:"none"}} href={Blog.LinkedIn} class="btnCard">
    <img src={Blog.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 >{Blog.Company}</h4>
      </div>
      </a>
  </div>
  )
}

export default BlogsCards