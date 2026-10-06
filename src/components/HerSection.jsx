import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { birthdayConfig } from '../birthdayConfig';

export default function HerSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform states for cinematic zoom & reveal
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [1.15, 1.0, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080607] via-[#12080D] to-[#080607] px-4 sm:px-8"
    >
      {/* Subtle backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(89,18,38,0.22)_0%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left/Main: Cinematic Black and White Portrait */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(18px)", scale: 1.12 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex justify-center order-2 lg:order-1"
        >
          <div className="relative group w-full max-w-md sm:max-w-lg rounded-2xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-rose-900/40 via-burgundy-900/30 to-midnight-900/60 border border-rose-500/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Film frame corner highlights */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rose-400/50 z-20 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-rose-400/50 z-20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-rose-400/50 z-20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rose-400/50 z-20 pointer-events-none" />

            <div className="overflow-hidden rounded-xl relative aspect-[3/4] bg-neutral-950">
              <motion.img
                style={{ scale }}
                src={birthdayConfig.photos.shrutiBlackWhite}
                alt="Shruti Portrait"
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-midnight-950/30 pointer-events-none" />
              
              {/* Grain & subtle light streak */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-champagne-300/10 mix-blend-screen pointer-events-none" />
            </div>

            <div className="mt-3 flex items-center justify-between px-2 text-xs font-serif text-rose-200/60 tracking-widest uppercase">
              <span>PORTRAIT I • TIMELESS</span>
              <span className="font-handwritten text-lg text-rose-300 lowercase">her grace</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Emotional Writing & Reveal */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-1 lg:order-2 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-rose-300/80 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/40">
              HER
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-rose-100 leading-tight">
              {birthdayConfig.herSection.title}
            </h2>
            <p className="font-serif italic text-2xl sm:text-3xl text-rose-300 font-light">
              {birthdayConfig.herSection.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="font-sans text-rose-200/80 text-base sm:text-lg font-light leading-relaxed max-w-lg"
          >
            {birthdayConfig.herSection.mainThought}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="pt-2"
          >
            <span className="font-handwritten text-4xl sm:text-5xl text-rose-300/90 text-glow-rose inline-block">
              {birthdayConfig.herSection.handwrittenNote}
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
