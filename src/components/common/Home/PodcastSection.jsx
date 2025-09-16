import React from "react";
import ImageSlider from "./ImageSlider";

const PodcastSection = () => {
  return (
    <div className="podcast-section" style={{ display: "flex", gap: "2rem" }}>
      <div className="text-section" style={{ flex: 1 }}>
        <h2 className="title">
          THE BMW
          <br />
          PODCAST:
          <br />
          CHANGING
          <br />
          LANES
        </h2>

        <p className="description">
          Changing Lanes is the official podcast from BMW. In these audio
          series, we take you with us on new journeys through the BMW universe.{" "}
          <br />
          Find out more about sustainability, innovation, technology, mobility
          and the latest trends. <br />
          You can find and subscribe to Changing Lanes on all major podcast
          platforms, so tune in!
        </p>

        <button className="listen-btn">Listen now</button>
      </div>

      <div className="slider-section" style={{ flex: 1 }}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default PodcastSection;
