import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return(
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          संपर्क
        </h1>
        <p className="text-gray-600 mt-2">
          आमच्याशी संपर्क साधण्यासाठी खालील माहिती वापरा.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* CONTACT INFO */}
        <div className="space-y-5">

          <div className="flex gap-3 items-center">
            <FaPhoneAlt className="text-red-600"/>
            <span>8767192113</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaEnvelope className="text-blue-600"/>
            <span>newsaddanetwork@gmail.com</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaMapMarkerAlt className="text-green-600"/>
            <span>Maharashtra, India</span>
          </div>

        </div>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-xl space-y-4">

          <input
            name="name"
            placeholder="तुमचे नाव"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            placeholder="ईमेल"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="तुमचा संदेश"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded h-32"
          />

          <button className="bg-red-600 text-white w-full py-3 rounded font-semibold hover:bg-red-700">
            संदेश पाठवा
          </button>

        </form>

      </div>

    </div>
  );
}