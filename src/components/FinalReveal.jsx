import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../birthdayConfig';

export default function FinalReveal({ onTriggerPetals }) {
  const [inView, setInView] = useState(false);
  const [stage, setStage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    // Timed cinematic progression
    const timers = [
      setTimeout(() => setStage(1), 1200),  // "Shruti..."
      setTimeout(() => setStage(2), 3200),  // "Before you leave..."
      setTimeout(() => setStage(3), 5200),  // "I want you to remember one thing."
      setTimeout(() => setStage(4), 7400),  // Quick flashback montage of all photos
      setTimeout(() => setStage(5), 10500), // "my favorite one..." "...is the one where we're together."
      setTimeout(() => {
        setStage(6);                        // Climax reveal of best couple photo + "HAPPY BIRTHDAY SHRUTI"
        if (onTriggerPetals) onTriggerPetals(true);
        // Soft romantic rose & champagne fireworks
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#dd5b7c', '#e6c88b', '#ffffff', '#aa2a4c']
        });
      }, 12800),
      setTimeout(() => setStage(7), 16000), // "Here's to..." wishes list
      setTimeout(() => setStage(8), 20000), // Final heartbeat signoff
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [inView, onTriggerPetals]);

  // Flashback images array
  const flashbackPhotos = [
    birthdayConfig.photos.shrutiBlackWhite,
    birthdayConfig.photos.shrutiPink,
    birthdayConfig.photos.usOutdoor,
    birthdayConfig.photos.usCinematic,
    birthdayConfig.photos.usSelfie
  ];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => { if (!inView) setInView(true); }}
      className="relative min-h-screen py-24 md:py-36 flex flex-col items-center justify-center overflow-hidden bg-black text-center px-4 sm:px-8"
    >
      {/* Scroll trigger observer */}
      <motion.div
        onViewportEnter={() => { if (!inView) setInView(true); }}
        className="absolute top-1/4 w-1 h-1 pointer-events-none"
      />

      {/* Cinematic dark spotlight backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(75,16,35,0.35)_0%,_rgba(0,0,0,1)_85%)] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-20 space-y-12">
        
        {/* Step 1 - 3: Opening Emotional Pauses */}
        <div className="min-h-[140px] flex flex-col items-center justify-center space-y-4">
          <AnimatePresence>
            {stage >= 1 && stage < 4 && (
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.2 }}
                className="font-handwritten text-4xl sm:text-6xl text-rose-300 text-glow-rose"
              >
                {birthdayConfig.girlfriendName}...
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 2 && stage < 4 && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.2 }}
                className="font-serif text-2xl sm:text-3xl text-rose-100 font-light"
              >
                {birthdayConfig.finalReveal.secondPauseText}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage >= 3 && stage < 4 && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.2 }}
                className="font-sans text-xs sm:text-sm text-rose-300/70 uppercase tracking-widest font-light"
              >
                {birthdayConfig.finalReveal.thirdPauseText}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Step 4: Flashback Sequence */}
        {stage === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="font-serif italic text-xl text-rose-300/80">
              {birthdayConfig.finalReveal.flashPrompt}
            </p>
            <div className="flex justify-center items-center gap-3 overflow-hidden py-4">
              {flashbackPhotos.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.35, duration: 0.6 }}
                  className="w-16 h-20 sm:w-24 sm:h-32 rounded-lg overflow-hidden border border-rose-400/30 shadow-lg"
                >
                  <img src={imgSrc} alt="flashback" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 5: "my favorite one... is the one where we're together" */}
        {stage >= 5 && stage < 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-3"
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-rose-200">
              "{birthdayConfig.finalReveal.turningQuote}"
            </p>
            <h3 className="font-serif text-3xl sm:text-5xl text-rose-300 text-glow-rose font-medium">
              "{birthdayConfig.finalReveal.turningQuoteClimax}"
            </h3>
          </motion.div>
        )}

        {/* Step 6 & Beyond: Grand Couple Photo Reveal & Birthday Climax */}
        {stage >= 6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* The Main Photograph with Slow Cinematic Zoom */}
            <div className="relative max-w-md sm:max-w-lg mx-auto rounded-3xl p-3 sm:p-4 glass-panel border border-rose-400/40 shadow-[0_0_80px_rgba(221,91,124,0.4)]">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-950 relative">
                <motion.img
                  animate={{ scale: [1, 1.06] }}
                  transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  src={birthdayConfig.photos.usSelfie}
                  alt="My Favorite Place"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-5 left-4 right-4 text-center">
                  <p className="font-serif text-base sm:text-lg text-rose-100 font-light italic">
                    "{birthdayConfig.finalReveal.favoritePlace}"
                  </p>
                </div>
              </div>
            </div>

            {/* GRAND BIRTHDAY TITLE */}
            <div className="space-y-3 pt-4">
              <motion.h1
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-100 to-champagne-200 tracking-wider drop-shadow-[0_4px_25px_rgba(244,166,182,0.6)]"
              >
                {birthdayConfig.finalReveal.mainGreeting}
              </motion.h1>
              <p className="font-handwritten text-4xl sm:text-5xl text-rose-300">
                ❤️
              </p>
            </div>
          </motion.div>
        )}

        {/* Step 7: "Here's to..." Staggered List */}
        {stage >= 7 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="pt-8 max-w-xl mx-auto space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-champagne-300/80 font-light block">
              HERE'S TO...
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              {birthdayConfig.finalReveal.wishes.map((wish, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="px-4 py-2 rounded-xl glass-card border border-rose-500/20 text-rose-100/90 font-serif text-base sm:text-lg text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>{wish}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 8: Final Heartbeat & Signoff */}
        {stage >= 8 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="pt-12 pb-16 space-y-6"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400/50" />
              <Heart className="w-7 h-7 fill-rose-500 text-rose-400 animate-pulse drop-shadow-[0_0_15px_rgba(221,91,124,0.8)]" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400/50" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-rose-100 font-light">
              {birthdayConfig.finalReveal.finalLoveSign}
            </h2>

            <div className="space-y-1">
              <p className="font-sans text-xs tracking-widest text-rose-300/60 uppercase font-light">
                {birthdayConfig.finalReveal.authorSign}
              </p>
              <p className="font-handwritten text-4xl sm:text-5xl text-rose-300 text-glow-rose">
                — {birthdayConfig.myName} ❤️
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
