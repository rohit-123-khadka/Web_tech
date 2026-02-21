import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaPhone, FaWhatsapp, FaViber } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Structured Programs
  const programs = [
    { id: "bit", title: "Bachelor of Information Technology" },
    { id: "bcs", title: "Bachelor of Computer Science" },
    { id: "bba", title: "Bachelor of Business Administration" },
    { id: "bhm", title: "Bachelor of Hotel Management" },
    { id: "mba", title: "Master of Business Administration" },
    { id: "mcs", title: "Master of Computer Science" },
    { id: "mba-hospitality", title: "MBA in Hospitality Management" },
  ];

  // ✅ Navigate to dynamic route
  const handleSelect = (id) => {
    navigate(`/program/${id}`);
    setOpen(false);
    setMobileMenuOpen(false);
  };

  const landlineNumber = "01-4589134";
  const landlineNumber2 = "01-4588627";
  const mobileNumber = "9801644462";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Top Contact Bar */}
        <div className="hidden md:flex bg-gray-900 text-white text-sm py-2 px-6 items-center gap-3">
          <a href={`tel:${landlineNumber}`} className="flex items-center gap-2 hover:text-gray-300">
            <FaPhone size={16} /> {landlineNumber}
          </a>
          <a href={`tel:${landlineNumber2}`} className="hover:text-gray-300">
            {landlineNumber2}
          </a>

          <div className="flex items-center gap-2 ml-6">
            <span>{mobileNumber}</span>
            <a
              href={`https://wa.me/${mobileNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href={`viber://chat?number=${mobileNumber}`}
              className="text-purple-400 hover:text-purple-500"
            >
              <FaViber size={16} />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`bg-gray-800 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-gray-700 rounded-md transition-all duration-300"
            >
              <Menu size={24} />
            </button>

            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Logo */}
            <Link to="/" className="hidden lg:block">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-6 list-none relative">
              <li>
                <Link to="/" className="text-white hover:text-gray-300 px-4 py-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300 px-4 py-4">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-gray-300 px-4 py-4">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300 px-4 py-4">
                  Contact
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button className="flex items-center gap-1 text-white px-4 py-2">
                  Programs
                  <ChevronDown size={18} />
                </button>

                {open && (
                  <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-64">
                    {programs.map((program) => (
                      <div
                        key={program.id}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelect(program.id)}
                      >
                        {program.title}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* Desktop Apply Button */}
            <div className="hidden lg:flex">
              <Link
                to="/apply"
                className="bg-gray-600 px-4 py-4 rounded-md text-white hover:bg-blue-700"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-50 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-80 h-full bg-gray-800 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:bg-gray-700 p-2 rounded-md"
            >
              <X size={20} />
            </button>
          </div>

          <div className="py-4 overflow-y-auto">
            <Link to="/" className="block px-4 py-3 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-4 py-3 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="block px-4 py-3 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="block px-4 py-3 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            <div className="border-t border-gray-700 mt-2 pt-2">
              <div className="px-4 py-2 text-gray-400 font-semibold">Programs</div>
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="block px-4 py-3 text-white cursor-pointer hover:bg-gray-700"
                  onClick={() => handleSelect(program.id)}
                >
                  {program.title}
                </div>
              ))}
            </div>

            <div className="px-4 mt-4">
              <Link
                to="/apply"
                className="block w-full bg-gray-600 px-4 py-3 rounded-md text-white text-center hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;