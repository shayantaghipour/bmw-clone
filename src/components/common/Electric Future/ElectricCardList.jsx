import React from "react";

export default function ElectricCardList() {
  return (
    <div className="ecards">
      {/* کارت اول - عکس */}
      <div className="ecard">
        <img
          src="./src/assets/images/electric cardlist/tc-00-teaser-hd.webp"
          alt="BMW Films: THE CALM"
          className="ecard-media"
        />
        <h3>BMW Films: THE CALM</h3>
      </div>

      {/* کارت دوم - عکس */}
      <div className="ecard">
        <img
          src="./src/assets/images/electric cardlist/iow-00-teaser-hd.webp"
          alt="BMW als Impulsgeber"
          className="ecard-media"
        />
        <h3>
          THE ICON <br />
          BMW als Impulsgeber für eine nachhaltige Mobilität
        </h3>
      </div>

      {/* کارت سوم - ویدیو */}
      <div className="ecard">
        <video className="card-media" autoPlay loop muted playsInline>
          <source
            src="src/assets/images/electric cardlist/i7-01-stage-hd.mp4"
            type="video/mp4"
          />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
        <h3>
          BMW i7 <br />
          Eine neue Sichtweise
        </h3>
      </div>
    </div>
  );
}
