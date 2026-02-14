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
import Bit from "./pages/Bit";
import Bba from "./pages/Bba";
import Bhm from "./pages/Bhm";
import Bcs from "./pages/Bcs";
import Mba from "./pages/Mba";
import Mcs from "./pages/Mcs";
import Mbahm from "./pages/Mbahm";

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
        <Route path="/bit" element={<Bit />} />
        <Route path="/bba" element={<Bba />} />
        <Route path="/bhm" element={<Bhm />} />
        <Route path="/bcs" element={<Bcs />} />
        <Route path="/mba" element={<Mba />} />
        <Route path="/mcs" element={<Mcs />} />
        <Route path="/mbahm" element={<Mbahm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
