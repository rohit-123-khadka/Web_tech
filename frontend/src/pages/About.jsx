import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-9">
            About Texas College of Management & IT
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Empowering future leaders through quality education, innovation, and
            practical learning experiences in Management and Information
            Technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            src="images/o11.jpg"
            alt="Texas College"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Texas College of Management & IT is dedicated to providing
              high-quality education that bridges academic knowledge with
              real-world applications. Our programs are designed to prepare
              students for competitive global careers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With experienced faculty, modern infrastructure, and
              industry-focused curriculum, we ensure our students are equipped
              with both technical expertise and leadership skills.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl"
          >
            <Target className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To deliver industry-relevant education that develops critical
              thinking, innovation, and ethical leadership among students.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl"
          >
            <BookOpen className="text-green-500 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-400">
              To be a leading academic institution recognized for excellence in
              Management and Information Technology education.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Users size={40} className="mx-auto text-yellow-500 mb-2" />
            <h4 className="text-3xl font-bold">1000+</h4>
            <p className="text-gray-400">Students</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <GraduationCap size={40} className="mx-auto text-purple-500 mb-2" />
            <h4 className="text-3xl font-bold">500+</h4>
            <p className="text-gray-400">Graduates</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <BookOpen size={40} className="mx-auto text-blue-500 mb-2" />
            <h4 className="text-3xl font-bold">10+</h4>
            <p className="text-gray-400">Programs</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Target size={40} className="mx-auto text-red-500 mb-2" />
            <h4 className="text-3xl font-bold">95%</h4>
            <p className="text-gray-400">Success Rate</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            Start Your Journey With Us
          </h2>
          <button 
          onClick={() => navigate("/apply")}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-medium cursor-pointer">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
