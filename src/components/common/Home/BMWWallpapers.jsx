import React from "react";

const BMWWallpapers = () => {
  return (
    <section className="wallpaper-section">
      <div className="wallpaper-container">
        <img
          src="./src/assets/images/bmw wallpapers/main-bmw.jpg"
          alt="BMW Main"
          className="main-image"
        />

        <img
          src="./src/assets/images/bmw wallpapers/phone-view.jpg"
          alt="Phone view"
          className="overlay-image phone"
        />

        <img
          src="./src/assets/images/bmw wallpapers/factory.jpg"
          alt="Factory"
          className="overlay-image factory"
        />
      </div>

      <h2 className="wallpaper-title">BMW Wallpapers</h2>
    </section>
  );
};

export default BMWWallpapers;
