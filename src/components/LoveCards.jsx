import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function LoveCards() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative min-h-screen py-24 md:py-36 overflow-hidden bg-[#080607] px-4 sm:px-8">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-burgundy-700/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-16 relative z-20">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-rose-300/80 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/40">
              SECRET CONFESSIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl font-light text-rose-100"
          >
            {birthdayConfig.loveCards.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm text-rose-200/60 font-light tracking-wide max-w-md mx-auto"
          >
            {birthdayConfig.loveCards.subtitle}
          </motion.p>
        </div>

        {/* 3D Flipping Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {birthdayConfig.loveCards.cards.map((card, index) => {
            const isFlipped = !!flippedCards[card.id];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="perspective-1000 h-64 cursor-pointer select-none"
                onClick={() => toggleFlip(card.id)}
              >
                <div
                  className={`w-full h-full relative transform-style-3d transition-transform duration-700 ease-out ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl p-6 glass-card border border-rose-500/25 flex flex-col justify-between items-center text-center shadow-lg hover:border-rose-400/50 hover:shadow-rose-950/50 transition-all duration-300">
                    <div className="w-full flex justify-between items-center text-xs text-rose-300/40 tracking-widest uppercase">
                      <span>CARD 0{index + 1}</span>
                      <Sparkles className="w-3.5 h-3.5 text-rose-400/40" />
                    </div>

                    <div className="space-y-3">
                      <div className="text-4xl">{card.frontIcon}</div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-semibold tracking-wider text-rose-100">
                        {card.frontTitle}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-rose-300/70 tracking-wider uppercase font-light">
                      <Heart className="w-3 h-3 fill-rose-400/50 text-rose-400" />
                      <span>Click to reveal</span>
                    </div>
                  </div>

                  {/* BACK SIDE (REVEAL) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 bg-gradient-to-br from-burgundy-900 via-rose-950 to-midnight-950 border border-rose-400/40 flex flex-col justify-between text-center shadow-2xl">
                    <div className="flex justify-between items-center text-[10px] text-rose-300/60 tracking-widest uppercase">
                      <span>FROM MY HEART</span>
                      <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
                    </div>

                    <p className="font-serif italic text-base sm:text-lg text-rose-100/95 font-light leading-relaxed my-auto">
                      "{card.revealMessage}"
                    </p>

                    <span className="text-[11px] text-rose-300/50 uppercase tracking-widest font-light">
                      Click to flip back
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
