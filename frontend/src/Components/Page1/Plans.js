import React,{useContext,useEffect,useState} from 'react'
import HomeContext from '../../contextApi/HomePage/HomeContext'
import PlansCards from './PlansCards';

function Plans() {

    let context = useContext(HomeContext);
    const {Plans,fetchPlans} = context;


    useEffect(() => {
      fetchPlans();
    },[])
    

  return (
    <div>
    <div className='section'>
    <h2>Plans</h2>
    <div className='d-flex justify-content-around'>
    <button className='btnNav'>Click</button>
      {Plans&&Plans.slice(0,3).map((Plan,index)=>{
        return(
            <div className='row cols-md-3'>
            <div key={index}>
        <PlansCards Plan={Plan} />
        </div>
        </div>
        )
    })}
    <button className='btnNav'>Click</button>
    </div>
    </div>
    </div>
  )
}

export default Plans