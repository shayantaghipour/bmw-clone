import React, { useState, useRef } from "react";

const models = [
  {
    name: "BMW M4",
    id: "m4",
    image: "./src/assets/images/bmw models/m4.png",
    startSound: "./src/assets/audio/m4-start.mp3",
    chimesSound: "./src/assets/audio/m4-chimes.mp3",
    revSound: "./src/assets/audio/m4-rev.mp3",
    idleSound: "./src/assets/audio/m4-idle.mp3",
  },
  {
    name: "BMW i8",
    id: "i8",
    image: "./src/assets/images/bmw models/i8.png",
    startSound: "./src/assets/audio/i8-start.mp3",
    revSound: "./src/assets/audio/i8-rev.mp3",
    idleSound: "./src/assets/audio/i8-idle.mp3",
  },
  {
    name: "BMW X5",
    id: "x5",
    image: "./src/assets/images/bmw models/x5.png",
    startSound: "./src/assets/audio/x5-start.mp3",
    chimesSound: "./src/assets/audio/x5-chimes.mp3",
    revSound: "./src/assets/audio/x5-rev.mp3",
    idleSound: "./src/assets/audio/x5-idle.mp3",
  },
  {
    name: "BMW M3 E92",
    id: "M3",
    image: "./src/assets/images/bmw models/m3.png",
    startSound: "./src/assets/audio/m3-start.mp3",
    chimesSound: "./src/assets/audio/m3-chimes.mp3",
    revSound: "./src/assets/audio/m3-rev.mp3",
    idleSound: "./src/assets/audio/m3-idle.mp3",
  },
];

const BMWShowroom = () => {
  const [selected, setSelected] = useState(null);
  const [started, setStarted] = useState(false);
  const idleAudioRef = useRef(null);

  const handleStart = () => {
    const startAudio = new Audio(selected.startSound);
    startAudio.play();

    startAudio.onended = () => {
      if (selected.chimesSound) {
        const chimesAudio = new Audio(selected.chimesSound);
        chimesAudio.play();

        chimesAudio.onended = () => {
          idleAudioRef.current = new Audio(selected.idleSound);
          idleAudioRef.current.loop = true;
          idleAudioRef.current.volume = 0.8;
          idleAudioRef.current.play();
        };
      } else {
        idleAudioRef.current = new Audio(selected.idleSound);
        idleAudioRef.current.loop = true;
        idleAudioRef.current.volume = 0.8;
        idleAudioRef.current.play();
      }
    };

    setStarted(true);
  };

  const handleRev = () => {
    const revAudio = new Audio(selected.revSound);
    revAudio.play();
  };

  const handleStop = () => {
    if (idleAudioRef.current) {
      idleAudioRef.current.pause();
      idleAudioRef.current.currentTime = 0;
    }
    setStarted(false);
  };

  return (
    <section className="showroom">
      <h2>ALL BMW MODELS</h2>
      <div className="model-selector">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => {
              setSelected(model);
              setStarted(false);
              if (idleAudioRef.current) {
                idleAudioRef.current.pause();
                idleAudioRef.current.currentTime = 0;
              }
            }}
          >
            {model.name}
          </button>
        ))}
      </div>

      {selected && (
        <div className="car-display">
          <img
            src={selected.image}
            alt={selected.name}
            className={`car-image ${started ? "active" : ""}`}
          />

          {!started && (
            <button className="start-button" onClick={handleStart}>
              <img src="./src/assets/images/start-button.png" alt="Start" />
            </button>
          )}

          {started && (
            <div className="engine-controls">
              <button className="rev-button" onClick={handleRev}>
                Rev (Pedal)
              </button>
              <button className="stop-button" onClick={handleStop}>
                <img src="./src/assets/images/start-button.png" alt="Start" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default BMWShowroom;
