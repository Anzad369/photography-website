"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-24 bg-[#0A0A0A] text-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Info & Socials */}
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700]">Contact Us</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Questions? Booking requests? Reach out via email, phone, or follow us on social media. We’d love to hear from you!
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@photography.com" className="text-[#FFD700] underline hover:text-[#FFC700] transition-colors">
              info@photography.com
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-[#FFD700] underline hover:text-[#FFC700] transition-colors">
              +1 234 567 890
            </a>
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-[#FFD700] hover:text-[#FFC700] transition-colors">Instagram</a>
            <a href="#" className="text-[#FFD700] hover:text-[#FFC700] transition-colors">Facebook</a>
            <a href="#" className="text-[#FFD700] hover:text-[#FFC700] transition-colors">Twitter</a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFC700] transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book My Slot
            </motion.button>
          </form>
          {status && (
            <motion.p
              className="mt-4 text-center text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </motion.div>

      </div>
    </section>
  );
}
