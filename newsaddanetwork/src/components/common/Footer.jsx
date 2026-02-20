import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-extrabold">
            <span className="text-red-600">न्यूज</span>
            <span className="text-white">अड्डा</span>
            <span className="text-gray-400 ml-1">Network</span>
          </h2>

          <p className="text-sm mt-3 text-gray-300 leading-relaxed">
            शासकीय योजना, आरोग्य, रोजगार, अभ्यास आणि तंत्रज्ञानाशी संबंधित
            ताज्या बातम्या व अपडेट्स एका ठिकाणी.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">महत्वाचे दुवे</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about" className="hover:text-red-500">आमच्याबद्दल</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">संपर्क</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-red-500">गोपनीयता धोरण</Link></li>
            <li><Link to="/disclaimer" className="hover:text-red-500">अस्वीकरण</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">न्यूजअड्डा Network</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            © {new Date().getFullYear()} न्यूजअड्डा Network. सर्व हक्क राखीव.
          </p>
        </div>

      </div>
    </footer>
  );
}