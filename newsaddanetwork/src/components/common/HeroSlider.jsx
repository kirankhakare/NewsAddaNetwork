import { useState, useEffect } from "react";
import posts from "../../data/posts.json";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const slides = posts.slice(0, 3);
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full mt-6">

      {/* FULL WIDTH CONTAINER */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] overflow-hidden">

        {slides.map((post, index) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 flex items-end">

              {/* TEXT CONTAINER */}
              <div className="w-full px-4 md:px-10 pb-6 md:pb-10">
                <h2 className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-snug">
                  {post.title}
                </h2>
              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}