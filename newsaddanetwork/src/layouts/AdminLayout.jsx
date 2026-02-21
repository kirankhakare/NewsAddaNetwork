import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";

export default function AdminLayout() {

  const { token } = useContext(AuthContext);
  const [isOpen,setIsOpen] = useState(false);

  if(!token){
    return <Navigate to="/admin/login"/>;
  }

  return (
    <div className="flex min-h-screen
      bg-gradient-to-br from-white via-violet-100 to-blue-200">

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

      {/* CONTENT AREA */}
      <div className="flex-1">

        <AdminHeader setIsOpen={setIsOpen}/>

        <div className="p-6">
          <Outlet/>
        </div>

      </div>

    </div>
  );
}