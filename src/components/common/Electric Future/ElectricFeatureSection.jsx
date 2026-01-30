import React from "react";

const ElectricFutureSection = () => {
  return (
    <section className="electric-section">
      {/* قاب ویدیو سمت راست */}
      <div className="electric-video">
        <div className="video-frame">
          <video
            src="./src/assets/videos/dj-01-stage-hd.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>

      {/* متن سمت چپ */}
      <div className="electric-text">
        <h2>Electric Future</h2>
        <p>
          Der Motor der Zukunft wird mit Strom betrieben. Und die Zukunft
          beginnt jetzt. Wir laden Sie ein, sich einen Eindruck von den
          Innovationen zu verschaffen, die unsere Mobilität bestimmen werden.
          Dabei spannen wir den Bogen von den heutigen Technologien über
          Wasserstoff bis hin zu kommenden Techniken. Diese elektrische Zukunft
          bietet enorme Chancen für eine umweltfreundlichere und nachhaltigere
          Gesellschaft.
          <br />
          <span className="electric-date">18. April 2023</span>
        </p>
      </div>
    </section>
  );
};

export default ElectricFutureSection;
