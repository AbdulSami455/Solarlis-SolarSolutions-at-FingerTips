import React from 'react'

function PlansCards(props) {
    const Plan = props.Plan;
  return (
    <div><div class="card">
    <img src={Plan.Svg} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{Plan.Company}</h5>
      <p class="card-text">{Plan.Paragraph}.</p>
      <a href="/" class="btn btn-primary">{Plan.LinkedIn}</a>
    </div>
  </div></div>
  )
}

export default PlansCards