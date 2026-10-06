import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function OurLittleWorld() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate tilt angles
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-screen py-24 md:py-36 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080607] via-[#12080D] to-[#080607] px-4 sm:px-8">
      {/* Soft champagne & rose lighting glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-champagne-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-700/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20">
        
        {/* Left Column: Interactive Parallax 3D Couple Image */}
        <div className="lg:col-span-7 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.4 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="relative cursor-pointer group w-full max-w-xl sm:max-w-2xl rounded-2xl p-2.5 sm:p-4 glass-panel border border-rose-400/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Interactive specular highlight */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-40"
              style={{
                background: `radial-gradient(circle at ${50 + rotateY * 2}% ${50 - rotateX * 2}%, rgba(255,255,255,0.2), transparent 70%)`
              }}
            />

            <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9] bg-neutral-950">
              <img
                src={birthdayConfig.photos.usOutdoor}
                alt="Our Little World"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-midnight-950/20 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-rose-200/80">
                <span className="tracking-widest uppercase">MOVE CURSOR / TILT</span>
                <span className="font-handwritten text-lg text-rose-300">our world</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Emotional Memory Points */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
            className="space-y-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-champagne-300/80 px-3 py-1 rounded-full border border-champagne-400/20 bg-burgundy-950/50">
              {birthdayConfig.ourLittleWorld.subtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-rose-50 pt-2">
              {birthdayConfig.ourLittleWorld.title}
            </h2>
          </motion.div>

          {/* Staggered list of treasured unscripted moments */}
          <div className="space-y-4">
            {birthdayConfig.ourLittleWorld.moments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-2 h-2 rounded-full bg-rose-400/60 group-hover:bg-rose-300 group-hover:scale-125 transition-all duration-300" />
                <p className="font-sans text-sm sm:text-base text-rose-100/80 group-hover:text-rose-100 font-light transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="pt-4 border-t border-rose-500/15"
          >
            <p className="font-serif italic text-xl sm:text-2xl text-rose-300 text-glow-rose">
              {birthdayConfig.ourLittleWorld.conclusion}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
