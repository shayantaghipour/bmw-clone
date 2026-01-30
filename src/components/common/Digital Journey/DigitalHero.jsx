import React from "react";

const DigitalJourney = () => {
  return (
    <section className="dj-section">
      {/* right: ویدیو */}
      <div className="dj-media">
        {/* اگر ویدیو محلی داری */}
        <video className="dj-video" autoPlay muted loop playsInline>
          <source
            src="./src/assets/videos/ef-01-stage-hd.mp4"
            type="video/mp4"
          />
          {/* فرمت جایگزین */}
          <source src="/path/to/video.webm" type="video/webm" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
      {/* left: متن */}
      <div className="dj-title">
        <h2>Digital Journey</h2>
        <p className="dj-desc">
          Noch nie war das Spektrum der Mobilität so faszinierend und der
          automobile Fortschritt so vielversprechend wie heute. Wir nehmen Sie
          mit auf eine digitale Reise zu den spannenden Themen unserer Zeit und
          durch das BMW Universum. Freude am Fahren wird transferiert in die
          digitale Zukunft. Dabei ist Digitalisierung bei BMW ein Weg, der dem
          Wohl der Menschen dient, das Vernetzen untereinander ermöglicht und
          Freude noch einfacher erlebbar macht.
        </p>
        <time className="dj-date" dateTime="2023-04-18">
          18. April 2023
        </time>
      </div>
    </section>
  );
};

export default DigitalJourney;
