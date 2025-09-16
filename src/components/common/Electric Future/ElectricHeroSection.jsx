import React from "react";

const ElectricHeroSection = () => {
  const features = [
    {
      id: 1,
      type: "video",
      src: "./src/assets/images/electric herosection/hy-01-stage-hd.mp4",
      category: "Wasserstoff",
      title: "Die BMW Reise zur Mobilität der Zukunft",
    },
    {
      id: 2,
      type: "image",
      src: "./src/assets/images/electric herosection/audiopodcast-00-teaser-hd.webp",
      category: "Audio-Kolumne",
      title: "Die Zukunft von Start-ups in der Automobil-Industrie",
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

export default ElectricHeroSection;
