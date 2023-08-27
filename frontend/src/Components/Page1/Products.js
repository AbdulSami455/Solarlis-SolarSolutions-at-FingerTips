import React, { useContext, useEffect, useState } from "react";
import HomeContext from "../../contextApi/HomePage/HomeContext";
import ProductsCards from "./ProductsCards";
import Loader from "../Loader";

function Products() {
  let context = useContext(HomeContext);
  const { Products, fetchProducts, ProductLen } = context;
  
  const [start, setStart] = useState(0);
  const [End, setEnd] = useState(3);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line 
  }, []);

   console.log(ProductLen);

   useEffect(() => {
    setTimeout(() => setloading(false),700)
   }, [loading])
   
  

  const svg1 = () => {
    let subStart = start - 3;
    setStart(subStart);
    let subEnd = End - 3;
    setEnd(subEnd);
    setloading(true);
  };

  const svg2 = () => {
    let sumStart = start + 3;
    setStart(sumStart);
    let sumEnd = End + 3;
    setEnd(sumEnd);
    setloading(true);
  };

  return (
    <div>
      
     <div className="container boxPage1">
        <h2 className="text-center my-4">Products</h2>
        {!loading? <div className="d-flex justify-content-around">
         <svg
            onClick={svg1}
            className="svgHome"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{
              height: "40px",
              visibility: start === 0 ? "hidden" : "visible",
            }}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          {Products&&
            Products.slice(start, End).map((Product, index) => {
              return (
                <div className="row cols-md-3 mx-3" key={index}>
                <div className="boxCardP1">
                  
                    <ProductsCards Product={Product} />
                  </div>
                  </div>
    
                  );
                })}
          <svg
            onClick={svg2}
            className="svgHome"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{
              height: "40px",
              visibility: End >= ProductLen ? "hidden" : "visible",
            }}
            >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            </div> : <div className="d-flex justify-content-center align-items-center" style={{height:"33vh"}}><div><Loader /></div></div>}
          
            <div className=" d-flex justify-content-center">      
            <button className="read btnNav">Click</button>
          </div>
      </div>
    </div>
  );
}

export default Products;
