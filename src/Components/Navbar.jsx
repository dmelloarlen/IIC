import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
    <div className="d-flex justify-content-center">
        <img src="" alt="Logo"/>
        <img src="" alt="Logo"/>
        <img src="" alt="Logo"/>
        <img src="" alt="Logo"/>
    </div>
    <nav className="navbar">
      <div className="navbar-brand">IIC </div>
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
    </div>
  );
}

export default Navbar;
