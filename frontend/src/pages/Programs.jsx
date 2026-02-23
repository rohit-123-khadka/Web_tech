import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { programs } from "../data/program";

// Icons (you can install react-icons if you don't have them)
// npm install react-icons
import { 
  FaGraduationCap, 
  FaClock, 
  FaUserGraduate, 
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaBookOpen,
  FaLaptopCode,
  FaChartLine,
  FaHotel,
  FaBusinessTime,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaBrain
} from 'react-icons/fa';

const Programs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Programs", icon: FaGraduationCap },
    { id: "undergraduate", name: "Undergraduate", icon: FaBookOpen },
    { id: "postgraduate", name: "Postgraduate", icon: FaUserGraduate },
    { id: "it", name: "IT & Computing", icon: FaLaptopCode },
    { id: "business", name: "Business", icon: FaBusinessTime },
    { id: "hospitality", name: "Hospitality", icon: FaHotel },
  ];

  // Filter programs based on search and category
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "undergraduate" && program.title.includes("Bachelor")) ||
      (selectedCategory === "postgraduate" && program.title.includes("Master")) ||
      (selectedCategory === "it" && (program.title.includes("IT") || program.title.includes("Computer"))) ||
      (selectedCategory === "business" && program.title.includes("Business")) ||
      (selectedCategory === "hospitality" && program.title.includes("Hotel"));
    return matchesSearch && matchesCategory;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Get icon based on program type
  const getProgramIcon = (title) => {
    if (title.includes("IT") || title.includes("Computer")) return FaLaptopCode;
    if (title.includes("Business")) return FaBusinessTime;
    if (title.includes("Hotel")) return FaHotel;
    if (title.includes("MBA")) return FaChartLine;
    return FaGraduationCap;
  };

  // Get gradient based on program type
  const getGradient = (title) => {
    if (title.includes("IT") || title.includes("Computer")) {
      return "from-blue-600 to-cyan-500";
    }
    if (title.includes("Business")) {
      return "from-purple-600 to-pink-500";
    }
    if (title.includes("Hotel")) {
      return "from-amber-600 to-orange-500";
    }
    if (title.includes("MBA")) {
      return "from-emerald-600 to-teal-500";
    }
    return "from-indigo-600 to-blue-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              borderRadius: ["30%", "50%", "30%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              borderRadius: ["40%", "60%", "40%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20">
              🎓 Discover Your Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Explore Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block md:inline">
              {" "}Academic Programs
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Choose from a wide range of undergraduate and postgraduate programs designed to shape your future
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
              <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Categories Filter */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                }`}
              >
                <Icon className="text-lg" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPrograms.map((program) => {
              const Icon = getProgramIcon(program.title);
              const gradient = getGradient(program.title);
              const isHovered = hoveredId === program.id;

              return (
                <motion.div
                  key={program.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredId(program.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => navigate(`/program/${program.id}`)}
                  className="relative group cursor-pointer"
                >
                  {/* Card Background with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  {/* Card Content */}
                  <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      animate={isHovered ? { rotate: 360, scale: 1.2 } : {}}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="text-3xl text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                      {program.description}
                    </p>

                    {/* Program Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <FaClock className="mr-2 text-blue-400" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaUserGraduate className="mr-2 text-purple-400" />
                        <span className="text-sm">{program.eligibility}</span>
                      </div>
                    </div>

                    {/* Curriculum Highlights Preview */}
                    <div className="space-y-2 mb-6">
                      {program.curriculumHighlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 mr-2" />
                          <span className="text-gray-400">{item.title}</span>
                        </div>
                      ))}
                      {program.curriculumHighlights.length > 2 && (
                        <p className="text-xs text-gray-500">
                          +{program.curriculumHighlights.length - 2} more
                        </p>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      animate={isHovered ? { x: 5 } : {}}
                      className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-semibold mt-auto"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.div>

                    {/* Hover Effect Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-3xl origin-left`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredPrograms.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400 mb-4">No programs found</p>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Programs", icon: FaGraduationCap },
              { value: "2000+", label: "Students", icon: FaUserGraduate },
              { value: "100+", label: "Faculty", icon: FaBrain },
              { value: "95%", label: "Placement", icon: FaChartLine },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <Icon className="text-4xl mx-auto mb-3 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Join thousands of successful graduates who have transformed their careers with us
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/apply")}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all inline-flex items-center"
        >
          Apply Now
          <FaArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Programs;