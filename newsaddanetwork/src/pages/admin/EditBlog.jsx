import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form,setForm] = useState({
    title:"",
    category:"",
    description:"",
    image:null
  });

  const [preview,setPreview] = useState("");

  // ================= FETCH BLOG DATA =================
  useEffect(()=>{
    fetchBlog();
  },[]);

  const fetchBlog = async()=>{
    try{
      const res = await API.get(`/blogs/${id}`);

      setForm({
        title:res.data.title,
        category:res.data.category,
        description:res.data.description,
        image:null
      });

      setPreview(res.data.image);

    }catch(err){
      console.log(err);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleFileChange=(e)=>{
    setForm({...form,image:e.target.files[0]});
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  // ================= UPDATE BLOG =================
  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

      const formData = new FormData();

      formData.append("title",form.title);
      formData.append("category",form.category);
      formData.append("description",form.description);

      if(form.image){
        formData.append("image",form.image);
      }

      await API.put(`/blogs/${id}`,formData);

      alert("Blog Updated");
      navigate("/admin/manage-blogs");

    }catch(err){
      alert("Update Failed");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">

      {/* TITLE */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Edit Blog
      </h1>

      {/* CARD */}
      <div className="
        bg-white/70 backdrop-blur-md
        border border-white/40
        rounded-2xl
        shadow
        p-4 md:p-6
      ">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* TITLE */}
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-violet-400"
          />

          {/* CATEGORY */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">श्रेणी निवडा</option>
            <option value="govt-schemes">🏛️ शासकीय योजना</option>
            <option value="health">💚 आरोग्य</option>
            <option value="jobs">💼 रोजगार</option>
            <option value="spirituality">📙 अध्यात्म</option>
            <option value="technology">🧠 तंत्रज्ञान</option>
            <option value="info">ℹ️ अधिक माहिती</option>
          </select>

          {/* IMAGE PREVIEW */}
          {preview && (
            <img
              src={preview}
              className="w-full h-40 md:h-56 object-cover rounded-lg"
            />
          )}

          {/* IMAGE INPUT */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full text-sm"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-violet-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full md:w-auto
              bg-gradient-to-r from-violet-500 to-blue-500
              text-white py-3 px-6
              rounded-lg font-semibold
              hover:opacity-90 transition
            "
          >
            Update Blog
          </button>

        </form>

      </div>

    </div>
  );
}