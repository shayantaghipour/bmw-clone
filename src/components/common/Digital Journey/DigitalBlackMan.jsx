import React from "react";

export default function DigitalBlackMan() {
  return (
    <div className="digitalblackman-container">
      {/* سمت چپ */}
      <div className="digitalblackman-box">
        <img
          src="./src/assets/images/digital blackman/ng23-arnold-00-teaser-hd.jpg"
          alt="BMW Concept"
        />
        <div className="digitalblackman-overlay">
          <h2>BMW Concept</h2>
          <p>Progressive design language.</p>
        </div>
      </div>

      {/* سمت راست */}
      <div className="digitalblackman-box">
        <img
          src="./src/assets/images/digital blackman/dw50-00-teaser-hd.jpg"
          alt="BMW Future"
        />
        <div className="digitalblackman-overlay">
          <h2>BMW Future</h2>
          <p>Shaping tomorrow's mobility.</p>
        </div>
      </div>
    </div>
  );
}
