import React, { useRef } from "react";

const FeatureCard = ({ image, title, subtitle, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // برگرده به اول
    }
  };

  return (
    <div
      className="feature-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {video ? (
        <video
          ref={videoRef}
          className="feature-video"
          src={video}
          muted
          loop
          playsInline
        />
      ) : (
        <img src={image} alt={title} className="feature-image" />
      )}
      <div className="feature-text">
        <h4>{subtitle}</h4>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
