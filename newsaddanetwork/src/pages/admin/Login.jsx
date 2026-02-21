import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
      const res = await API.post("/auth/login",form);
      login(res.data.token);
      navigate("/admin/dashboard");
    }catch{
      alert("Login Failed");
    }
  };

  return(
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-white via-violet-100 to-blue-200">

      <div className="w-[380px] bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-violet-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-violet-400"
          />

          <button className="bg-gradient-to-r from-violet-500 to-blue-500 text-white py-3 rounded-lg font-semibold">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}