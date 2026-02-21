import { useEffect, useState } from "react";
import API from "../../services/api";

export default function BreakingNews(){

  const [title,setTitle] = useState("");
  const [link,setLink] = useState("");   // ✅ NEW LINK STATE
  const [breaking,setBreaking] = useState([]);
  const [editId,setEditId] = useState(null);

  // FETCH BREAKING NEWS
  useEffect(()=>{
    fetchBreaking();
  },[]);

  const fetchBreaking = async()=>{
    try{
      const res = await API.get("/breaking");
      setBreaking(res.data);
    }catch(err){
      console.log(err);
    }
  };

  // ADD OR UPDATE BREAKING NEWS
  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!title) return alert("Enter Title");

    try{

      const payload = {
        title,
        link   // ✅ SEND LINK ALSO
      };

      if(editId){
        // UPDATE
        await API.put(`/breaking/${editId}`, payload);
        setEditId(null);
      }else{
        // CREATE
        await API.post("/breaking", payload);
      }

      setTitle("");
      setLink("");     // ✅ RESET LINK
      fetchBreaking();
      alert("Saved Successfully");

    }catch{
      alert("Error");
    }
  };

  // DELETE
  const handleDelete = async(id)=>{
    if(!window.confirm("Delete Breaking News?")) return;

    await API.delete(`/breaking/${id}`);
    fetchBreaking();
  };

  // EDIT CLICK
  const handleEdit = (item)=>{
    setTitle(item.title);
    setLink(item.link || "");   // ✅ LOAD LINK
    setEditId(item._id);
  };

  return(
    <div className="space-y-6 max-w-3xl">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Breaking News Manager
      </h1>

      {/* ADD FORM */}
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border border-white/40">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* TITLE INPUT */}
          <input
            value={title}
            placeholder="Enter Breaking News Headline..."
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* ✅ NEW LINK INPUT */}
          <input
            value={link}
            placeholder="Enter Link (optional)..."
            onChange={(e)=>setLink(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
            {editId ? "Update Breaking News" : "Add Breaking News"}
          </button>

        </form>

      </div>

      {/* TABLE */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow border border-white/40 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white/50">
            <tr className="text-left text-gray-700">
              <th className="p-4">Headline</th>
              <th className="p-4">Link</th> {/* ✅ NEW COLUMN */}
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {breaking.length === 0 && (
              <tr>
                <td className="p-4 text-gray-500">
                  No Breaking News Added
                </td>
              </tr>
            )}

            {breaking.map((item)=>(
              <tr key={item._id} className="border-t hover:bg-white/40">

                <td className="p-4 font-semibold text-gray-800">
                  {item.title}
                </td>

                {/* ✅ SHOW LINK */}
                <td className="p-4 text-sm text-blue-600">
                  {item.link ? item.link : "-"}
                </td>

                <td className="p-4 flex gap-3">

                  <button
                    onClick={()=>handleEdit(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={()=>handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

