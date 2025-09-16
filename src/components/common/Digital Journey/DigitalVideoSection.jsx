import React from "react";

const DigitalVideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source
            src="./src/assets/videos/eink-01-stage-hd.mp4"
            type="video/mp4"
          />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>

      <div className="video-text">
        <h3>Kunst trifft Innovation</h3>
        <h2>Der BMW i5 Flow NOSTOKANA</h2>
      </div>
    </section>
  );
};

export default DigitalVideoSection;
