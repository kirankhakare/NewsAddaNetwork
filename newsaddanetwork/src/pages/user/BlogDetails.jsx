import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

export default function BlogDetails(){

  const { id } = useParams();
  const [blog,setBlog] = useState(null);

  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  // ================= FETCH BLOG + ADD VIEW =================
  useEffect(()=>{

    const fetchBlog = async()=>{
      try{

        const res = await API.get(`/blogs/${id}`);
        setBlog(res.data);
        document.title = res.data.title;

        // 👁️ ADD LIVE VIEW COUNT
        API.post(`/analytics/view/${id}`);

      }catch(err){
        console.log(err);
      }
    };

    fetchBlog();

  },[id]);

  if(!blog){
    return (
      <div className="p-10 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return(
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        {blog.title}
      </h1>

      {/* META */}
      <p className="text-sm text-gray-500 mb-4">
        {categoryLabels[blog.category]} •{" "}
        {new Date(blog.createdAt).toLocaleDateString("mr-IN")}
      </p>

      {/* IMAGE */}
      <img
        src={blog.image}
        className="w-full rounded-xl mb-6"
        alt={blog.title}
      />

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.description}
      </p>

    </div>
  );
}