import React from 'react'

function ProductsCards(props) {
    const Product = props.Product;
  return (
    <div><div class="card">
    <img src={Product.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{Product.Company}</h5>
      <p class="card-text">{Product.Paragraph}.</p>
      <a href="/" class="btn btn-primary">{Product.LinkedIn}</a>
    </div>
  </div></div>
  )
}

export default ProductsCards