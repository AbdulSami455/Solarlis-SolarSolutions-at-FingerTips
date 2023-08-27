import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div>
      <div class="gooey">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
