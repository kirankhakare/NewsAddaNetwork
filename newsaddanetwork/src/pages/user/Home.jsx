import { Link } from "react-router-dom";
import posts from "../../data/posts.json";
import { useEffect } from "react";

export default function Home() {
  const recentPosts = posts.slice(0, 6);
  const trendingPosts = posts.slice(0, 4);

  // React 19 SEO Title (Helmet replace)
  useEffect(() => {
    document.title = "NEWSADDANETWORK - Latest News & Updates";
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to NEWSADDANETWORK
          </h1>
          <p className="text-lg opacity-90">
            Latest updates about government schemes, health, jobs, study and technology.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE — BLOG GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3">
            Latest News
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* CATEGORY TAG */}
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("hi-IN")}
                  </p>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-red-600 transition"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-3 text-red-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — TRENDING SIDEBAR */}
        <aside>
          <h2 className="text-xl font-bold mb-5 border-l-4 border-black pl-3">
            Trending
          </h2>

          <div className="space-y-5">
            {trendingPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="flex gap-3 items-center group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-16 object-cover rounded-md"
                />
                <p className="text-sm font-medium group-hover:text-red-600 line-clamp-2 transition">
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