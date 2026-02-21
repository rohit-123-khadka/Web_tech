import React, { useState } from "react";
import { motion } from "framer-motion";

function Apply() {
  const [program, setProgram] = useState("BIT");

  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12">

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SIDE - Welcome Content */}
        <motion.div
          className="flex-1 text-center lg:text-left mt-14 md:mt-0"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Welcome to <br />
            <span className="text-blue-500">
              Texas College of Management & IT
            </span>
          </h1>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Pursue your Bachelor's or Master's degree with modern programs in
            Management, IT, and emerging technologies.
          </motion.p>

          <motion.div
            className="mt-8 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Application Form */}
        <motion.div
          className="flex-1 w-full bg-gray-900 rounded-2xl md:mt-28 shadow-2xl p-6 sm:p-8 md:p-10"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Application Form
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Full Name</label>
              <input
                type="text"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Email Address</label>
              <input
                type="email"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Program */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Select Program</label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              >
                <option value="BIT">Bachelor in Information Technology (BIT)</option>
                <option value="BHM">Bachelor in Hotel Management (BHM)</option>
                <option value="BBA">Bachelor of Business Administration (BBA)</option>
                <option value="BCS">Bachelor of Computer Science (BCS)</option>
                <option value="MBA">Master of Business Administration (MBA)</option>
                <option value="MCS">Master of Computer Science (MCS)</option>
              </select>
            </div>

            {/* Address */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium">Address</label>
              <input
                type="text"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Notes */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium">Additional Notes</label>
              <textarea
                rows={4}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-700 px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all"
              >
                Submit Application
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Apply;