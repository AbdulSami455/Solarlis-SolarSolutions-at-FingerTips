import React from 'react'

function PlansCards(props) {
    const Plan = props.Plan;
    
  return (
    <div class="card">
    <button onClick={()=>console.log(Plan._id)} style={{textDecoration:"none"}} class="btnCard">
    <div className='d-flex justify-content-center'>
    <img src={Plan.Svg} class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <h4 >{Plan.Company}</h4>
      </div>
      </button>
  </div>
  )
}

export default PlansCards