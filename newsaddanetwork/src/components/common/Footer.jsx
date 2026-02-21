import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            <span className="text-red-600">न्यूज</span>
            अड्डा <span className="text-gray-400 text-lg">Network</span>
          </h2>

          <p className="text-sm mt-4 leading-relaxed">
            शासकीय योजना, आरोग्य, रोजगार, शिक्षण आणि तंत्रज्ञानाशी संबंधित
            ताज्या बातम्या व अपडेट्स एका विश्वासार्ह प्लॅटफॉर्मवर.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Reference: newsaddanetwork.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            महत्वाचे दुवे
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                आमच्याबद्दल
              </Link>
            </li>
            <li>
              <Link to="/contactUS" className="hover:text-red-500 transition">
                संपर्क
              </Link>
            </li>
            <li>
              <Link to="/privacyPolicy" className="hover:text-red-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/Disclaimer" className="hover:text-red-500 transition">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/TermsOfService" className="hover:text-red-500 transition">
                Terms Of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories (Professional touch for news site) */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            Categories
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/category/govt-schemes" className="hover:text-red-500">शासकीय योजना</Link></li>
            <li><Link to="/category/health" className="hover:text-red-500">आरोग्य</Link></li>
            <li><Link to="/category/jobs" className="hover:text-red-500">रोजगार</Link></li>
            <li><Link to="/category/education" className="hover:text-red-500">अभ्यास</Link></li>
            <li><Link to="/category/technology" className="hover:text-red-500">तंत्रज्ञान</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              <FaTwitter />
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Stay updated with latest news and updates.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} न्यूजअड्डा Network. सर्व हक्क राखीव.
      </div>
    </footer>
  );
}