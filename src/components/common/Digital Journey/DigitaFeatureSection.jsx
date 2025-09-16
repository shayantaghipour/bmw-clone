import React from "react";

const DigitaFeatureSection = () => {
  const features = [
    {
      id: 1,
      type: "image",
      src: "./src/assets/images/digital feature section/ol-section.jpg",
      category: "Over-the-Air Updates",
      title: "Die Freude der stetigen Weiterentwicklung",
    },
    {
      id: 2,
      type: "video",
      src: "./src/assets/images/digital feature section/qt-01-stage-hd.mp4",
      category: "Luxus der Zukunft",
      title: "Digitale Kunst trifft Mobilität",
    },
  ];

  return (
    <section className="digitalfeature-section">
      {features.map((item) => (
        <div className="digitalfeature-card" key={item.id}>
          <div className="media-wrapper">
            {item.type === "image" ? (
              <img src={item.src} alt={item.title} />
            ) : (
              <video autoPlay muted loop playsInline>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            {item.type === "image" && <div className="overlay"></div>}
          </div>
          <div className="digitalfeature-text">
            <h4>{item.category}</h4>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DigitaFeatureSection;
