import React from 'react'

function ProductsCards(props) {
    const Product = props.Product;
    
  return (
    <div class="card">
    <button onClick={()=>console.log(Product._id)} style={{textDecoration:"none"}} class="btnCard">
    <img src={Product.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 >{Product.Company}</h4>
      </div>
      </button>
  </div>
  )
}

export default ProductsCards