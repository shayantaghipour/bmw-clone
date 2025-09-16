import React from "react";

const DigitalCardList = () => {
  const cards = [
    {
      category: "Innovation",
      title: "BMW Intelligence",
      video: "./src/assets/videos/bi-01-stage-hd.mp4",
      type: "video",
    },
    {
      category: "BMW iDrive",
      title: "Die Evolution von Steuerung und intelligenter Konnektivität",
      video: "./src/assets/videos/id-03-media-m.mp4",
      type: "video",
    },
    {
      category: "Smart Assistance",
      title: "Ein intelligenter Begleiter für jede Fahrt",
      image: "./src/assets/images/digital cardlist/sa-00-teaser-hd.jpg",
      type: "image",
    },
  ];

  return (
    <section className="card-section">
      {cards.map((card, index) => (
        <div className="card-card" key={index}>
          {card.type === "video" ? (
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="card-video"
            />
          ) : (
            <img src={card.image} alt={card.title} className="card-image" />
          )}
          <p className="card-category">{card.category}</p>
          <h3 className="card-title">{card.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default DigitalCardList;
