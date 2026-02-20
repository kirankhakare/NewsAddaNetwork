export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">

        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-red-500">
            NEWSADDANETWORK
          </h2>
          <p className="text-sm mt-2 text-gray-300">
            Daily latest updates about jobs, schemes, health, study and technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} NEWSADDANETWORK. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}