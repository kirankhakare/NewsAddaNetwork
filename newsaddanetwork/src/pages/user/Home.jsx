import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Home() {

  const [posts,setPosts] = useState([]);

  // ================= FETCH BLOGS =================
useEffect(()=>{

  document.title = "न्यूजअड्डा नेटवर्क - ताज्या बातम्या";

  const fetchBlogs = async()=>{
    try{
      const res = await API.get("/blogs");
      setPosts(res.data);
    }catch(err){
      console.log(err);
    }
  };

  // 👥 VISITOR COUNT ADD (Website open zala ki)
  const addVisitor = async()=>{
    try{
      await API.post("/analytics/visit");
    }catch(err){
      console.log(err);
    }
  };

  fetchBlogs();
  addVisitor();

},[]);

  // ================= CATEGORY LABEL MAP =================
  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  const recentPosts = posts.slice(0,6);
  const trendingPosts = posts.slice(0,4);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            न्यूजअड्डा नेटवर्क मध्ये आपले स्वागत आहे
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl mx-auto">
            शासकीय योजना, आरोग्य, रोजगार, अभ्यास आणि तंत्रज्ञानाशी संबंधित ताज्या अपडेट्स एका ठिकाणी.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 grid lg:grid-cols-3 gap-8">

        {/* BLOG GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3">
            ताज्या बातम्या
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">

            {recentPosts.map((post)=>(
              <article
                key={post._id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition duration-300"
                  />

                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {categoryLabels[post.category]}
                  </span>
                </div>

                <div className="p-4 md:p-5">

                  <p className="text-xs md:text-sm text-gray-500 mb-2">
                    {new Date(post.createdAt).toLocaleDateString("mr-IN")}
                  </p>

                  <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2 leading-snug">
                    <Link
                      to={`/blog/${post._id}`}
                      className="hover:text-red-600 transition"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.description}
                  </p>

                  <Link
                    to={`/blog/${post._id}`}
                    className="inline-block mt-3 text-red-600 font-medium hover:underline text-sm"
                  >
                    पुढे वाचा →
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>

        {/* TRENDING SIDEBAR */}
        <aside>
          <h2 className="text-lg md:text-xl font-bold mb-5 border-l-4 border-black pl-3">
            लोकप्रिय बातम्या
          </h2>

          <div className="space-y-4 md:space-y-5">

            {trendingPosts.map((post)=>(
              <Link
                key={post._id}
                to={`/blog/${post._id}`}
                className="flex gap-3 items-center group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-16 object-cover rounded-md"
                />

                <p className="text-sm md:text-base font-medium group-hover:text-red-600 line-clamp-2 transition">
                  {post.title}
                </p>
              </Link>
            ))}

          </div>
        </aside>

      </div>
    </>
  );
}