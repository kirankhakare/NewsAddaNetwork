import { Routes, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

/* User Pages */
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import Category from "../pages/user/Category";
import BlogDetails from "../pages/user/BlogDetails";
import StaticPages from "../pages/user/StaticPages";

/* Admin Pages */
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/AddBlog";
import EditBlog from "../pages/admin/EditBlog";
import ManageBlogs from "../pages/admin/ManageBlogs";
import BreakingNews from "../pages/admin/BreakingNews";
import PrivacyPolicy from "../pages/user/PrivacyPolicy";
import Disclaimer from "../pages/user/Disclaimer";
import TermsOfService from "../pages/user/TermsOfService";
export default function AppRoutes() {
  return (
    <Routes>

      {/* USER ROUTES */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUS" element={<Contact />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/:type" element={<StaticPages />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
<Route path="/Disclaimer" element={<Disclaimer />} />
<Route path="/TermsOfService" element={<TermsOfService />} />
      </Route>

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<Login />} />

      {/* ADMIN PANEL */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="edit-blog/:id" element={<EditBlog />} />
        <Route path="manage-blogs" element={<ManageBlogs />} />
        <Route path="breaking-news" element={<BreakingNews />} />
        <Route path="edit-blog" element={<EditBlog />} />
      </Route>

    </Routes>
  );
}