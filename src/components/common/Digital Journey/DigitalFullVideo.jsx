import React from "react";

const DigitalFullVideo = () => {
  return (
    <div className="bmw-full-video">
      <video
        src="./src/assets/videos/hoj-01-stage-hd_2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="bmw-text">
        <p className="bmw-category">Inside Neue Klasse</p>
        <h2>Heart of Joy – Fahrfreude neu definiert</h2>
      </div>
    </div>
  );
};

export default DigitalFullVideo;
