import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';
import { romanticAudio } from '../utils/audioGenerator';

export default function SecretSurprise({ onFreezeParticles }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(0);

  const handleOpenSecret = () => {
    setIsOpen(true);
    // 1. Music temporarily becomes slightly quieter
    romanticAudio.soften(0.14);
    // 2. Particles slow down / freeze
    if (onFreezeParticles) onFreezeParticles(true);

    // Staggered cinematic reveals
    setTimeout(() => setStage(1), 600);   // Screen darkens, "I could have simply wished you Happy Birthday..."
    setTimeout(() => setStage(2), 2600);  // "But you deserve more than just a message."
    setTimeout(() => setStage(3), 4600);  // "So I made you a little piece of us."
    setTimeout(() => {
      setStage(4);                        // Reveal indoor selfie
      // Restore music volume smoothly after they absorb the photo
      setTimeout(() => {
        romanticAudio.restoreVolume();
        if (onFreezeParticles) onFreezeParticles(false);
      }, 7000);
    }, 6400);
  };

  return (
    <section className={`relative min-h-screen py-28 md:py-36 flex items-center justify-center overflow-hidden px-4 sm:px-8 transition-colors duration-1000 ${
      isOpen ? 'bg-black' : 'bg-[#060405]'
    }`}>
      {/* Dark mystery ambient spotlight */}
      <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
        isOpen ? 'opacity-20' : 'opacity-100'
      } bg-[radial-gradient(circle_at_center,_rgba(45,10,22,0.3)_0%,_rgba(6,4,5,1)_85%)]`} />

      <div className="max-w-4xl w-full mx-auto text-center space-y-10 relative z-20">
        
        {/* Initial Prompt (Disappears on click) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="space-y-6 max-w-lg mx-auto"
          >
            <div className="inline-flex p-3 rounded-full glass-panel border border-rose-500/20 text-rose-300">
              <Lock className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-3">
              <h3 className="font-handwritten text-4xl sm:text-5xl text-rose-300">
                {birthdayConfig.secretSurprise.heading}
              </h3>
              <p className="font-serif text-2xl sm:text-3xl text-rose-100 font-light">
                {birthdayConfig.secretSurprise.subheading}
              </p>
              <p className="font-sans text-xs sm:text-sm text-rose-300/60 uppercase tracking-widest font-light">
                {birthdayConfig.secretSurprise.mysteryPrompt}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleOpenSecret}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-burgundy-900 via-rose-950 to-burgundy-950 border border-rose-400/30 text-rose-100 font-serif text-lg tracking-wider hover:border-rose-300 hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_30px_rgba(221,91,124,0.3)]"
              >
                <span>{birthdayConfig.secretSurprise.buttonText}</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Revealed Story Sequence */}
        {isOpen && (
          <div className="space-y-8">
            <AnimatePresence>
              {stage >= 1 && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="font-serif text-xl sm:text-2xl text-rose-200/70 font-light italic"
                >
                  "I could have simply wished you Happy Birthday..."
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {stage >= 2 && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="font-serif text-2xl sm:text-3xl text-rose-100 font-normal"
                >
                  "But you deserve more than just a message."
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {stage >= 3 && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.4 }}
                  className="font-cinzel text-2xl sm:text-4xl text-rose-300 font-bold text-glow-rose"
                >
                  "SO I MADE YOU A LITTLE PIECE OF US."
                </motion.p>
              )}
            </AnimatePresence>

            {/* Stage 4: Climax Reveal of Indoor Selfie Photo */}
            <AnimatePresence>
              {stage >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-6"
                >
                  <div className="relative max-w-sm sm:max-w-md mx-auto rounded-2xl p-2.5 sm:p-4 glass-panel border border-rose-400/40 shadow-[0_0_60px_rgba(221,91,124,0.35)]">
                    
                    {/* Glowing outer aura */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-champagne-300/20 blur-xl pointer-events-none" />

                    <div className="overflow-hidden rounded-xl aspect-[3/4] bg-neutral-950 relative">
                      <motion.img
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "easeOut" }}
                        src={birthdayConfig.photos.usSelfie}
                        alt="Us Close Selfie"
                        className="w-full h-full object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-rose-100">
                        <span className="font-serif tracking-widest uppercase">THE SACRED PIECE</span>
                        <span className="flex items-center gap-1.5 text-rose-300">
                          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                          <span>Always close</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="font-handwritten text-3xl sm:text-4xl text-rose-300/90 pt-6"
                  >
                    {birthdayConfig.secretSurprise.photoCaption}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
