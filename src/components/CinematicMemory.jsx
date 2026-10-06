import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Play } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function CinematicMemory() {
  const [barsOpen, setBarsOpen] = useState(false);

  return (
    <section className="relative min-h-screen py-24 md:py-36 flex flex-col items-center justify-center overflow-hidden bg-[#060405] px-4 sm:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,12,24,0.4)_0%,_rgba(6,4,5,1)_80%)] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto space-y-8 relative z-20 text-center">
        
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          className="flex items-center justify-center gap-2 text-rose-300/70 text-xs tracking-[0.3em] uppercase"
        >
          <Film className="w-4 h-4 text-rose-400" />
          <span>{birthdayConfig.cinematicMemory.badge}</span>
        </motion.div>

        {/* Cinematic Widescreen Viewport */}
        <div className="relative mx-auto w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.95)] border border-rose-500/20">
          
          {/* Top Letterbox Bar */}
          <motion.div
            initial={{ height: "14%" }}
            whileInView={{ height: barsOpen ? "0%" : "10%" }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 bg-[#060405] z-30 flex items-center justify-center pointer-events-none transition-all duration-1000"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-rose-200/20">
              CINEMA SCOPE • 2.39 : 1
            </span>
          </motion.div>

          {/* Bottom Letterbox Bar */}
          <motion.div
            initial={{ height: "14%" }}
            whileInView={{ height: barsOpen ? "0%" : "10%" }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 bg-[#060405] z-30 flex items-center justify-center pointer-events-none transition-all duration-1000"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-rose-200/20">
              SCENE • STILL IN LOVE
            </span>
          </motion.div>

          {/* Film Container with Ken Burns Slow Zoom */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1.02 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 12, ease: "easeOut" }}
              src={birthdayConfig.photos.usCinematic}
              alt="Cinematic Shot of Us"
              className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
              loading="lazy"
            />

            {/* Subtle Vignette & Film Light Leak */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-rose-500/15 mix-blend-screen pointer-events-none" />

            {/* Movie Subtitles Overlay */}
            <div className="absolute bottom-12 sm:bottom-16 left-4 right-4 z-40 text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="space-y-2 inline-block max-w-2xl bg-black/40 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10"
              >
                <p className="font-sans text-sm sm:text-base md:text-lg text-[#f7e8a9] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  "{birthdayConfig.cinematicMemory.quoteLine1}"
                </p>
                <p className="font-sans text-sm sm:text-base md:text-lg text-[#f7e8a9] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  "{birthdayConfig.cinematicMemory.quoteLine2}"
                </p>
                <p className="font-serif italic text-lg sm:text-2xl text-rose-200 font-normal pt-1">
                  "{birthdayConfig.cinematicMemory.quoteLine3}{" "}
                  <span className="font-bold text-rose-400">{birthdayConfig.cinematicMemory.climaxWord}</span>"
                </p>
              </motion.div>
            </div>
          </div>

          {/* Control overlay toggle button */}
          <button
            onClick={() => setBarsOpen(!barsOpen)}
            className="absolute top-4 right-4 z-40 text-xs px-3 py-1 rounded-full glass-panel text-rose-200/80 hover:text-white border border-rose-400/20 transition-all"
          >
            {barsOpen ? "Add Cinema Bars" : "Expand Full View"}
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="font-handwritten text-2xl sm:text-3xl text-rose-300/80"
        >
          {birthdayConfig.cinematicMemory.footerText}
        </motion.p>

      </div>
    </section>
  );
}
