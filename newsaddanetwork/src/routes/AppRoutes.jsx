import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

/* User Pages */
import Home from "../pages/user/Home";
import Category from "../pages/user/Category";
import BlogDetails from "../pages/user/BlogDetails";
import StaticPages from "../pages/user/StaticPages";

/* Admin Pages */
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/AddBlog";
import EditBlog from "../pages/admin/EditBlog";
import ManageBlogs from "../pages/admin/ManageBlogs";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/:type" element={<StaticPages />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="edit-blog/:id" element={<EditBlog />} />
          <Route path="manage-blogs" element={<ManageBlogs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}