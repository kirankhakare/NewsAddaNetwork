export default function BreakingNewsBar() {

  const headlines = [
    "Government launches new scheme for youth employment.",
    "Health department releases new safety guidelines.",
    "Latest technology trends shaping the future in 2026.",
    "New education policy updates announced today."
  ];

  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center">

        {/* LABEL */}
        <div className="bg-black px-4 py-2 font-bold text-sm uppercase">
          Breaking News
        </div>

        {/* SCROLL AREA */}
        <div className="overflow-hidden w-full">
          <div className="marquee px-6 py-2 text-sm md:text-base font-medium">
            {headlines.concat(headlines).map((text, index) => (
              <span key={index} className="mx-8">
                {text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}