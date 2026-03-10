import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">👗</span>
              <span className="font-bold text-white text-lg">
                Priya&apos;s Fashion Hub
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop destination for quality ethnic wear, casual clothing,
              and home décor at unbeatable prices.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              📍 Jaipur, Rajasthan, India
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=women"
                  className="hover:text-primary-400 transition-colors"
                >
                  Women&apos;s Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=men"
                  className="hover:text-primary-400 transition-colors"
                >
                  Men&apos;s Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=kids"
                  className="hover:text-primary-400 transition-colors"
                >
                  Kids&apos; Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=home"
                  className="hover:text-primary-400 transition-colors"
                >
                  Home &amp; Living
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary-400 transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>✉️ priya.fashionhub@gmail.com</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-primary-600 text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors text-lg"
                    aria-label="Instagram"
                  >
                    📸
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-primary-600 text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors text-lg"
                    aria-label="WhatsApp"
                  >
                    💬
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-primary-600 text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors text-lg"
                    aria-label="Facebook"
                  >
                    👤
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Priya&apos;s Fashion Hub. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Powered by passion for fashion 💕 | Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
