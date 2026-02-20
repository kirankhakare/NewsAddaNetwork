import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-extrabold text-red-600 tracking-wide"
          >
            NEWSADDANETWORK
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base lg:text-lg font-semibold text-gray-700">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "hover:text-red-600 transition"
              }
            >
              Home
            </NavLink>

            {/* CATEGORY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <button className="hover:text-red-600 transition flex items-center gap-1">
                Categories <span className="text-xs">▼</span>
              </button>

              <div
                className={`absolute left-0 top-12 w-60 bg-white border rounded-xl shadow-xl transition-all duration-200 ${
                  catOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <NavLink to="/category/government" className="block px-6 py-3 hover:bg-gray-50 text-base">
                  Government Schemes
                </NavLink>
                <NavLink to="/category/health" className="block px-6 py-3 hover:bg-gray-50 text-base">
                  Health
                </NavLink>
                <NavLink to="/category/jobs" className="block px-6 py-3 hover:bg-gray-50 text-base">
                  Jobs
                </NavLink>
                <NavLink to="/category/study" className="block px-6 py-3 hover:bg-gray-50 text-base">
                  Study
                </NavLink>
                <NavLink to="/category/technology" className="block px-6 py-3 hover:bg-gray-50 text-base">
                  Technology
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "hover:text-red-600 transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "hover:text-red-600 transition"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden py-6 flex flex-col gap-4 text-lg font-medium border-t">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/category/government">Government Schemes</NavLink>
            <NavLink to="/category/health">Health</NavLink>
            <NavLink to="/category/jobs">Jobs</NavLink>
            <NavLink to="/category/study">Study</NavLink>
            <NavLink to="/category/technology">Technology</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        )}

      </div>
    </header>
  );
}