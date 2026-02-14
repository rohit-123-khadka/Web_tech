import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MoveRight } from "lucide-react";
import { FaPhone, FaWhatsapp, FaViber } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const programs = [
    "BIT",
    "BCS",
    "BBA",
    "BHM",
    "MBA",
    "MCS",
    "MBA-Hospitality",
  ];

  const handleSelect = (value) => {
    // Navigate to the page
    navigate(`/${value.toLowerCase()}`);
    setOpen(false); // Close dropdown
  };

  const landlineNumber = "01-4589134,";
  const landlineNumber2 = "01-4588627";
  const mobileNumber = "9801644462​";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-6 flex justify-start items-center gap-3">
        {/* Landline */}
        <a
          href={`tel:${landlineNumber}`}
          className="flex items-center gap-2 hover:text-gray-300 transition"
        >
          <FaPhone size={16} /> {landlineNumber}
        </a>
        <a
          href={`tel:${landlineNumber2}`}
          className="flex items-center hover:text-gray-300 transition"
        >
          {landlineNumber2}
        </a>

        {/* WhatsApp & Viber with single number */}
        <div className="flex items-center gap-2 ml-6">
          <span className="text-white flex items-center m-2">
            {mobileNumber} {/* Only show the number once */}
          </span>

          {/* WhatsApp icon */}

          <a
            href={`https://wa.me/${mobileNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition "
          >
            <FaWhatsapp size={16} />
          </a>

          {/* Viber icon */}
          <a
            href={`viber://chat?number=${mobileNumber.replace(/\D/g, "")}`}
            className="text-purple-400 hover:text-purple-500 transition "
          >
            <FaViber size={16} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Menu items */}
          <ul className="flex items-center space-x-6 list-none relative">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-4 py-4 rounded-md hover:bg-gray-700 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 px-4 py-4 rounded-md hover:bg-gray-700 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-white hover:text-gray-300 px-4 py-4 rounded-md hover:bg-gray-700 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 px-4 py-4 rounded-md hover:bg-gray-700 transition"
              >
                Contact
              </Link>
            </li>

            {/* Programs Dropdown */}
            <ul className="flex items-center gap-4">
              <li
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button className="flex items-center gap-1 text-white hover:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition">
                  Programs <ChevronDown size={18} />
                </button>

                {open && (
                  <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-63 overflow-hidden">
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("BIT")}
                    >
                      BIT
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("BCS")}
                    >
                      BCS
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("BBA")}
                    >
                      BBA
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("BHM")}
                    >
                      BHM
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("MBA")}
                    >
                      MBA
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("MCS")}
                    >
                      MCS
                    </li>
                    <li
                      className="block px-4 py-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Mbahm")}
                    >
                      MBA in Hospitality Management
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </ul>

          {/* Right side - Apply button */}
          <div className="flex items-center">
            <Link
              to="/apply"
              className="bg-gray-600 px-4 py-4 rounded-md text-white hover:bg-blue-700 transition"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
