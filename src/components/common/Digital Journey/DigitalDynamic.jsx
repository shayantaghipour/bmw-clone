// BMWMediaSection.jsx
import React from "react";

const mediaItems = [
  {
    type: "video",
    src: "./src/assets/videos/i5-01-stage-media-hd.mp4",
    category: "Innovativ mobil",
    title: "BMW i5: mit Dynamik und helfender Hand",
  },
  {
    type: "image",
    src: "./src/assets/images/digital dynamic/ng23-meet-dee-01-stage-hd.jpg",
    category: "\\\\ welcome to my hub! //",
    title: "\\\\ hi, i'm Dee! //",
  },
  {
    type: "video",
    src: "./src/assets/videos/dee-01-stage-hd.mp4",
    category: "DEE MY GUEST",
    title: "Eine Audio-Serie über Mensch und Maschine",
  },
];

const DigitalDynamic = () => {
  return (
    <div className="bmw-media-section">
      {mediaItems.map((item, index) => (
        <div className="media-card" key={index}>
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              className="media-content"
            />
          ) : (
            <img src={item.src} alt={item.title} className="media-content" />
          )}
          <div className="media-text">
            <h5>{item.category}</h5>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DigitalDynamic;
