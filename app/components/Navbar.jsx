"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll effect: change navbar opacity and shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-black/70 shadow-sm" : "bg-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Left Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link href="#hero">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[#D4AF37] cursor-pointer"
            >
              PhotoStudio
            </motion.h1>
          </Link>

          {/* Right Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
            {navLinks.slice(2).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#D4AF37] hover:scale-105 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-2xl text-[#D4AF37]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black/90 shadow-lg z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-200 hover:text-[#D4AF37] hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
