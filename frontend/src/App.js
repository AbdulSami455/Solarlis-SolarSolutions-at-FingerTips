import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPlans from "./Components/Page2/AllPlans";
import MainPage from "./Components/Page1/MainPage";
import Loader from "./Components/Loader";
import HomeContext from "./contextApi/HomePage/HomeContext";

function App() {
  let context = useContext(HomeContext);

  const { loading, setLoad } = context;

  useEffect(() => {
    setTimeout(() => setLoad(false), 2000);
  }, [loading]);

  return (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              loading ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100vh" }}
                >
                  <div>
                    <Loader />
                  </div>
                </div>
              ) : (
                <MainPage />
              )
            }
          />

          <Route
            exact
            path="/allplans"
            element={
              loading ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "100vh" }}
                >
                  <div>
                    <Loader />
                  </div>
                </div>
              ) : (
                <AllPlans />
              )
            }
          />
        </Routes>
      </Router>
    
  );
}

export default App;
