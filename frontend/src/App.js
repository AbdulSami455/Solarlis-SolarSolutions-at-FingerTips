import React, { useState, useEffect } from "react";
import HomeState from "./contextApi/HomePage/HomeState";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllPlans from "./Components/Page2/AllPlans";
import MainPage from "./Components/Page1/MainPage";
import Loader from "./Components/Loader";

function App() {
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setloading(false), 2000);
  }, [loading]);
  
  return (
    
    <HomeState>
    <Router>
      <Routes>
                <Route exact path="/" element={loading?<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><div><Loader /></div></div>:<MainPage />} />
                
                <Route exact path="/allplans" element={loading?<div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><div><Loader /></div></div>:<AllPlans />} />
                </Routes>
                </Router>
                </HomeState>
                
            
                );
}

export default App;
