import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Apply from "./pages/Apply";
import Programs from "./pages/Programs";
import ProgramPage from "./pages/ProgramPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/programs" element={<Programs />} />
         <Route path="/programs/:id" element={<ProgramPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
