"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen relative flex flex-col justify-center items-center text-center text-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* dark overlay */}
      </div>

      {/* Heading */}
      <motion.h1
        className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6 text-[#FFD700] z-10`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Capturing Your Timeless Moments
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className={`${montserrat.className} text-lg md:text-2xl max-w-2xl mb-8 z-10 text-gray-300`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Weddings • Baptisms • Events
      </motion.p>

      {/* Book My Slot Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-10"
      >
        <Link
          href="#contact"
          className="bg-[#FFD700] text-black px-8 py-4 rounded-full text-lg font-semibold shadow-xl ring-2 ring-[#FFD700] hover:bg-[#FFC700] hover:scale-105 transition-all duration-300"
        >
          Book My Slot
        </Link>
      </motion.div>
    </motion.section>
  );
}
