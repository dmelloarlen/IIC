import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import iiclogo from "../Images/IIC logo.png"
import AICTClogo from "../Images/AICTC logo.png"
import Innovationlogo from "../Images/innovation cell logo.png"
import TpolyLogo from "../Images/Tpoly logo.png"
import IICM from "../Images/IICM logo.png"

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const Navigate=useNavigate();
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
    
    <nav className="navbar">
      <div onClick={()=>Navigate('/')}><img src={iiclogo} style={{width:"50px",height:"50px",cursor:"pointer"}}/></div>
      <ul className="navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/idea-sub">Idea hub</a>
        </li>
      </ul>
      <button className="login-button">Login</button>
      <div className="menu-icon" onClick={toggleDropdown}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
      {dropdownVisible && (
        <div className="d-flex justify-content-center">
          <Link to="/" style={{margin:"0px 10px"}}>Home</Link>
          <Link to="/events" style={{margin:"0px 10px"}}>Events</Link>
          <Link to="/idea-sub" style={{margin:"0px 10px"}}>Idea Sub</Link>
          {/* <a>Login</a> */}
        </div>
      )}
      <div className="d-flex justify-content-center images mt-2" style={{flexWrap:"wrap"}}>
        <img src={AICTClogo} alt="Logo" style={{width:"80px"}}/>
        <img src={Innovationlogo} alt="Logo" style={{width:"180px"}}/>
        <img src={TpolyLogo} alt="Logo" style={{width:"100px"}}/>
        <img src={IICM} alt="Logo" style={{width:"140px"}}/>
    </div>
    </div>
  );
}

export default Navbar;
