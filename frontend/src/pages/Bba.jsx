import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Bba() {
    const navigate = useNavigate();
  return (
   <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">Bachelor of Information Technology (BIT)</h2>
        <p className="text-gray-300 text-lg">
         The Bachelor of Business Administration (BBA) program is designed to provide students with a comprehensive understanding of business principles and practices, preparing them for successful careers in various industries.
        </p>
      </div>
    </section>
  )
}

export default Bba