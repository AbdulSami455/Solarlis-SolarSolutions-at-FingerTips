import React from "react";
import "./custom.css";

function Navbar() {
  return (
    <div style={{ position: "absolute", zIndex: "1" }}>
      <nav className="navbar navbar-expand-lg bg-body-transparent navbar-transparent">
        <div
          className="container-fluid"
          style={{ marginLeft: "20%", marginRight: "17%" }}
        >
          <a className="navbar-brand btnNav" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active btnNav"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btnNav" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
