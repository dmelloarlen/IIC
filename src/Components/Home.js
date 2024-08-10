import React from "react";
import "../CSS/Home.css"; // Import the CSS file for styling
import Carosel from "./Carosel";

const Home = () => {
  return (
    <div>
       <Carosel/>
       <div>
        <div className="d-flex justify-content-center fs-3">
            <strong>About Us</strong>
          </div>
          <div className="container">
            About Us me kya dalna hai???
          </div>
       </div>
    </div>
  );
};

export default Home;
