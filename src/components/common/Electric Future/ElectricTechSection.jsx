import React from "react";

const ElectricTechSection = () => {
  const features = [
    {
      id: 1,
      type: "image",
      src: "./src/assets/images/electric techsection/fz-00-teaser-hd.webp",
      category: "BMW x Nikita Gale",
      title: "„Das Auto ist immer da, es fühlt sich fast unsichtbar an“",
    },
    {
      id: 2,
      type: "image",
      src: "./src/assets/images/electric techsection/ec-00-teaser-hd.webp",
      category: "Driven by your cheers",
      title: "Aufbruch ins Elektrozeitalter",
    },
  ];

  return (
    <section className="digitalfeature-section">
      {features.map((item) => (
        <div className="digitalfeature-card" key={item.id}>
          <div className="media-wrapper">
            <img src={item.src} alt={item.title} />
            <div className="overlay"></div>
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

export default ElectricTechSection;
