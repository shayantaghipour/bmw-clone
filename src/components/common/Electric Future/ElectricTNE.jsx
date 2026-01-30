import React from "react";

export default function ElectricTNE() {
  return (
    <div className="ecards">
      {/* کارت اول - عکس */}
      <div className="ecard">
        <img
          src="./src/assets/images/electric tne/cj-00-teaser-hd.webp"
          alt="BMW Films: THE CALM"
          className="ecard-media"
        />
        <h3>
          Trends <br />
          Model Cajsa Wessberg: „Design soll Identität widerspiegeln“
        </h3>
      </div>

      {/* کارت دوم - عکس */}
      <div className="ecard">
        <video className="card-media" autoPlay loop muted playsInline>
          <source
            src="./src/assets/images/electric tne/kite-01-stage-hd1.mp4"
            type="video/mp4"
          />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
        <h3>
          Nachhaltigkeit <br />
          Roderick Pijls: Kitesurfen im Bann der Elemente
        </h3>
      </div>

      {/* کارت سوم - ویدیو */}
      <div className="ecard">
        <video className="card-media" autoPlay loop muted playsInline>
          <source
            src="./src/assets/images/electric tne/eh-01-stage-hd2.mp4"
            type="video/mp4"
          />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
        <h3>
          Elektromobilität <br />
          Die besten E-Auto-Hacks für den Alltag
        </h3>
      </div>
    </div>
  );
}
