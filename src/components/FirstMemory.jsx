import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function FirstMemory() {
  return (
    <section className="relative min-h-screen py-28 md:py-36 flex items-center justify-center overflow-hidden bg-[#080607] px-4 sm:px-8">
      {/* Background cinematic radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(114,24,46,0.25)_0%,_rgba(8,6,7,1)_70%)] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto text-center space-y-12 relative z-20">
        
        {/* Cinematic Shutter Transition Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center gap-3 text-rose-300/70 text-xs tracking-[0.4em] uppercase"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-rose-400/40" />
          <Camera className="w-4 h-4 text-rose-400 animate-pulse" />
          <span>CHAPTER TWO • THE SHIFT</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-rose-400/40" />
        </motion.div>

        {/* Text Sequence: And then... somehow... there was US */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
            className="font-serif italic text-2xl sm:text-3xl text-rose-200/60 font-light"
          >
            {birthdayConfig.firstMemory.leadIn}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="font-serif italic text-3xl sm:text-4xl text-rose-300 font-light"
          >
            {birthdayConfig.firstMemory.transitionText}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold text-rose-100 tracking-wider text-glow-rose pt-2"
          >
            THERE WAS US.
          </motion.h2>
        </div>

        {/* Couple Photo coming into focus with aperture / camera frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl sm:max-w-2xl mx-auto"
        >
          {/* Subtle warm romantic glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/15 via-rose-500/20 to-orange-500/15 blur-2xl pointer-events-none opacity-80" />

          {/* Shutter frame glow */}
          <div className="relative rounded-2xl p-2.5 sm:p-4 glass-panel border border-rose-500/30 shadow-[0_25px_60px_-15px_rgba(114,24,46,0.4)]">
            
            <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9] bg-neutral-950">
              <img
                src={birthdayConfig.photos.usOutdoor}
                alt="Us Together Candid"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Soft romantic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-rose-100 font-light z-10">
                <span className="font-serif tracking-widest uppercase">OUR FIRST MEMORY</span>
                <span className="flex items-center gap-1 text-rose-300">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span>Us</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emotional Concluding Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 1.1 }}
          className="max-w-xl mx-auto space-y-3 pt-4"
        >
          <p className="font-serif text-xl sm:text-2xl text-rose-100 font-light leading-relaxed">
            {birthdayConfig.firstMemory.description}
          </p>
          <p className="font-sans text-xs sm:text-sm tracking-widest text-rose-300/60 uppercase font-light">
            {birthdayConfig.firstMemory.subtext}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
