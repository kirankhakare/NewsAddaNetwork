export default function BreakingNewsBar() {

  const headlines = [
    "तरुणांसाठी नवीन शासकीय योजना जाहीर.",
    "आरोग्य विभागाकडून नवीन मार्गदर्शक सूचना जारी.",
    "२०२६ मध्ये तंत्रज्ञान क्षेत्रात मोठे बदल अपेक्षित.",
    "नवीन शिक्षण धोरणाबाबत महत्त्वाची घोषणा."
  ];

  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center">

        {/* LABEL */}
        <div className="bg-black px-4 py-2 font-bold whitespace-nowrap">
          ताज्या बातम्या
        </div>

        {/* SCROLL AREA */}
        <div className="overflow-hidden w-full">
          <div className="ticker-wrapper px-6 py-2 font-semibold whitespace-nowrap">

            {/* DUPLICATE CONTENT FOR SEAMLESS LOOP */}
            {[...headlines, ...headlines].map((text, index) => (
              <span key={index} className="mx-10">
                🔴 {text}
              </span>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}