import React, {useState} from "react";
import HomeContext from "./HomeContext";

const HomeState = (props)=>{
    const [Plans,setPlans] =useState();
    const [PlanLen,setplanLen] = useState(0);

    const fetchPlans = async()=>{
       const url = "http://localhost:5000/api/Plans/fetchplans"
       let response = await fetch(url,
        {
          method: "GET",
        })
        let data = await response.json();
        setPlans(data);
        let length = 0;
        data.forEach(() => {
          length++;
        });
        setplanLen(length);
        console.log(PlanLen);
        console.log(data);
    }

    const [Blogs,setBlogs] =useState();
    const [BlogLen,setblogLen] = useState(0);

    const fetchBlogs = async()=>{
       const url = "http://localhost:5000/api/Plans/fetchplans"
       let response = await fetch(url,
        {
          method: "GET",
        })
        let data = await response.json();
        setBlogs(data);
        let length = 0;
        data.forEach(() => {
          length++;
        });
        setblogLen(length);
        console.log(BlogLen);
        console.log(data);
    }

    const [Products,setProducts] =useState();
    const [ProductLen,setproductLen] = useState(0);

    const fetchProducts = async()=>{
       const url = "http://localhost:5000/api/Plans/fetchplans"
       let response = await fetch(url,
        {
          method: "GET",
        })
        let data = await response.json();
        setProducts(data);
        let length = 0;
        data.forEach(() => {
          length++;
        });
        setproductLen(length);
        console.log(ProductLen);
        console.log(data);
    }

    return(
      <HomeContext.Provider value={{Plans,fetchPlans,PlanLen,Blogs,fetchBlogs,BlogLen,Products,fetchProducts,ProductLen}}>
        {props.children}
      </HomeContext.Provider>  
    )
}

export default HomeState;