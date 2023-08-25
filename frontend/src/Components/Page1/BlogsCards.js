import React from 'react'

function BlogsCards(props) {
    const Blog = props.Blog;
  return (
    <div><div class="card">
    <img src={Blog.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{Blog.Company}</h5>
      <p class="card-text">{Blog.Paragraph}.</p>
      <a href="/" class="btn btn-primary">{Blog.LinkedIn}</a>
    </div>
  </div></div>
  )
}

export default BlogsCards