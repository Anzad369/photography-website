"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Weddings",
    description: "Elegant coverage of your special day with timeless photos.",
    image: "/images/service-wedding.jpg",
  },
  {
    title: "Baptisms",
    description: "Capturing sacred moments beautifully and professionally.",
    image: "/images/service-baptism.jpg",
  },
  {
    title: "Events",
    description: "From birthdays to corporate gatherings, memories preserved.",
    image: "/images/service-events.jpg",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-24 scroll-mt-24 bg-[#0A0A0A] text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-[#FFD700]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="object-cover w-full h-64 md:h-80 rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 rounded-b-2xl">
                <h3
                  className="text-xl md:text-2xl font-extrabold tracking-wide 
                  bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent 
                  group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
