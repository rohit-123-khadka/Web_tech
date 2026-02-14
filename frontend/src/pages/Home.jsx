import { Navigate } from "react-router-dom";
import ImgCarousel from "../components/ImgCarousal";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const programs = ["BIT", "BBA", "BHM"];
  return (
    <>
      <ImgCarousel />

      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Welcome to Texas College of Management & IT
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Delivering quality education in IT and Management with strong
            practical exposure and professional development.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14 text-gray-900"
          >
            Our Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {program}
                </h3>

                <p className="text-gray-600 mb-6">
                  Industry-focused curriculum designed for real-world skills and
                  professional growth.
                </p>

                <button className="text-black font-semibold hover:underline">
                  View Details →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Start Your Academic Journey With Us
          </h2>

          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
