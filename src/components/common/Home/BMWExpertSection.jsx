import React from "react";

const BMWExpertSection = () => {
  return (
    <div className="expert-section">
      <div className="expert-container">
        <video autoPlay loop muted playsInline className="expert-video">
          <source src="./src/assets/videos/bmw-logos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="expert-container">
        <h2>BECOME A BMW EXPERT</h2>
        <a href="#" className="bmw-link">
          › BMW EXPLAINED
        </a>
      </div>
    </div>
  );
};

export default BMWExpertSection;
