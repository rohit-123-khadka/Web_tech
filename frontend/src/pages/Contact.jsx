import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold hover:text-red-300 transition">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed hover:text-blue-300 transition">
            Have questions or want to work with us? Send us a message and we’ll
            respond as soon as possible.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition">
              <MapPin className="w-5 h-5" />
              <span>Kathmandu, Nepal</span>
            </div>

            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition">
              <Phone className="w-5 h-5" />
              <span>+977 9801333224</span>
            </div>

            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition">
              <Mail className="w-5 h-5" />
              <span>enquiry@texasintl.edu.np</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
        >
          <form className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-white"
              />
              <label
                className="absolute left-0 top-3 text-gray-500 text-sm transition-all duration-300
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-sm
        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-white"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-white"
              />
              <label
                className="absolute left-0 top-3 text-gray-500 text-sm transition-all duration-300
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-sm
        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-white"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="4"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-700 text-white py-3 focus:outline-none focus:border-white resize-none"
              ></textarea>
              <label
                className="absolute left-0 top-3 text-gray-500 text-sm transition-all duration-300
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-sm
        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-white"
              >
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-3 rounded-lg font-medium transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
