import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaList,
  FaTimes,
  FaBolt,
  FaSignOutAlt
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar({ isOpen, setIsOpen }) {

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition duration-200
    ${
      isActive
        ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold shadow"
        : "text-gray-700 hover:bg-white/60"
    }`;

  // ✅ Logout function
  const handleLogout = ()=>{
    logout();
    navigate("/admin/login");
  };

  return (
    <div
      className={`fixed md:relative z-50 w-64 h-screen flex flex-col justify-between p-5
      bg-gradient-to-b from-white via-violet-100 to-blue-200
      border-r border-gray-200 shadow-lg
      transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >

      {/* ================= TOP SECTION ================= */}
      <div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold text-gray-800">
            Newsadda Admin
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-xl text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-3">

          <NavLink
            to="/admin/dashboard"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/add-blog"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            <FaPlusCircle />
            Add Blog
          </NavLink>

          <NavLink
            to="/admin/breaking-news"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            <FaBolt className="text-red-500" />
            Breaking News
          </NavLink>

          <NavLink
            to="/admin/manage-blogs"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            <FaList />
            Manage Blogs
          </NavLink>

          {/* ⚠️ NOTE:
             edit-blog route dynamic id ne open hoto,
             so sidebar madhe direct navlink avoid karna better.
          */}

        </nav>

      </div>

      {/* ================= LOGOUT BUTTON ================= */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}