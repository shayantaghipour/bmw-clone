// BMWSection.jsx
import React from "react";

const BMWSection = () => {
  const items = [
    {
      img: "./src/assets/images/bmw section/img1.jpg",
      category: "BMW explained",
      title: "Milestones in BMW lighting design",
    },
    {
      img: "./src/assets/images/bmw section/img2.jpg",
      category: "Technology",
      title: "Technological highlights: 15 exceptional BMW engines.",
    },
    {
      img: "./src/assets/images/bmw section/img3.jpg",
      category: "Technology",
      title:
        "From April Fool's jokes to reality: BMW innovations ahead of their time.",
    },
  ];

  return (
    <div className="wonderbmw-section">
      <div className="wonderbmw-cards">
        {items.map((item, index) => (
          <div key={index} className="wonderbmw-card">
            <img src={item.img} alt={item.title} />
            <div className="wonderbmw-text">
              <span className="wonderbmw-category">{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="wonderbmw-car">
        <img
          src="./src/assets/images/bmw section/bmw-colored.png"
          alt="BMW car"
        />
      </div>
    </div>
  );
};

export default BMWSection;
