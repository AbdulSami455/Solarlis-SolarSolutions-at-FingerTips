import React from 'react'

function PlansCards(props) {
    const Plan = props.Plan;
    
  return (
    <div class="card">
    <a style={{textDecoration:"none"}} target='_blank' href={Plan.LinkedIn} class="btnCard">
    <img src={Plan.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 >{Plan.Company}</h4>
      </div>
      </a>
  </div>
  )
}

export default PlansCards