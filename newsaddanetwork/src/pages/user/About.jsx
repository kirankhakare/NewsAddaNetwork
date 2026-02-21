import { FaNewspaper, FaBullseye, FaUsers } from "react-icons/fa";

export default function About(){

  return(
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          आमच्याबद्दल
        </h1>
        <p className="text-gray-600 mt-3">
          महाराष्ट्रातील नागरिकांसाठी रोज ताज्या आणि विश्वासार्ह बातम्या देण्याचा आमचा प्रयत्न.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <FaNewspaper className="text-red-600 text-3xl mx-auto mb-3"/>
          <h3 className="font-bold text-lg">न्यूजअड्डा Network</h3>
          <p className="text-gray-600 text-sm mt-2">
            आम्ही दररोज महाराष्ट्रातील महत्वाच्या बातम्या, सरकारी योजना,
            रोजगार आणि तंत्रज्ञान विषयक ब्लॉग प्रकाशित करतो.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <FaBullseye className="text-blue-600 text-3xl mx-auto mb-3"/>
          <h3 className="font-bold text-lg">आमचे ध्येय</h3>
          <p className="text-gray-600 text-sm mt-2">
            प्रत्येक नागरिकापर्यंत योग्य आणि स्पष्ट माहिती पोहोचवणे
            आणि समाजाला अपडेट ठेवणे हे आमचे मुख्य ध्येय आहे.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <FaUsers className="text-green-600 text-3xl mx-auto mb-3"/>
          <h3 className="font-bold text-lg">महाराष्ट्रासाठी</h3>
          <p className="text-gray-600 text-sm mt-2">
            आमचे सर्व ब्लॉग महाराष्ट्रातील लोकांसाठी तयार केलेले आहेत
            जेणेकरून त्यांना रोज नवीन माहिती मिळेल.
          </p>
        </div>

      </div>

      {/* EXTRA TEXT */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <p className="text-gray-700 leading-7">
          न्यूजअड्डा Network हा एक डिजिटल न्यूज ब्लॉग प्लॅटफॉर्म आहे
          जिथे आम्ही रोज महाराष्ट्रातील ताज्या बातम्या आणि माहितीपूर्ण लेख
          प्रकाशित करतो. आमचे उद्दिष्ट आहे की प्रत्येक वाचकाला
          सोप्या भाषेत आणि अचूक माहिती मिळावी.
        </p>
      </div>

    </div>
  );
}