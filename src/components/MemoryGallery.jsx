import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { birthdayConfig } from '../birthdayConfig';

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const photos = birthdayConfig.memoryGallery.items;

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % photos.length;
    setSelectedIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + photos.length) % photos.length;
    setSelectedIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  // Subtle rotation offsets for physical polaroid scattered feel
  const rotations = [-2.5, 3.2, -1.8, 2.7, -3.1];

  return (
    <section className="relative min-h-screen py-24 md:py-36 overflow-hidden bg-gradient-to-b from-[#080607] via-[#14080e] to-[#080607] px-4 sm:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto space-y-16 relative z-20">
        
        {/* Gallery Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-rose-300/80 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/40">
              MEMORIES IN SPACE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl font-light text-rose-100"
          >
            {birthdayConfig.memoryGallery.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm text-rose-200/60 font-light tracking-wide max-w-md mx-auto"
          >
            {birthdayConfig.memoryGallery.subtitle}
          </motion.p>
        </div>

        {/* Scattered Romantic Photo Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {photos.map((photo, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.0, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                style={{ rotate: `${rot}deg` }}
                onClick={() => openLightbox(photo, index)}
                className="group relative cursor-pointer rounded-2xl p-3.5 bg-gradient-to-b from-[#1b0a13] to-[#12070c] border border-rose-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:border-rose-400/50 hover:shadow-[0_20px_45px_rgba(221,91,124,0.25)] transition-all duration-500"
              >
                {/* Polaroid pin / tape simulation */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-rose-200/20 backdrop-blur-sm rounded-sm border border-rose-300/20 shadow-sm" />

                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-neutral-950">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient & Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-rose-950/20 backdrop-blur-[2px]">
                    <div className="p-3 rounded-full bg-black/60 border border-rose-400/40 text-rose-200 shadow-xl">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 right-3 text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-rose-200 border border-rose-400/20">
                    {photo.tag}
                  </div>
                </div>

                {/* Caption below photo */}
                <div className="pt-3 pb-1 px-1 space-y-1 text-left">
                  <p className="font-serif text-lg text-rose-100 group-hover:text-rose-200 transition-colors font-medium">
                    "{photo.caption}"
                  </p>
                  <p className="font-sans text-xs text-rose-300/60 font-light truncate">
                    {photo.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Special Video Memory Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.8 }}
            whileHover={{ scale: 1.04, rotate: 0 }}
            style={{ rotate: '1.8deg' }}
            className="group relative rounded-2xl p-3.5 bg-gradient-to-b from-[#1b0a13] to-[#12070c] border border-rose-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:border-rose-400/50 transition-all duration-500"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-rose-200/20 backdrop-blur-sm rounded-sm border border-rose-300/20 shadow-sm" />

            <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-neutral-950 flex items-center justify-center">
              <video
                src={birthdayConfig.photos.memoryVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
              <div className="absolute top-3 right-3 text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-rose-200 border border-rose-400/20 flex items-center gap-1">
                <Play className="w-2.5 h-2.5 fill-rose-300" />
                <span>Motion Memory</span>
              </div>
            </div>

            <div className="pt-3 pb-1 px-1 text-left">
              <p className="font-serif text-lg text-rose-100 font-medium">
                "Moments in motion."
              </p>
              <p className="font-sans text-xs text-rose-300/60 font-light">
                Every fleeting smile captured forever.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full glass-panel border border-rose-400/30 text-rose-200 hover:text-white hover:scale-110 transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full glass-panel border border-rose-400/30 text-rose-200 hover:text-white hover:scale-110 transition-all z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full glass-panel border border-rose-400/30 text-rose-200 hover:text-white hover:scale-110 transition-all z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[90vh] flex flex-col items-center glass-panel rounded-2xl p-4 sm:p-6 border border-rose-500/30 shadow-2xl overflow-y-auto"
            >
              <div className="relative w-full max-h-[62vh] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  className="max-h-[62vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="w-full text-center mt-5 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-rose-100 font-medium">
                  "{selectedPhoto.caption}"
                </h3>
                <p className="font-sans text-sm sm:text-base text-rose-200/80 font-light">
                  {selectedPhoto.subtitle}
                </p>
                <div className="flex items-center justify-center gap-2 pt-2 text-xs text-rose-300/50 uppercase tracking-widest">
                  <Heart className="w-3.5 h-3.5 fill-rose-400/60 text-rose-400/60" />
                  <span>Shruti & {birthdayConfig.myName}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
