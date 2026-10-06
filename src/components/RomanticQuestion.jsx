import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Heart, Smile } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function RomanticQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <section className="relative min-h-[75vh] py-20 md:py-28 flex items-center justify-center overflow-hidden bg-[#080607] px-4 sm:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(89,18,38,0.2)_0%,_rgba(8,6,7,1)_70%)] pointer-events-none" />

      <div className="max-w-xl w-full mx-auto text-center space-y-8 relative z-20">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.0 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-rose-300/80 px-3.5 py-1 rounded-full border border-rose-500/20 bg-rose-950/40">
            {birthdayConfig.romanticQuestion.title}
          </span>
        </motion.div>

        {/* Question Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-rose-100"
        >
          {birthdayConfig.romanticQuestion.question}
        </motion.h3>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => setSelectedAnswer('know')}
            className={`px-8 py-3.5 rounded-full font-serif text-lg tracking-wide border transition-all duration-300 shadow-lg ${
              selectedAnswer === 'know'
                ? 'bg-rose-700/80 border-rose-300 text-white shadow-rose-900/50 scale-105'
                : 'glass-panel border-rose-400/30 text-rose-200 hover:border-rose-400 hover:scale-105'
            }`}
          >
            {birthdayConfig.romanticQuestion.option1Text}
          </button>

          <button
            onClick={() => setSelectedAnswer('tell')}
            className={`px-8 py-3.5 rounded-full font-serif text-lg tracking-wide border transition-all duration-300 shadow-lg ${
              selectedAnswer === 'tell'
                ? 'bg-rose-700/80 border-rose-300 text-white shadow-rose-900/50 scale-105'
                : 'glass-panel border-rose-400/30 text-rose-200 hover:border-rose-400 hover:scale-105'
            }`}
          >
            {birthdayConfig.romanticQuestion.option2Text}
          </button>
        </motion.div>

        {/* Response Box */}
        <AnimatePresence mode="wait">
          {selectedAnswer && (
            <motion.div
              key={selectedAnswer}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-rose-400/30 shadow-2xl space-y-3 max-w-lg mx-auto"
            >
              <h4 className="font-handwritten text-3xl sm:text-4xl text-rose-300 text-glow-rose">
                {selectedAnswer === 'know'
                  ? birthdayConfig.romanticQuestion.option1ResponseTitle
                  : birthdayConfig.romanticQuestion.option2ResponseTitle}
              </h4>

              <p className="font-serif text-lg sm:text-xl text-rose-100 font-light leading-relaxed">
                "{selectedAnswer === 'know'
                  ? birthdayConfig.romanticQuestion.option1Response
                  : birthdayConfig.romanticQuestion.option2Response}"
              </p>

              <div className="pt-2 flex justify-center">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
