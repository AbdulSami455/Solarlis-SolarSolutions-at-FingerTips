import React from 'react'

function BlogsCards(props) {
    const Blog = props.Blog;
    
  return (
    <div class="card">
    <button onClick={()=>console.log(Blog._id)} style={{textDecoration:"none"}} class="btnCard">
    <img src={Blog.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 >{Blog.Company}</h4>
      </div>
      </button>
  </div>
  )
}

export default BlogsCards