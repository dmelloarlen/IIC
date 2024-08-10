import React, { useState, useEffect } from "react";
import "../CSS/Home.css"; // Import the CSS file for styling

const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1600x900/003366/ffffff?text=Image+1",
    "https://via.placeholder.com/1600x900/ff3333/ffffff?text=Image+2",
    "https://via.placeholder.com/1600x900/cccccc/003366?text=Image+3",
  ];

  const totalImages = images.length;

  const showSlide = (index) => {
    if (index >= totalImages) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalImages - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="">
      <div>
        <div className="carousel">
          <div
            className="carousel-images"
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} />
            ))}
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide}>❮</button>
            <button onClick={nextSlide}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
