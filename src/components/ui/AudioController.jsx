import React, { createContext, useContext, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioContext = createContext({
  playClick: () => {},
  playSuccess: () => {},
  soundEnabled: false,
  toggleSound: () => {}
});

export function AudioProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    // Lazy initialize on first interaction
    const initAudio = () => {
      if (!audioCtx) {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass) {
          setAudioCtx(new AudioCtxClass());
        }
      }
    };

    window.addEventListener('click', initAudio, { once: true });
    return () => window.removeEventListener('click', initAudio);
  }, [audioCtx]);

  // Cyber Click Synthesizer
  const playClick = () => {
    if (!soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch {
      // Audio not permitted yet
    }
  };

  // High-tech Confirmation Chime
  const playSuccess = () => {
    if (!soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.16); // G5

      gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.28);
    } catch {
      // Audio fallback
    }
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ playClick, playSuccess, soundEnabled, toggleSound }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

export function SoundToggle() {
  const { soundEnabled, toggleSound, playClick } = useAudio();

  const handleToggle = () => {
    toggleSound();
    playClick();
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 ${
        soundEnabled 
          ? 'bg-cyber-emerald/10 border-cyber-green text-cyber-green shadow-cyber-green' 
          : 'bg-cyber-surface/60 border-cyber-border text-cyber-textMuted hover:border-slate-500 hover:text-white'
      }`}
      title={soundEnabled ? 'Disable Cyber Audio' : 'Enable Cyber Audio (Synthesized Web Audio)'}
      aria-label="Toggle Cybernetic Audio"
    >
      {soundEnabled ? <Volume2 size={14} className="text-cyber-green animate-pulse" /> : <VolumeX size={14} />}
      <span className="hidden sm:inline">{soundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF'}</span>
    </button>
  );
}
