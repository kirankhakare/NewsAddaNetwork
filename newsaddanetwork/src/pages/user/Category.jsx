import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../services/api";

export default function Category(){

  const { slug } = useParams();

  const [posts,setPosts] = useState([]);
  const [trending,setTrending] = useState([]);

  // ================= CATEGORY LABELS =================
  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  // ================= FETCH DATA =================
  useEffect(()=>{

    const fetchCategory = async()=>{
      try{
        const res = await API.get(`/blogs/category/${slug}`);

        setPosts(res.data);
        setTrending(res.data.slice(0,4)); // sidebar
        document.title = categoryLabels[slug] || "Category";

      }catch(err){
        console.log(err);
      }
    };

    fetchCategory();

  },[slug]);

  return(
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {categoryLabels[slug]}
          </h1>
          <p className="opacity-90 mt-2">
            या विभागातील ताज्या आणि महत्त्वाच्या बातम्या.
          </p>
        </div>
      </section>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">

        {/* ================= LEFT BLOG GRID ================= */}
        <div className="lg:col-span-2">

          {posts.length === 0 && (
            <p className="text-gray-500">No Blogs Found</p>
          )}

          <div className="grid sm:grid-cols-2 gap-6">

            {posts.map((post)=>(
              <article
                key={post._id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition"
                  />

                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {categoryLabels[post.category]}
                  </span>
                </div>

                <div className="p-4">

                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(post.createdAt).toLocaleDateString("mr-IN")}
                  </p>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    <Link
                      to={`/blog/${post._id}`}
                      className="hover:text-red-600"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.description}
                  </p>

                  <Link
                    to={`/blog/${post._id}`}
                    className="inline-block mt-3 text-red-600 font-medium text-sm hover:underline"
                  >
                    पुढे वाचा →
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </div>

        {/* ================= RIGHT TRENDING SIDEBAR ================= */}
        <aside>

          <h2 className="text-lg md:text-xl font-bold mb-5 border-l-4 border-black pl-3">
            लोकप्रिय बातम्या
          </h2>

          <div className="space-y-4">

            {trending.map((post)=>(
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

                <p className="text-sm font-medium group-hover:text-red-600 line-clamp-2">
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