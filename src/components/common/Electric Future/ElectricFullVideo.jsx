import React from "react";

const ElectricFullVideo = () => {
  return (
    <div className="bmw-full-video">
      <video
        src="./src/assets/videos/em-00-stage-hd.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="bmw-text">
        <p className="bmw-category">ELECTRIC MYTHS</p>
        <h2>Ein Video-Podcast über die Mzthen des electrischen Fahrens</h2>
      </div>
    </div>
  );
};

export default ElectricFullVideo;
