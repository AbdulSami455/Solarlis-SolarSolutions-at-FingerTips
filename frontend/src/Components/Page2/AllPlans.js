import React, { useContext, useEffect, useState } from "react";
import HomeContext from "../../contextApi/HomePage/HomeContext";
import AllPlansCards from "./AllPlansCards"
import Loader from "../Loader";


function AllPlans() {
    let context = useContext(HomeContext);
    const { Plans, fetchPlans, PlanLen } = context;
    
    const [loading, setloading] = useState(false)
  
    useEffect(() => {
      fetchPlans();
    }, []);
  
     console.log(PlanLen);
  
     useEffect(() => {
      setTimeout(() => setloading(false),700)
     }, [loading])

  
    return (
      <div>
        
       <div className="container boxPage2">
          <h2 className="text-center my-4">All Plans</h2>
          {!loading? <div className=" d-flex justify-content-center">
          <div className="row boxCardP2">
            {Plans&&
              Plans.map((Plan, index) => {
                return (
                    <div className="col-sm-4 my-2"  key={index}>
                    
                    <AllPlansCards Plan={Plan} />
                    </div>
                    
                    );
                })}
                
                </div>
              </div> : <div className="d-flex justify-content-center align-items-center" style={{height:"33vh"}}><div><Loader /></div></div>}
        </div>
      </div>
    )
}

export default AllPlans