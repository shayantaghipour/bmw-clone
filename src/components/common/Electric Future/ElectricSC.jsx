import React from "react";

const ElectricSC = () => {
  const features = [
    {
      id: 1,
      type: "video",
      src: "./src/assets/videos/fd-01-stage-hd.mp4",
      category: "Sportliches E-Auto",
      title: "Unter Storm auf dem Salzburgring: BMW i4 M50 im Härtetest",
    },
    {
      id: 2,
      type: "video",
      src: "./src/assets/videos/i4n-01-stage-hd.mp4",
      category: "City Trip Oslo",
      title: "Electrisierende Sinneseindrücke",
    },
  ];

  return (
    <section className="electricsc-section">
      {features.map((item) => (
        <div className="electricsc-card" key={item.id}>
          <div className="electricsc-media">
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="electricsc-video"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="electricsc-image"
              />
            )}
            <div className="electricsc-overlay"></div>
          </div>
          <div className="electricsc-text">
            <h4>{item.category}</h4>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ElectricSC;
