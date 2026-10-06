import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function IntroScreen({ onEnter }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timed cinematic text reveals
    const timer1 = setTimeout(() => setStep(1), 800);   // "Hey Shruti..."
    const timer2 = setTimeout(() => setStep(2), 2400);  // "I made something for you."
    const timer3 = setTimeout(() => setStep(3), 4200);  // "But before you see it..."
    const timer4 = setTimeout(() => setStep(4), 5800);  // Enter button

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060405] text-[#fae6eb] px-6 select-none"
    >
      {/* Subtle star particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(82,18,35,0.18)_0%,_rgba(6,4,5,1)_70%)] pointer-events-none" />

      {/* Floating subtle ambient aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-rose-900/30 to-burgundy-700/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-xl text-center space-y-8">
        {/* Step 1: Greeting */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
            >
              <span className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-rose-300 text-glow-rose block">
                Hey {birthdayConfig.girlfriendName}...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: "I made something for you." */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4 }}
              className="font-serif text-2xl sm:text-3xl text-rose-100/90 font-light tracking-wide"
            >
              {birthdayConfig.mystery.introLine2}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Step 3: "But before you see it..." */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="font-sans text-sm sm:text-base text-rose-200/60 font-light tracking-widest uppercase"
            >
              {birthdayConfig.mystery.introLine3}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Step 4: Enter Button */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="pt-6"
            >
              <button
                onClick={onEnter}
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-burgundy-800 via-rose-900 to-burgundy-900 border border-rose-400/40 text-rose-100 font-serif text-lg tracking-wider shadow-[0_0_30px_rgba(221,91,124,0.3)] hover:shadow-[0_0_45px_rgba(221,91,124,0.6)] hover:border-rose-300 transition-all duration-500 hover:scale-105 active:scale-95"
              >
                {/* Glow ring */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-md group-hover:opacity-100 opacity-60 transition-opacity" />
                
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{birthdayConfig.mystery.enterButtonText}</span>
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400/70" />
                </span>
              </button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="text-xs text-rose-300/50 mt-4 tracking-widest uppercase font-light"
              >
                Headphones recommended for the music 🎧
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom detail */}
      <div className="absolute bottom-6 text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-rose-200/20 font-light">
          A PRIVATE GIFT • OCTOBER 2026
        </span>
      </div>
    </motion.div>
  );
}
