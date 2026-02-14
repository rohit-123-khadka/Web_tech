import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaNetworkWired, FaDatabase, FaUsers } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function BIT() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-4">Bachelor of Information Technology (BIT)</h1>
          <p className="text-xl max-w-xl mx-auto">
            Empowering the next generation of IT professionals with skills in programming, networking, and innovation.
          </p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">About BIT</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          The BIT program focuses on practical and theoretical knowledge in Information Technology. Students
          explore programming, networks, databases, and software development while gaining hands-on experience
          through projects and labs.
        </p>
      </motion.section>

      {/* Curriculum Section */}
      <motion.section
        className="py-20 bg-white px-6 max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Curriculum Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaLaptopCode size={40} />, title: "Programming", desc: "C, Java, Python, Web Development." },
            { icon: <FaNetworkWired size={40} />, title: "Networking", desc: "CCNA, Network Security, IoT basics." },
            { icon: <FaDatabase size={40} />, title: "Databases", desc: "MySQL, MongoDB, Data Modeling." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-100 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="mb-4 text-blue-600">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Career Paths */}
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Career Paths</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaLaptopCode size={40} />, title: "Software Developer" },
            { icon: <FaNetworkWired size={40} />, title: "Network Engineer" },
            { icon: <FaUsers size={40} />, title: "IT Consultant" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-green-100 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="mb-4 text-green-600">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects & Labs */}
      <motion.section
        className="py-20 bg-gray-100 px-6 max-w-6xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects & Labs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
              <p>Hands-on project in web development, networking, or database design.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">Join BIT Today</h2>
        <p className="mb-8 text-lg">
          Take the first step towards a rewarding career in Information Technology.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </motion.button>
      </motion.section>
    </div>
  );
}

export default BIT;
