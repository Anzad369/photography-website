"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const allPhotos = [
  { src: "/images/portfolio1.jpg" },
  { src: "/images/portfolio2.jpg" },
  { src: "/images/portfolio3.jpg" },
  { src: "/images/portfolio4.jpg" },
  { src: "/images/portfolio5.jpg" },
];

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "auto";
  }, [lightboxIndex]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () => setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
  const prevPhoto = () => setLightboxIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);

  return (
    <section id="portfolio" className="py-24 scroll-mt-24 bg-[#0A0A0A] text-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFD700]">
          Gallery
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {allPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative mb-4 cursor-pointer overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={photo.src}
                alt="Gallery photo"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[110] text-white text-3xl hover:text-[#FFD700]"
            >
              ×
            </button>

            {/* Animated Image with fade + smooth transition */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={allPhotos[lightboxIndex].src}
                  alt="Gallery photo"
                  fill
                  className="object-contain rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD700]/40 text-white text-2xl flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD700]/40 text-white text-2xl flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
