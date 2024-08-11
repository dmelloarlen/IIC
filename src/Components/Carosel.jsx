import React, { useState, useEffect } from "react";
import "../CSS/Home.css"; // Import the CSS file for styling

const Carosel = () => {
  const images = [
    "https://via.placeholder.com/1600x900/003366/ffffff?text=Image+1",
    "https://via.placeholder.com/1600x900/ff3333/ffffff?text=Image+2",
    "https://via.placeholder.com/1600x900/cccccc/003366?text=Image+3",
    "https://via.placeholder.com/1600x900/cccccc/003366?text=Image+3",
    "https://via.placeholder.com/1600x900/ff3333/ffffff?text=Image+2",

  ];

  const totalImages = images.length;

  return (
    <div className="">
       <div id="carouselExampleIndicators" className="carousel slide containe m-3">
        <div className="carousel-indicators">
          {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> */}
          {
                images.map((element,index)=>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index==0?"active":""} aria-label={`Slide ${index+1}`} key={index}></button>
                )
            }
        </div>
        <div className="carousel-inner" style={{borderRadius:"20px"}}>
            {
                images.map((element,index)=>(
                    <>
                        <div className="carousel-item active">
                            <img src={element} className="d-block w-100" alt="..."/>
                        </div>
                    </>
                ))
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>   
    </div>
    </div>
  );
};

export default Carosel;
