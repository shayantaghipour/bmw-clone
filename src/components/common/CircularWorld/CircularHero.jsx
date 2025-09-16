import React from "react";

const CircularHero = () => {
  return (
    <section className="circular-hero">
      <div className="circular-video-wrapper">
        <video className="circular-video" autoPlay muted loop playsInline>
          <source
            src="./src/assets/videos/f-01-stage-hd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default CircularHero;
