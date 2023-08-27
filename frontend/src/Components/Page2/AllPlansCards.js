import React from 'react'

function AllPlansCards(props) {
    const Plan = props.Plan;
    
  return (
    <div>
    <div className="card">
    <button onClick={()=>console.log(Plan._id)} className="btnCardP2">
    <img src={Plan.Svg} className="card-img-top" alt="..." />
    <div className="card-body">
      <h4 className="card-title text-center">{Plan.Company}</h4>
      <p className="card-text text-center">{Plan.Paragraph}</p>
      </div>
      </button>
  </div>
    </div>
  )
}

export default AllPlansCards