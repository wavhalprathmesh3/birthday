import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { birthdayConfig } from './birthdayConfig';
import { romanticAudio } from './utils/audioGenerator';

// Components
import IntroScreen from './components/IntroScreen';
import ParticleBackground from './components/ParticleBackground';
import MusicControl from './components/MusicControl';
import HerSection from './components/HerSection';
import HerSmile from './components/HerSmile';
import FirstMemory from './components/FirstMemory';
import OurLittleWorld from './components/OurLittleWorld';
import CinematicMemory from './components/CinematicMemory';
import MemoryGallery from './components/MemoryGallery';
import LoveCards from './components/LoveCards';
import SecretSurprise from './components/SecretSurprise';
import LoveLetter from './components/LoveLetter';
import RomanticQuestion from './components/RomanticQuestion';
import FinalReveal from './components/FinalReveal';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [intensePetals, setIntensePetals] = useState(false);

  useEffect(() => {
    // Initialize audio system
    romanticAudio.init(birthdayConfig.music.audioPath);
  }, []);

  const handleEnterStory = () => {
    setHasEntered(true);
    romanticAudio.fadeIn(birthdayConfig.music.targetVolume || 0.30, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#080607] text-[#fae6eb] overflow-x-hidden select-none">
      {/* Dynamic Background Particle System */}
      <ParticleBackground isFrozen={isFrozen} intense={intensePetals} />

      {/* Intro Mystery Overlay Screen */}
      <AnimatePresence>
        {!hasEntered && (
          <IntroScreen onEnter={handleEnterStory} />
        )}
      </AnimatePresence>

      {/* Floating Music Control */}
      <MusicControl visible={hasEntered} />

      {/* Main Romantic Storyline */}
      {hasEntered && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="relative z-10 w-full"
        >
          {/* Subtle top ambient indicator */}
          <header className="sticky top-0 z-40 w-full py-4 px-6 flex items-center justify-between pointer-events-none backdrop-blur-[6px] border-b border-rose-500/10">
            <span className="font-handwritten text-2xl text-rose-300 pointer-events-auto">
              For {birthdayConfig.girlfriendName}
            </span>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-rose-300/40">
              A LOVE STORY
            </span>
          </header>

          {/* SCENE 2: HER — Black & White Saree Portrait */}
          <HerSection />

          {/* SCENE 3: HER SMILE — Pink Saree Portrait */}
          <HerSmile />

          {/* SCENE 4: THE FIRST MEMORY — Shift to "US" */}
          <FirstMemory />

          {/* SCENE 5: OUR LITTLE WORLD — Parallax & Unscripted moments */}
          <OurLittleWorld />

          {/* SCENE 6: CINEMATIC MEMORY — Low-Angle Cinema Subtitles */}
          <CinematicMemory />

          {/* SCENE 7: MEMORY GALLERY — Scattered Floating Photos & Lightbox */}
          <MemoryGallery />

          {/* SCENE 8: THINGS I LOVE ABOUT YOU — 3D Flipping Cards */}
          <LoveCards />

          {/* SCENE 9: THE SECRET — Mystery lock, screen darken, selfie reveal */}
          <SecretSurprise onFreezeParticles={setIsFrozen} />

          {/* SCENE 10: LOVE LETTER — Handwritten card with typewriter animation */}
          <LoveLetter />

          {/* SCENE 11: PLAYFUL MOMENT — Romantic Question & Responses */}
          <RomanticQuestion />

          {/* SCENE 12: THE FINAL REVEAL & CLIMAX — Flashback, Birthday Message, Wishes */}
          <FinalReveal onTriggerPetals={setIntensePetals} />
        </motion.main>
      )}
    </div>
  );
}
