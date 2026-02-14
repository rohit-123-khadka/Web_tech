import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Apply() {
  const [isOpen, setIsOpen] = useState(false);
  const [program, setProgram] = useState("BIT");

  return (
    <section className="relative min-h-screen bg-gray-950 flex flex-col justify-center items-center px-6 text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Texas College of Management & IT
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Pursue your Bachelor's degree with modern programs in management, IT,
        and more.
      </motion.p>

      <motion.button
        onClick={() => setIsOpen(true)}
        className="mt-10 bg-white text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1}}
      >
        Apply Now
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 w-full max-w-md relative shadow-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-700"
              >
                X
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Application Form
              </h2>

              <form className="flex flex-col gap-5">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <label
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-4 
                    peer-placeholder-shown:text-base 
                    peer-focus:top-2 
                    peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <label
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-4 
                    peer-placeholder-shown:text-base 
                    peer-focus:top-2 
                    peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <label
                    className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-4 
                    peer-placeholder-shown:text-base 
                    peer-focus:top-2 
                    peer-focus:text-sm"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="BIT">
                      Bachelor in Information Technology (BIT)
                    </option>
                    <option value="BHM">
                      Bachelor in Hotel Management (BHM)
                    </option>
                    <option value="BBA">
                      Bachelor of Business Administration (BBA)
                    </option>
                    <option value="BCS">
                      Bachelor of Computer Science (BCS)
                    </option>
                    <option value="MBA">
                      Master of Business Administration (MBA)
                    </option>
                    <option value="MCS">
                      Master of Computer Science (MCS)
                    </option>
                  </select>

                  <label className="absolute left-4 top-2 text-sm text-gray-500">
                    Select Program
                  </label>
                </div>

                <textarea
                  rows={3}
                  placeholder="Additional Notes"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-900 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition-all"
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Apply;
