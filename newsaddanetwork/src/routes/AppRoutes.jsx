import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

/* User Pages */
import Home from "../pages/user/Home";
import Category from "../pages/user/Category";
import BlogDetails from "../pages/user/BlogDetails";
import StaticPages from "../pages/user/StaticPages";

/* Admin Pages */
import Login from "../pages/admin/Login";   // ✅ ADD
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/AddBlog";
import EditBlog from "../pages/admin/EditBlog";
import ManageBlogs from "../pages/admin/ManageBlogs";
import BreakingNews from "../pages/admin/BreakingNews";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/:type" element={<StaticPages />} />
        </Route>

        {/* 🔐 ADMIN LOGIN */}
        <Route path="/admin/login" element={<Login />} />

        {/* 🔐 ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="edit-blog/:id" element={<EditBlog />} />
          <Route path="manage-blogs" element={<ManageBlogs />} />
          <Route path="breaking-news" element={<BreakingNews/>}/>
          <Route path="edit-blog" element={<EditBlog/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}