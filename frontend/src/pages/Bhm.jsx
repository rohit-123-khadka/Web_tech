import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Bhm() {
    const navigate = useNavigate();
    return (    
        <section className="bg-gray-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-blue-500">Bachelor of Hotel Management (BHM)</h2>
                <p className="text-gray-300 text-lg">
                    The Bachelor of Hotel Management (BHM) program is designed to provide students with a comprehensive understanding of the hospitality industry, preparing them for successful careers in hotel and restaurant management.    
                </p>
            </div>
        </section>
    )
}

export default Bhm