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

  const [menuOpen,setMenuOpen] = useState(false);
  const [catOpen,setCatOpen] = useState(false);

  const closeMenu = ()=>{
    setMenuOpen(false);
    setCatOpen(false);
  };

  // ✅ Backend synced categories
  const categories = [
    { name:"शासकीय योजना", path:"/category/govt-schemes", icon:<FaLandmark/>, color:"text-blue-600" },
    { name:"आरोग्य", path:"/category/health", icon:<FaHeartbeat/>, color:"text-green-600" },
    { name:"रोजगार", path:"/category/jobs", icon:<FaBriefcase/>, color:"text-purple-600" },
    { name:"अध्यात्म", path:"/category/spirituality", icon:<FaBook/>, color:"text-yellow-600" },
    { name:"तंत्रज्ञान", path:"/category/technology", icon:<FaMicrochip/>, color:"text-indigo-600" },
    { name:"अधिक माहिती", path:"/category/info", icon:<FaInfoCircle/>, color:"text-gray-600" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-2xl lg:text-3xl font-extrabold group"
          >
            <FaNewspaper className="text-red-600 group-hover:rotate-12 transition-transform"/>
            <span>
              <span className="text-red-600">न्यूज</span>
              <span className="text-black">अड्डा</span>
              <span className="text-gray-700 ml-1">Network</span>
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-semibold text-gray-800">

            {/* HOME */}
            <NavLink
              to="/"
              className={({isActive})=>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaHome/> मुख्यपृष्ठ
            </NavLink>

            {/* CATEGORY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={()=>setCatOpen(true)}
              onMouseLeave={()=>setCatOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-red-600">
                <FaNewspaper/> विभाग
                <FaChevronDown
                  className={`text-xs transition ${catOpen?"rotate-180":""}`}
                />
              </button>

              <div
                className={`absolute left-0 top-12 w-64 bg-white border rounded-xl shadow-xl transition-all duration-200 ${
                  catOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {categories.map(cat=>(
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    className={({isActive})=>
                      `flex items-center gap-3 px-6 py-3 hover:bg-gray-50 ${
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

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({isActive})=>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaInfoCircle/> आमच्याबद्दल
            </NavLink>

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className={({isActive})=>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`
              }
            >
              <FaPhoneAlt/> संपर्क
            </NavLink>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={()=>setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl p-2 hover:bg-gray-100 rounded-lg"
          >
            {menuOpen ? <FaTimes/> : <FaBars/>}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden py-6 flex flex-col gap-4 text-lg font-medium border-t bg-white">

            <NavLink onClick={closeMenu} to="/" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaHome className="text-red-500"/> मुख्यपृष्ठ
            </NavLink>

            {/* MOBILE CATEGORY TOGGLE */}
            <button
              onClick={()=>setCatOpen(!catOpen)}
              className="flex items-center gap-3 px-2 py-1"
            >
              <FaNewspaper/> विभाग
              <FaChevronDown className={`text-xs ${catOpen?"rotate-180":""}`}/>
            </button>

            {catOpen && (
              <div className="pl-6 flex flex-col gap-3">
                {categories.map(cat=>(
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    onClick={closeMenu}
                    className={({isActive})=>
                      `flex items-center gap-3 ${
                        isActive ? cat.color : "hover:text-red-600"
                      }`
                    }
                  >
                    <span className={cat.color}>{cat.icon}</span>
                    {cat.name}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink onClick={closeMenu} to="/about" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaInfoCircle className="text-blue-500"/> अधिक माहिती
            </NavLink>

            <NavLink onClick={closeMenu} to="/contact" className="flex items-center gap-3 px-2 py-1 hover:text-red-600">
              <FaPhoneAlt className="text-green-500"/> संपर्क
            </NavLink>

          </div>
        )}

      </div>
    </header>
  );
}