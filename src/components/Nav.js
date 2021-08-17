import React from "react";
import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color : "#fff" , fontWeight : "bold"}}>
              <li className="nav-item">
               <Link to="/" className="nav-link active" aria-current="page" href="#">Trang chủ</Link>
              </li>
              <li className="nav-item">
               <Link to="/about" className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
               <Link to="/users" className="nav-link" href="#">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Nav;