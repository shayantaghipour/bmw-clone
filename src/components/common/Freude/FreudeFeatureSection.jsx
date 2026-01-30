import React from "react";

const FreudeFeatureSection = () => {
  return (
    <section className="electric-section">
      {/* قاب ویدیو سمت راست */}
      <div className="electric-video">
        <div className="video-frame">
          <video
            src="./src/assets/videos/cw-01-stage-portrait.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>

      {/* متن سمت چپ */}
      <div className="electric-text">
        <h2>Freude</h2>
        <p>
          Freude kann so vieles sein. Ein Statement, Spaß am Fahren, das Leben
          bewusst genießen. Und Freude ist Antrieb und Versprechen zugleich. Auf
          jeden Fall ist sie ein mächtiges und intensives Gefühl, das uns
          positiv in die Zukunft blicken lässt. Mit Geschichten, die die Sinne
          berühren, und Erzählungen, die für Gänsehaut sorgen, zeigen wir Ihnen,
          wie Freude unser Leben und damit auch unsere Mobilität bestimmt.
          <br />
          <span className="electric-date">18. April 2023</span>
        </p>
      </div>
    </section>
  );
};

export default FreudeFeatureSection;
