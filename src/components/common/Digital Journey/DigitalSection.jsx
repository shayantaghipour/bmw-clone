// BMWSection.jsx
import React from "react";

const BMWSection = () => {
  return (
    <div className="bmw-section">
      <div className="bmw-card">
        <video
          className="bmw-video"
          src="./src/assets/videos/hyx-01-stage-hd.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <p className="bmw-category">INSIDE NEUE KLASSE</p>
        <h2 className="bmw-title">
          BMW HYPERSONX – DIE UNSICHTBARE KUNST DER FAHRSOUNDS
        </h2>
      </div>

      <div className="bmw-card">
        <video
          className="bmw-video"
          src="./src/assets/videos/panoramic-01-stage-hd.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <p className="bmw-category">INSIDE NEUE KLASSE</p>
        <h2 className="bmw-title">BMW Panoramic iDrive – für Sie gemacht</h2>
      </div>
    </div>
  );
};

export default BMWSection;
