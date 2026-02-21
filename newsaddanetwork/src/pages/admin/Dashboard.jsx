import { FaNewspaper, FaEye, FaUsers, FaBolt } from "react-icons/fa";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Dashboard(){

  const [stats,setStats] = useState({
    totalBlogs:0,
    breakingCount:0,
    visitors:0,
    totalViews:0,
    categoryStats:[]
  });

  // ================= CATEGORY LABELS (MARATHI) =================
  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  // ================= FETCH DASHBOARD DATA =================
  useEffect(()=>{

    const fetchStats = async()=>{
      try{
        const res = await API.get("/dashboard");
        setStats(res.data || {});
      }catch(err){
        console.log(err);
      }
    };

    fetchStats();

  },[]);

  // ================= NUMBER FORMATTER =================
  const formatNumber = (num)=>{
    if(num >= 1000) return (num/1000).toFixed(1)+"K";
    return num;
  };

  return(
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      {/* ================= STATS CARDS ================= */}
      <div className="grid md:grid-cols-4 gap-6">

        {/* TOTAL BLOGS */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-500 text-white rounded-lg">
              <FaNewspaper/>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Blogs</p>
              <h2 className="text-xl font-bold">
                {formatNumber(stats.totalBlogs)}
              </h2>
            </div>
          </div>
        </div>

        {/* BREAKING NEWS */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500 text-white rounded-lg">
              <FaBolt/>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Breaking News</p>
              <h2 className="text-xl font-bold">
                {formatNumber(stats.breakingCount)}
              </h2>
            </div>
          </div>
        </div>

        {/* VISITORS */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-500 text-white rounded-lg">
              <FaUsers/>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Visitors</p>
              <h2 className="text-xl font-bold">
                {formatNumber(stats.visitors)}
              </h2>
            </div>
          </div>
        </div>

       {/* BLOG VIEW COUNT */}
<div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border">
  <div className="flex items-center gap-4">

    <div className="p-3 bg-blue-500 text-white rounded-lg">
      <FaEye/>
    </div>

    <div>
      <p className="text-gray-600 text-sm">
        Blog Views
      </p>

      <h2 className="text-xl font-bold">
        {formatNumber(stats.totalViews)}
      </h2>

      <span className="text-xs text-gray-500">
        👁️ एकूण वाचलेले ब्लॉग
      </span>

    </div>

  </div>
</div>

      </div>

      {/* ================= CATEGORY STATS ================= */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow p-6 border">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Category Wise Blogs
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {stats.categoryStats?.length === 0 && (
            <p className="text-gray-500">No Category Data</p>
          )}

          {stats.categoryStats?.map((cat)=>(
            <div
              key={cat._id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-gray-600">
                {categoryLabels[cat._id] || cat._id}
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {cat.count}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}