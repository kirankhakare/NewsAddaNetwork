import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BreakingNewsBar from "../components/common/BreakingNewsBar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <Navbar />
      <BreakingNewsBar />
      <br></br>
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}