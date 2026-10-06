import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../birthdayConfig';

export default function HerSmile() {
  return (
    <section className="relative min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080607] via-[#150a12] to-[#080607] px-4 sm:px-8">
      {/* Warm dreamy pink aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-pink-900/20 via-rose-600/15 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left Column: Romantic Text Reveal */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-pink-300/80 px-3.5 py-1 rounded-full border border-pink-500/20 bg-pink-950/40">
              HER SMILE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-rose-50 leading-tight">
              {birthdayConfig.herSmile.title}
            </h2>
            <p className="font-serif italic text-2xl sm:text-3xl text-pink-300/90 font-light">
              {birthdayConfig.herSmile.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="font-sans text-rose-200/80 text-base sm:text-lg font-light leading-relaxed max-w-lg"
          >
            {birthdayConfig.herSmile.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="p-5 rounded-2xl glass-card border border-pink-500/20 shadow-lg"
          >
            <p className="font-serif text-lg sm:text-xl text-pink-200/90 italic">
              "{birthdayConfig.herSmile.highlight}"
            </p>
            <span className="block mt-2 font-handwritten text-2xl text-pink-300/80">
              — Always & Forever
            </span>
          </motion.div>
        </div>

        {/* Right Column: Pink Saree Portrait with Dreamy Warm Glow */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.94 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex justify-center order-2"
        >
          <div className="relative group w-full max-w-md sm:max-w-lg rounded-2xl p-2 sm:p-3 bg-gradient-to-tr from-pink-900/30 via-rose-950/40 to-burgundy-900/40 border border-pink-400/25 shadow-[0_0_50px_rgba(244,166,182,0.18)]">
            
            {/* Subtle glowing halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-amber-500/10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <div className="overflow-hidden rounded-xl relative aspect-[3/4] bg-neutral-950">
              <motion.img
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                src={birthdayConfig.photos.shrutiPink}
                alt="Shruti in Pink Saree"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Dreamy soft warm light gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080607]/80 via-transparent to-pink-950/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-3 flex items-center justify-between px-2 text-xs font-serif text-pink-200/60 tracking-widest uppercase">
              <span>PORTRAIT II • WARMTH</span>
              <span className="font-handwritten text-lg text-pink-300 lowercase">pure radiance</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
