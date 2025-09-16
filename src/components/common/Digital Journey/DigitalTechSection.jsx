import React from "react";

const DigitalTechSection = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <video className="tech-video" autoPlay muted loop playsInline>
          <source
            src="./src/assets/videos/fot2-01-stage-hd.mp4"
            type="video/mp4"
          />
        </video>
        <div />

        <div className="tech-text"></div>
        <h3>Future of Tech</h3>
        <h2>Die Technologie der Zukunft heute erleben: Flexibilität</h2>
      </div>
    </section>
  );
};

export default DigitalTechSection;
