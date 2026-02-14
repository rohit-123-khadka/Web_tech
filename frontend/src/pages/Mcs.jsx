import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Mcs() {
    const navigate = useNavigate();
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">Master of Computer Science (MCS)</h2>
            <p className="text-gray-300 text-lg">
                The Master of Computer Science (MCS) program is designed to provide students with advanced knowledge and skills in computer science, preparing them for leadership roles in research, development, and technology management.
            </p>
        </div>
    </section>
  )
}

export default Mcs