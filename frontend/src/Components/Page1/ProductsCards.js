import React from 'react'

function ProductsCards(props) {
    const Product = props.Product;
    
  return (
    <div class="card">
    <a style={{textDecoration:"none"}} href={Product.LinkedIn} class="btnCard">
    <img src={Product.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 >{Product.Company}</h4>
      </div>
      </a>
  </div>
  )
}

export default ProductsCards