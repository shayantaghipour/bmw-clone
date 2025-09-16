import React from "react";

export default function ElectricCardList() {
  return (
    <div className="fcards">
      {/* کارت اول */}
      <div className="fcard">
        <img
          src="./src/assets/images/electric ree/al-000-teaser-hd.jpg"
          alt="BMW Films: THE CALM"
          className="fcard-image"
        />
        <h4 className="fcard-heading">Roadtrip Norwegen</h4>
        <p className="fcard-text">
          Natur bewusst erfahren – nachhaltig reisen im BMW iX
        </p>
      </div>

      {/* کارت دوم */}
      <div className="fcard">
        <img
          src="./src/assets/images/electric ree/hzces-00-teaser-hd.webp"
          alt="BMW als Impulsgeber"
          className="fcard-image"
        />
        <h4 className="fcard-heading">Elektrisierender Sound</h4>
        <p className="fcard-text">
          Wie BMW den Sound elektrischer Fahrfreude komponiert
        </p>
      </div>

      {/* کارت سوم */}
      <div className="fcard">
        <img
          src="./src/assets/images/electric ree/scz-00-teaser-hd.webp"
          alt="Supercar Blondie"
          className="fcard-image"
        />
        <h4 className="fcard-heading">Elektrisierende Mitfahrer</h4>
        <p className="fcard-text">
          Supercar Blondie auf elektrischer Fahrt mit Hans Zimmer
        </p>
      </div>
    </div>
  );
}
