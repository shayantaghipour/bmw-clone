import React from "react";

function CustomLoader() {
  return (
    <div className="loader-container">
      <img
        src="./src/assets/images/bmw-emoji-car.png"
        alt="Loading BMW"
        className="animated-car"
      />
      <div className="dust-trail"></div>
    </div>
  );
}

export default CustomLoader;
