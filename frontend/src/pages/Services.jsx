import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaGraduationCap, FaNetworkWired } from "react-icons/fa";

// Image imports
const collegeImg = "/images/r4.jpg";
const facilitiesImg = "/images/r5.jpg";

// Helper function for downloading PDFs
const handleDownload = (filePath, fileName) => {
  // Open PDF in a new tab
  window.open(filePath, "_blank");

  // Trigger download
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Features data
const features = [
  {
    icon: <FaLaptop />,
    title: "Professional Courses",
    desc: "Hands-on courses in IT, Management, and Cyber-Security.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Mandatory Internship",
    desc: "Gain real industry experience with 100% placement opportunities.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Global Partnerships",
    desc: "Courses designed in affiliation with Lincoln University College.",
  },
];

// Facilities data
const facilities = [
  "Sophisticated Computer Labs",
  "Digital Texas Education System",
  "IoT Lab",
  "AI Lab",
  "Robotics Lab",
  "VFX Studio",
  "CEH/CHFI Lab",
  "SIEM/SOC Lab",
  "Rich E-Library Resources",
  "Free Internet Access",
  "Industry-Specific Workshops",
  "Cafeteria with Diverse Food Options",
  "Career Services Center",
  "Well-Furnished Classrooms",
  "Hostel Facilities with Extra Coaching Classes",
  "Educational and Sports Activities",
  "Networking Opportunities",
];

function Services() {
  return (
    <section className="relative bg-gray-950 text-white py-40 px-6 overflow-hidden">
      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-30">
        <motion.div
          className="lg:w-1/2 w-full overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={collegeImg}
            alt="Texas College of Management and IT"
            className="w-full h-96 object-cover rounded-[50%_50%] hover:scale-105 transition-transform duration-500 mt-10"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
            How did TCMIT come to be?
          </h2>
          <p className="text-gray-300">
            <strong>Texas College of Management and IT</strong>, located at
            Siphal, Kathmandu, is a sister unit of Texas Int’l Education Network
            (2010). The college has been running BBA and MBA (with 100% success
            results) and is also running BIT and BCS (Cyber-Security and Network
            Technology) along with the core values of professional courses,
            mandatory internship in the IT industry, and Job Placement.
          </p>
          <p className="text-gray-300">
            Texas was founded by a set of academicians and entrepreneurs to meet
            the rising demand for qualified and skilled manpower in the fields
            of Science and Technology, Management, Hotel Management, and
            Humanities. Since its very inception, Texas remains an invitation to
            learning by both theory and practice.
          </p>
          <p className="text-gray-300">
            Professors, readers, lecturers, and scholars in their respective
            fields contribute to making Texas College one of the best in the
            industry. One of the major global partners and contributors of the
            college is Lincoln University College, in affiliation with which
            we’ve designed most of our courses.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">
          What Makes Us Unique
        </h2>
        <p className="text-gray-300 text-lg">
          TCMIT provides a modern learning experience combining theory,
          practice, and global collaboration.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10 relative z-10 mb-24">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: -2 + i * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center cursor-pointer hover:shadow-3xl"
          >
            <motion.div
              className="text-6xl mb-5 text-white"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-200">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2 w-full overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={facilitiesImg}
            alt="Student Facilities"
            className="w-full h-96 object-cover rounded-[50%_50%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            Facilities for Students
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {facilities.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* 10 Reasons Section */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-500 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          10 Reasons to Join TCMIT
        </motion.h2>
        <motion.ul
          className="list-decimal list-inside text-gray-300 space-y-3 text-left mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {[
            "Academic institution nurtured and groomed by dedicated academic, corporate, and social personalities.",
            "Collaborative partner of internationally accredited university imparting world-class education with credits transfer facility in Management and Information Technology disciplines.",
            "Centrally located, easily accessible from and around Kathmandu valley with a serene environment free from crowd, noise, and pollution.",
            "Dedicated and qualified faculties with national and international exposures. State-of-art classrooms supported by modern technologies.",
            "Enriched information center with textbooks, reference books, journals, newspapers, research reports, and more.",
            "State-of-art, well-equipped IT labs, facilitated lounge, cafeteria providing hygienic food at affordable price.",
            "Internet access throughout college premises.",
            "Student individual ID to facilitate online teaching/learning activities.",
            "On-going soft skills training enabling the students to meet emerging corporate needs beyond classroom inputs.",
            "Counseling Cell driven by well-exposed and experienced personnel to assist students in academic and personal endeavors.",
          ].map((reason, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {reason}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Project Work and Field Visit Section */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-500 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Project Work and Field Visit
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg text-left mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          At <strong>Texas College of Management and IT</strong>, our “Project
          Work and Exhibition” showcases student innovation from 2017 to 2024,
          highlighting advancements from foundational C programming to emerging
          technologies like Python, Flutter, AI, Full Stack, Android, Laravel,
          and more. Students present a diverse range of projects, including IoT
          devices and Robotics prototypes that address real-world challenges.
          The event also features insights from seminars and workshops,
          providing a comprehensive look at current tech trends. This platform
          enables students to showcase their skills and creativity, preparing
          them for dynamic careers in technology.
        </motion.p>
      </div>
    </section>
  );
}

export default Services;
