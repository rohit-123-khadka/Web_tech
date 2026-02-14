import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import { useNavigate } from "react-router-dom";

function Programs() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
    <motion.section className="min-h-screen bg-gray-100 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}> 
      <h1
      onClick={() => navigate("/programs/bit")}
       className="text-4xl text-center">Programs</h1>
    </motion.section>
    </section>
    
  );
}

export default Programs;
