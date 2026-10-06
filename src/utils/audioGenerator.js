/**
 * Romantic Audio Engine with Web Audio API generative ambient piano
 * and seamless playback for "Aankhon Se Batana".
 * Supports smooth fade-in and volume transitions.
 */

class RomanticAudioManager {
  constructor() {
    this.audioContext = null;
    this.audioElement = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.30; // 25–35% volume as requested
    this.normalVolume = 0.30;
    this.fadeInterval = null;
    this.synthInterval = null;
    this.mode = 'mp3'; // 'mp3' or 'synth'
    this.listeners = new Set();
  }

  addListener(cb) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  notify() {
    this.listeners.forEach(cb => cb({
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      mode: this.mode,
      trackName: "Aankhon Se Batana"
    }));
  }

  init(audioPath) {
    if (this.audioElement) return;

    this.audioElement = new Audio();
    this.audioElement.src = audioPath || "/music/aankhon-se-batana.mp3";
    this.audioElement.loop = true;
    this.audioElement.volume = this.volume;
    this.audioElement.preload = "auto";

    this.audioElement.addEventListener('error', (e) => {
      console.log("Custom MP3 not found or failed to load. Seamlessly switching to generative romantic piano chords.", e);
      this.mode = 'synth';
      if (this.isPlaying) {
        this.startAmbientSynth();
      }
      this.notify();
    });

    this.audioElement.addEventListener('playing', () => {
      this.mode = 'mp3';
      this.isPlaying = true;
      this.notify();
    });

    this.audioElement.addEventListener('pause', () => {
      if (this.mode === 'mp3') {
        this.isPlaying = false;
        this.notify();
      }
    });
  }

  ensureAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Generative soft romantic acoustic piano notes fallback
  playPianoNote(freq, duration = 3.5, timeOffset = 0) {
    if (!this.audioContext) return;
    const now = this.audioContext.currentTime + timeOffset;

    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.exponentialRampToValueAtTime(250, now + duration);

    const targetGain = this.isMuted ? 0 : this.volume * 0.16;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(targetGain, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  startAmbientSynth() {
    this.ensureAudioContext();
    if (this.synthInterval) clearInterval(this.synthInterval);

    // Ethereal romantic chord progressions (Cmaj9, Am9, Fmaj7, Gsus4)
    const chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33],
      [220.00, 261.63, 329.63, 392.00, 523.25],
      [174.61, 261.63, 329.63, 349.23, 440.00],
      [196.00, 293.66, 392.00, 440.00, 587.33]
    ];

    let step = 0;
    const playNextChord = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[step % chords.length];
      step++;

      currentChord.forEach((note, idx) => {
        const offset = idx * 0.55 + (Math.random() * 0.1);
        this.playPianoNote(note, 4.0, offset);
      });
    };

    playNextChord();
    this.synthInterval = setInterval(playNextChord, 4600);
  }

  stopAmbientSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  async play() {
    this.ensureAudioContext();
    this.isPlaying = true;

    if (this.audioElement && this.mode === 'mp3') {
      try {
        await this.audioElement.play();
        this.notify();
        return;
      } catch (err) {
        console.warn("Falling back to generative acoustic ambient piano chords:", err);
        this.mode = 'synth';
      }
    }

    this.startAmbientSynth();
    this.notify();
  }

  /**
   * Smooth romantic fade-in from 0 to target volume over duration
   */
  async fadeIn(targetVol = 0.30, durationMs = 2500) {
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    this.volume = 0.02;
    this.normalVolume = targetVol;
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }

    await this.play();

    const steps = 25;
    const stepTime = durationMs / steps;
    const stepIncrement = (targetVol - 0.02) / steps;

    this.fadeInterval = setInterval(() => {
      this.volume = Math.min(targetVol, this.volume + stepIncrement);
      if (this.audioElement) {
        this.audioElement.volume = this.volume;
      }
      this.notify();

      if (this.volume >= targetVol) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
    }, stepTime);
  }

  soften(targetVol = 0.14) {
    if (this.audioElement) {
      this.audioElement.volume = targetVol;
    }
    this.volume = targetVol;
    this.notify();
  }

  restoreVolume() {
    if (this.audioElement) {
      this.audioElement.volume = this.normalVolume;
    }
    this.volume = this.normalVolume;
    this.notify();
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopAmbientSynth();
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    this.normalVolume = this.volume;
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    this.notify();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    this.notify();
  }
}

export const romanticAudio = new RomanticAudioManager();
