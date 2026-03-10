import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👗</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About Priya&apos;s Fashion Hub
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From a small Meesho store to your own fashion destination — crafted
          with love from Jaipur, India.
        </p>
      </div>

      {/* Story */}
      <div className="card p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <div className="prose text-gray-600 space-y-4">
          <p>
            Priya&apos;s Fashion Hub was born out of a simple dream — to make
            beautiful, high-quality ethnic and casual wear accessible to every
            woman, man, and family in India without breaking the bank.
          </p>
          <p>
            What started as a small shop on Meesho, selling hand-picked kurtis
            and sarees to neighbours and friends in Jaipur, has grown into a
            beloved fashion brand trusted by over <strong>10,000 customers</strong>{" "}
            across India.
          </p>
          <p>
            We source our fabrics directly from weavers and manufacturers in
            Rajasthan, Gujarat, and Surat — ensuring quality at every step
            while supporting local artisans. Every piece in our collection is
            personally selected by Priya herself.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {[
          {
            icon: "💎",
            title: "Quality First",
            desc: "Every product goes through strict quality checks before reaching you. We only sell what we would wear ourselves.",
          },
          {
            icon: "💰",
            title: "Best Prices",
            desc: "Direct sourcing from manufacturers means you get factory prices. No middlemen, no hidden markups.",
          },
          {
            icon: "❤️",
            title: "Customer Love",
            desc: "10,000+ happy customers can't be wrong! Your satisfaction is our biggest motivation to keep going.",
          },
        ].map((val, i) => (
          <div key={i} className="card p-5 text-center">
            <div className="text-4xl mb-3">{val.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
            <p className="text-sm text-gray-600">{val.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-primary-600 to-pink-500 rounded-2xl p-8 text-white mb-10">
        <h2 className="text-xl font-bold text-center mb-6 text-white/90">
          Our Journey in Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { number: "10,000+", label: "Happy Customers" },
            { number: "500+", label: "Products" },
            { number: "4.5★", label: "Average Rating" },
            { number: "3 Years", label: "In Business" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-bold">{stat.number}</div>
              <div className="text-pink-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Ready to Shop?
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our latest collection and find your perfect style.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            Shop Now <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
