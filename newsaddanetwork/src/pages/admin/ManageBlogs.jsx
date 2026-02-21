import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ManageBlogs() {

  const [blogs,setBlogs] = useState([]);
  const navigate = useNavigate();

  // Marathi Category Map
  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  useEffect(()=>{
    fetchBlogs();
  },[]);

  const fetchBlogs = async()=>{
    try{
      const res = await API.get("/blogs");
      setBlogs(res.data);
    }catch(err){
      console.log(err);
    }
  };

  const handleDelete = async(id)=>{
    if(!window.confirm("Delete this blog?")) return;

    try{
      await API.delete(`/blogs/${id}`);
      fetchBlogs();
    }catch{
      alert("Error deleting blog");
    }
  };

  return (
    <div className="space-y-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Manage Blogs
      </h1>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white/70 backdrop-blur-md border border-white/40 shadow rounded-2xl p-6 overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b text-gray-700">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {blogs.length === 0 && (
              <tr>
                <td className="p-4 text-gray-500">
                  No Blogs Found
                </td>
              </tr>
            )}

            {blogs.map((blog)=>(
              <tr key={blog._id} className="border-b hover:bg-white/40">

                {/* IMAGE */}
                <td className="p-3">
                  <img
                    src={blog.image}
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>

                {/* TITLE */}
                <td className="p-3 font-semibold text-gray-800">
                  {blog.title}
                </td>

                {/* CATEGORY */}
                <td className="p-3 text-gray-600">
                  {categoryLabels[blog.category]}
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-3">

                  <button
                    onClick={()=>navigate(`/admin/edit-blog/${blog._id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={()=>handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden space-y-4">

        {blogs.length === 0 && (
          <p className="text-gray-500">No Blogs Found</p>
        )}

        {blogs.map((blog)=>(
          <div
            key={blog._id}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 border border-white/40"
          >

            <img
              src={blog.image}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="font-bold text-gray-800">
              {blog.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              {categoryLabels[blog.category]}
            </p>

            <div className="flex gap-3">

              <button
                onClick={()=>navigate(`/admin/edit-blog/${blog._id}`)}
                className="flex-1 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>

              <button
                onClick={()=>handleDelete(blog._id)}
                className="flex-1 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}