import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { programs } from "../data/program";
import { 
  CalendarIcon, 
  AcademicCapIcon, 
  ClockIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BookOpenIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const ProgramPage = () => {
  const { id } = useParams();
  const program = programs.find((item) => item.id === id);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!program) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Program Not Found
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-8"
          >
            The program you're looking for doesn't exist.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/programs" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Browse Programs
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen mt-18 md:mt-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="max-w-3xl"
            >
              {/* Breadcrumb */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 text-white/80 mb-6 text-sm"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
                <span>/</span>
                <span className="text-white">{program.title}</span>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-white/20"
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                <span>Featured Program</span>
              </motion.div>

              {/* Title with gradient */}
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {program.title}
              </motion.h1>

              {/* Stats */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-6 mt-8"
              >
                {[
                  { icon: ClockIcon, text: program.duration },
                  { icon: AcademicCapIcon, text: program.eligibility },
                  { icon: UserGroupIcon, text: "Limited Seats" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      className="flex items-center text-white/90"
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      <span>{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/apply"
                    className="group relative px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold overflow-hidden shadow-xl inline-flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      Apply Now
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </motion.div>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold border border-white/30 transition-all"
                >
                  Download Brochure
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        {/* Description Card */}
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-start gap-6">
            <motion.div 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="hidden md:block"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <BookOpenIcon className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>
            <div>
              <motion.h2 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                About the Program
              </motion.h2>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {program.description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: CalendarIcon, title: "Program Duration", value: program.duration, color: "from-blue-500 to-cyan-500" },
            { icon: AcademicCapIcon, title: "Eligibility Criteria", value: program.eligibility, color: "from-purple-500 to-pink-500" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group bg-white rounded-2xl shadow-xl p-8"
              >
                <motion.div 
                  animate={hoveredIndex === index ? { rotate: 360, scale: 1.1 } : {}}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} p-4 mb-4`}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Curriculum Highlights Section */}
        <div className="mb-16">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Curriculum Highlights
              </span>
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              What you'll learn in this comprehensive program
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.curriculumHighlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                onHoverStart={() => setHoveredIndex(index + 10)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl shadow-xl p-8"
              >
                {/* Background Gradient on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div 
                    animate={hoveredIndex === index + 10 ? { 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6"
                  >
                    <CheckCircleIcon className="w-7 h-7 text-blue-600" />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 mb-3"
                    animate={hoveredIndex === index + 10 ? { color: "#2563eb" } : {}}
                  >
                    {item.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {item.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose This Program */}
        <motion.div
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-16 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Why Choose This Program?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ChartBarIcon, title: "Industry Recognition", desc: "Globally recognized certification" },
                { icon: UserGroupIcon, title: "Expert Faculty", desc: "Learn from industry leaders" },
                { icon: SparklesIcon, title: "Placement Support", desc: "100% placement assistance" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div 
                      animate={floatingAnimation}
                      className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-lg"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          variants={cardVariants}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl shadow-xl p-12"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join thousands of successful graduates who have transformed their careers with our programs.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/apply"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl inline-flex items-center"
              >
                Apply Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all inline-flex items-center"
              >
                Talk to Counselor
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProgramPage;