import React, { useState, useEffect, useRef } from "react";

const images = [
  "./src/assets/images/bmw imageslide/img1.jpg",
  "./src/assets/images/bmw imageslide/img2.jpg",
  "./src/assets/images/bmw imageslide/img3.jpg",
  "./src/assets/images/bmw imageslide/img4.jpg",
  "./src/assets/images/bmw imageslide/img5.jpg",
  "./src/assets/images/bmw imageslide/img6.jpg",
  "./src/assets/images/bmw imageslide/img7.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 4000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prev) => (prev + 1) % images.length),
      delay
    );
    return () => resetTimeout();
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="slider-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`slider-image ${i === index ? "active" : ""}`}
        />
      ))}
      <img className="slider-image" src={images[index]} alt="Slide" />
    </div>
  );
};

export default ImageSlider;
