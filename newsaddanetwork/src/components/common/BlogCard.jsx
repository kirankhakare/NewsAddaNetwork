import { Link } from "react-router-dom";

export default function BlogCard({post}) {

  const categoryLabels = {
    "govt-schemes":"🏛️ शासकीय योजना",
    "health":"💚 आरोग्य",
    "jobs":"💼 रोजगार",
    "spirituality":"📙 अध्यात्म",
    "technology":"🧠 तंत्रज्ञान",
    "info":"ℹ️ अधिक माहिती"
  };

  return (
    <article className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group">

      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-44 object-cover group-hover:scale-105 transition"
        />

        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
          {categoryLabels[post.category]}
        </span>
      </div>

      <div className="p-4">

        <p className="text-xs text-gray-500 mb-2">
          {new Date(post.createdAt).toLocaleDateString("mr-IN")}
        </p>

        <h3 className="font-semibold text-lg line-clamp-2">
          <Link to={`/blog/${post._id}`} className="hover:text-red-600">
            {post.title}
          </Link>
        </h3>

      </div>

    </article>
  );
}