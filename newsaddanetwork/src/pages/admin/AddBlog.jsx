import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    title:"",
    category:"",
    description:"",
    image:null
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleFileChange=(e)=>{
    setForm({...form,image:e.target.files[0]});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      const formData = new FormData();
      formData.append("title",form.title);
      formData.append("category",form.category);
      formData.append("description",form.description);
      formData.append("image",form.image);

      await API.post("/blogs",formData);

      alert("Blog Added Successfully");
      navigate("/admin/manage-blogs");

    }catch(err){
      alert("Error adding blog");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">

      {/* TITLE */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Add New Blog
      </h1>

      {/* FORM CARD */}
      <div className="
        bg-white/70 backdrop-blur-md
        border border-white/40 shadow
        rounded-2xl
        p-4 md:p-6
      ">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* TITLE */}
          <input
            name="title"
            placeholder="Blog Title"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white outline-none border focus:ring-2 focus:ring-violet-400"
          />

          {/* CATEGORY */}
       <select
  name="category"
  onChange={handleChange}
  className="w-full p-3 rounded-lg bg-white border"
>
  <option value="">श्रेणी निवडा</option>

  <option value="govt-schemes">🏛️ शासकीय योजना</option>
  <option value="health">💚 आरोग्य</option>
  <option value="jobs">💼 रोजगार</option>
  <option value="spirituality">📙 अध्यात्म</option>
  <option value="technology">🧠 तंत्रज्ञान</option>
  <option value="info">ℹ️ अधिक माहिती</option>

</select>

          {/* IMAGE */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full text-sm"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Blog Description"
            rows="6"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white outline-none border focus:ring-2 focus:ring-violet-400"
          ></textarea>

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
            Publish Blog
          </button>

        </form>

      </div>

    </div>
  );
}