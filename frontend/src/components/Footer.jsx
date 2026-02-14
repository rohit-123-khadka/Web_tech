import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Texas College of Management & IT
          </h2>
          <p className="text-sm mb-4">
            Empowering future leaders through quality education, innovation, and
            real-world skills.
          </p>

          <p className="text-sm">
            Kathmandu, Nepal <br />
            +977-98XXXXXXXX <br />
            enquiry@texasintl.edu.np
          </p>

          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">
                Student Portal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Student Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Admissions</li>
            <li>Scholarships</li>
            <li>Events</li>
            <li>Clubs & Activities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Office Hours</h3>
          <ul className="text-sm space-y-2">
            <li>Sunday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Texas College of Management & IT. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
