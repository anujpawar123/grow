import React from 'react';

import soundBtn from '../assets/buttons/sound-btn.png';
import btn142 from '../assets/buttons/1.42x-btn.png';
import btn285 from '../assets/buttons/2.85x-btn.png';
import betBtn from '../assets/buttons/bet-btn.png';
import randomBtn from '../assets/buttons/randon-btn.png';
import autoBtn from '../assets/buttons/auto-btn.png';
import menuBtn from '../assets/buttons/menu-btn.png';

export default function Controls({ onRandomClick, isPlaying }) {
  const handleSoundClick = () => {
    // Placeholder for sound effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <div className="controls-container">
      <button className="control-btn square-btn sound-btn" onClick={handleSoundClick}>
        <img src={soundBtn} alt="Sound" />
      </button>

      <div className="center-controls">
        <div className="top-center-controls">
          <button className="control-btn multiplier-btn" disabled>
            <img src={btn142} alt="1.42x" />
          </button>
          <button className="control-btn multiplier-btn btn-285" disabled>
            <img src={btn285} alt="2.85x" />
          </button>
        </div>
        <div className="bottom-center-controls">
          <button className="control-btn action-btn" disabled>
            <img src={betBtn} alt="Bet" />
          </button>
          <button className="control-btn action-btn random-btn" onClick={onRandomClick} disabled={isPlaying}>
            <img src={randomBtn} alt="Random" />
          </button>
          <button className="control-btn action-btn" disabled>
            <img src={autoBtn} alt="Auto" />
          </button>
        </div>
      </div>

      <button className="control-btn square-btn menu-btn" disabled>
        <img src={menuBtn} alt="Menu" />
      </button>
    </div>
  );
}
