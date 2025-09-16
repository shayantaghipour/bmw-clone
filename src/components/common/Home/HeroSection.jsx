import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <p className="hero-subtitle">Inside Neue Klasse</p>
        <h1 className="hero-title">
          THE HEART OF JOY – <br />
          REDEFINING DRIVING PLEASURE
        </h1>
        <button className="hero-button">Read more</button>
      </div>

      <div className="hero-right">
        <img
          src="./src/assets/images/bmw-hero.png"
          alt="BMW Hero"
          className="hero-image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroSection;
