import React from "react";

const BMWFactsSection = () => {
  const images = [
    "./src/assets/images/bmw factssection/fact1.jpg",
    "./src/assets/images/bmw factssection/fact2.jpg",
    "./src/assets/images/bmw factssection/fact3.jpg",
  ];

  return (
    <section className="bmw-facts">
      <div className="facts-images">
        {images.map((src, idx) => (
          <img src={src} alt={`fact-${idx}`} key={idx} />
        ))}
      </div>
      <div className="facts-text">
        <p className="category">BMW history</p>
        <h3>Do you know these fascinating BMW facts?</h3>
      </div>
    </section>
  );
};

export default BMWFactsSection;
