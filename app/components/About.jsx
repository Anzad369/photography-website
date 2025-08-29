"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 scroll-mt-24 bg-[#0A0A0A] text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Photographer main photo */}
        <motion.div
          className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/photographer.jpeg"
            alt="Photographer at work"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700]">
            About PhotoStudio
          </h2>
          <p className="text-gray-300 mb-4 text-lg md:text-xl leading-relaxed">
            We are passionate storytellers who capture emotions, laughter, and memories that last a lifetime. Specializing in weddings, baptisms, and events, we aim to deliver timeless photographs that you’ll cherish forever.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            Our team combines creativity, professionalism, and attention to detail to ensure every moment is beautifully captured. Let us tell your story through our lens.
          </p>

        
        </motion.div>
      </div>
    </motion.section>
  );
}
