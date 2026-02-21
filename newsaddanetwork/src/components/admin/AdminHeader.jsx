import { FaBars } from "react-icons/fa";

export default function AdminHeader({ setIsOpen }) {
  return (
    <div className="
      backdrop-blur-md
      bg-white/60
      border-b border-white/40
      px-6 py-4
      flex items-center gap-4
      sticky top-0 z-40
    ">

      {/* MENU BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-xl text-gray-700"
      >
        <FaBars />
      </button>

      {/* TITLE */}
      <h2 className="font-bold text-lg text-gray-800">
        Admin Panel
      </h2>

    </div>
  );
}