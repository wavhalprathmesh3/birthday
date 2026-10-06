import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Heart } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function LoveLetter() {
  const fullText = birthdayConfig.loveLetter.body.replace('[MY NAME]', birthdayConfig.myName);
  // Split into lines preserving empty spacing
  const lines = fullText.split('\n');
  const [visibleLinesCount, setVisibleLinesCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleLinesCount < lines.length) {
      // Pause timing between lines: shorter for blank lines, comfortable for text lines
      const currentLine = lines[visibleLinesCount];
      const isBlank = !currentLine || currentLine.trim() === '';
      const pauseDuration = isBlank ? 300 : 700;

      const timer = setTimeout(() => {
        setVisibleLinesCount(prev => prev + 1);
      }, pauseDuration);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, [hasStarted, visibleLinesCount, lines]);

  const showAllAtOnce = () => {
    setHasStarted(true);
    setVisibleLinesCount(lines.length);
    setIsFinished(true);
  };

  return (
    <section className="relative min-h-screen py-24 md:py-36 flex items-center justify-center overflow-hidden bg-[#070406] px-4 sm:px-8">
      {/* Warm intimate candle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-champagne-400/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto relative z-20 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
            className="inline-flex items-center gap-2 text-rose-300/80 text-xs tracking-[0.3em] uppercase"
          >
            <Feather className="w-4 h-4 text-rose-400" />
            <span>A PRIVATE LETTER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-handwritten text-4xl sm:text-6xl text-rose-200 text-glow-rose"
          >
            {birthdayConfig.loveLetter.heading}
          </motion.h2>
        </div>

        {/* Parchment Love Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          onViewportEnter={() => {
            if (!hasStarted) setHasStarted(true);
          }}
          className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-[#180a13]/95 via-[#13060e]/95 to-[#0e040a]/95 border border-rose-400/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
        >
          {/* Subtle vintage border ornament */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-rose-400/40 pointer-events-none" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-rose-400/40 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-rose-400/40 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-rose-400/40 pointer-events-none" />

          {/* Wax Seal Emblem */}
          <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-burgundy-900 to-rose-700 border-2 border-champagne-300/50 flex items-center justify-center shadow-lg shadow-rose-950/70">
            <Heart className="w-5 h-5 fill-champagne-200 text-champagne-200" />
          </div>

          {/* Letter Content: Line by Line with Pause */}
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center text-xs tracking-widest text-rose-300/50 uppercase border-b border-rose-500/15 pb-4">
              <span>OCTOBER 2026</span>
              <span>TO SHRUTI • WITH ALL MY HEART</span>
            </div>

            <div className="font-serif text-lg sm:text-xl text-rose-100/90 leading-relaxed font-light min-h-[300px] space-y-2">
              {lines.slice(0, visibleLinesCount).map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6 }}
                  className={line.trim() === '' ? 'h-3' : 'leading-relaxed'}
                >
                  {line}
                </motion.p>
              ))}

              {!isFinished && (
                <span className="inline-block w-2 h-4 bg-rose-400/80 animate-pulse mt-1" />
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-rose-500/15 text-xs">
              <span className="font-handwritten text-2xl text-rose-300/80">
                Forever yours, {birthdayConfig.myName} ❤️
              </span>

              {!isFinished && (
                <button
                  onClick={showAllAtOnce}
                  className="px-3.5 py-1.5 rounded-full glass-panel text-rose-300/80 hover:text-white border border-rose-400/20 transition-all text-xs"
                >
                  Read entire letter
                </button>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
