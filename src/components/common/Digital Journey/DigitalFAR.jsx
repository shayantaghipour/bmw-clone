import React from "react";

const data = [
  {
    id: 1,
    title: "Future of Tech",
    desc: "Die Technologie der Zukunft heute erleben: Entertainment",
    img: "/src/assets/images/digital far/img1.jpg",
  },
  {
    id: 2,
    title: "Audio-Kolumne",
    desc: "Die Zukunft von industriellen Technologie-Trends",
    img: "/src/assets/images/digital far/img2.jpg",
  },
  {
    id: 3,
    title: "Rafael Lozano-Hemmer",
    desc: "Das Unsichtbare sichtbar machen",
    img: "/src/assets/images/digital far/img3.jpg",
  },
];

const DigitalFAR = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="image-wrapper">
            <img src={item.img} alt={item.title} />
          </div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DigitalFAR;
