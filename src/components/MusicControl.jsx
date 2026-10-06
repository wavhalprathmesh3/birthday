import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music2 } from 'lucide-react';
import { romanticAudio } from '../utils/audioGenerator';

export default function MusicControl({ visible = true }) {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    isMuted: false,
    volume: 0.30,
    trackName: "Aankhon Se Batana"
  });

  useEffect(() => {
    const unsubscribe = romanticAudio.addListener((state) => {
      setAudioState(state);
    });
    return unsubscribe;
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 select-none">
      {/* Floating Pill: ♫ Aankhon Se Batana */}
      <button
        onClick={() => romanticAudio.toggle()}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#12080d]/85 backdrop-blur-md border border-rose-500/25 text-rose-200/90 hover:text-white hover:border-rose-400/50 transition-all duration-300 shadow-xl hover:shadow-[0_4px_20px_rgba(221,91,124,0.25)]"
        title={audioState.isPlaying ? "Pause 'Aankhon Se Batana'" : "Play 'Aankhon Se Batana'"}
      >
        {/* Subtle audio wave animation when playing */}
        <div className="flex items-center gap-[3px] h-3.5 px-0.5">
          <span className={`w-[2.5px] rounded-full bg-rose-400 transition-all duration-300 ${
            audioState.isPlaying ? 'h-3 animate-pulse' : 'h-1.5 opacity-60'
          }`} />
          <span className={`w-[2.5px] rounded-full bg-rose-300 transition-all duration-300 ${
            audioState.isPlaying ? 'h-4 animate-bounce' : 'h-2 opacity-60'
          }`} style={{ animationDuration: '0.8s' }} />
          <span className={`w-[2.5px] rounded-full bg-rose-400 transition-all duration-300 ${
            audioState.isPlaying ? 'h-2.5 animate-pulse' : 'h-1 opacity-60'
          }`} style={{ animationDuration: '1.2s' }} />
        </div>

        {/* Music Title label */}
        <span className="text-xs sm:text-[13px] font-sans font-light tracking-wide text-rose-100 flex items-center gap-1.5">
          <span>♫</span>
          <span>Aankhon Se Batana</span>
        </span>

        {/* Muted or volume icon indicator */}
        <span className="text-rose-300/60 group-hover:text-rose-200 pl-0.5">
          {audioState.isPlaying ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-rose-400/70" />
          )}
        </span>
      </button>
    </div>
  );
}
