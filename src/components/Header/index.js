import React from "react";

function Header() {
    return (
        <div className="row" id="headerRow">
            <div className="col-md-6 col-12 justify-content-center d-flex justify-content-md-start">
                <h2 id="logo">Maria Francis-Moullier</h2>
            </div>
            <div className="col-md-6 col-12" id="navbar">
                <div className="nav justify-content-center justify-content-md-end" id="navlist">
                    <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default Header;
  