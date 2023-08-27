import React from "react";

function AllPlansCards(props) {
  const Plan = props.Plan;

  return (
    <div>
      <button onClick={() => console.log(Plan._id)} className="btnCardP2">
        <div className="card" style={{ height: "18rem", width: "18rem",background:"none" }}>
          <img src={Plan.Svg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-center">{Plan.Company}</h4>
            <p className="card-text">{(Plan.Paragraph).length<40?Plan.Paragraph:(Plan.Paragraph).slice(0,41)+"..."}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default AllPlansCards;
