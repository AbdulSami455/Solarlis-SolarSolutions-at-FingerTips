import React, {useState} from "react";
import HomeContext from "./HomeContext";

const HomeState = (props)=>{
    const [Plans,setPlans] =useState();

    const fetchPlans = async()=>{
       const url = "http://localhost:5000/api/Plans/fetchplans"
       let response = await fetch(url,
        {
          method: "GET",
        })
        let data = await response.json();
        setPlans(data);
        console.log(data);
    }

    const [Blogs,setBlogs] =useState();

    const fetchBlogs = async()=>{
       const url = "http://localhost:5000/api/Plans/fetchplans"
       let response = await fetch(url,
        {
          method: "GET",
        })
        let data = await response.json();
        setBlogs(data);
        console.log(data);
    }

    return(
      <HomeContext.Provider value={{Plans,fetchPlans,Blogs,fetchBlogs}}>
        {props.children}
      </HomeContext.Provider>  
    )
}

export default HomeState;