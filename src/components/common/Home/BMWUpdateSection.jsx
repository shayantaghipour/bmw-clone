// BMWUpdateSection.jsx
import React from "react";

const updates = [
  {
    title: "Art Basel Basel 2025",
    image: "./src/assets/images/bmw updates/bmw-update1.jpg",
  },
  {
    title: "The first BMW fragrances",
    image: "./src/assets/images/bmw updates/bmw-update2.jpg",
  },
  {
    title: "Sheer charging pleasure!",
    image: "./src/assets/images/bmw updates/bmw-update3.jpg",
  },
  {
    title: "Spotify Playlist",
    image: "./src/assets/images/bmw updates/bmw-update4.jpg",
  },
];

export default function BMWUpdateSection() {
  return (
    <section className="update-section">
      <h2>STAY UP TO DATE WITH BMW.</h2>
      <div className="update-cards">
        {updates.map((item, index) => (
          <div className="update-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
