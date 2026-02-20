import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaLandmark,
  FaHeartbeat,
  FaBriefcase,
  FaBook,
  FaMicrochip,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Category items with icons and distinct hover/active colors
  const categories = [
    { name: "शासकीय योजना", path: "/category/government", icon: <FaLandmark />, color: "text-blue-600" },
    { name: "आरोग्य", path: "/category/health", icon: <FaHeartbeat />, color: "text-green-600" },
    { name: "रोजगार", path: "/category/jobs", icon: <FaBriefcase />, color: "text-purple-600" },
    { name: "अध्यात्म", path: "/category/study", icon: <FaBook />, color: "text-yellow-600" },
    { name: "तंत्रज्ञान", path: "/category/technology", icon: <FaMicrochip />, color: "text-indigo-600" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* LOGO with icon */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-2xl lg:text-3xl font-extrabold group"
          >
            <FaNewspaper className="text-red-600 group-hover:rotate-12 transition-transform" />
            <span>
              <span className="text-red-600">न्यूज</span>
              <span className="text-black">अड्डा</span>
              <span className="text-gray-700 ml-1">Network</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-semibold text-gray-800">

            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaHome /> मुख्यपृष्ठ
            </NavLink>

            {/* CATEGORY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <FaNewspaper className="text-gray-500" /> विभाग
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    catOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-12 w-64 bg-white border rounded-xl shadow-xl transition-all duration-200 ${
                  catOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {categories.map((cat) => (
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors ${
                        isActive ? cat.color : "text-gray-700"
                      }`
                    }
                  >
                    <span className={cat.color}>{cat.icon}</span>
                    {cat.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaInfoCircle /> आमच्याबद्दल
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaPhoneAlt /> संपर्क
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON with icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU with icons */}
        {menuOpen && (
          <div className="md:hidden py-6 flex flex-col gap-4 text-lg font-medium border-t bg-white">
            <NavLink onClick={closeMenu} to="/" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaHome className="text-red-500" /> मुख्यपृष्ठ
            </NavLink>

            {categories.map((cat) => (
              <NavLink
                key={cat.path}
                onClick={closeMenu}
                to={cat.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1 transition-colors ${
                    isActive ? cat.color : "hover:text-red-600"
                  }`
                }
              >
                <span className={cat.color}>{cat.icon}</span>
                {cat.name}
              </NavLink>
            ))}

            <NavLink onClick={closeMenu} to="/about" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaInfoCircle className="text-blue-500" /> अधिक माहिती
            </NavLink>

            <NavLink onClick={closeMenu} to="/contact" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaPhoneAlt className="text-green-500" /> संपर्क
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}