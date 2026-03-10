import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Shield, Truck, RefreshCw } from "lucide-react";
import { getFeaturedProducts, getBestsellerProducts, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellerProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                ✨ New Collection 2024
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Fashion That
                <span className="text-primary-600"> Speaks</span>
                <br />
                Your Style
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Discover handpicked ethnic wear, trendy casuals, and home décor
                at prices that make you smile. Quality guaranteed, delivered to
                your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary inline-flex items-center gap-2">
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link href="/products?category=women" className="btn-outline inline-flex items-center gap-2">
                  Women&apos;s Collection
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <strong>4.5</strong> Rating
                </div>
                <div className="flex items-center gap-1">
                  👥 <strong>10,000+</strong> Happy Customers
                </div>
                <div className="flex items-center gap-1">
                  📦 <strong>500+</strong> Products
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary-100 rounded-full" />
                <Image
                  src="/placeholder-kurti.svg"
                  alt="Fashion Collection"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Upto 70% OFF</div>
                  <div className="text-xs text-gray-500">On all categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Truck size={24} className="text-primary-600" />, title: "Free Delivery", desc: "On orders above ₹499" },
              { icon: <RefreshCw size={24} className="text-primary-600" />, title: "Easy Returns", desc: "7-day return policy" },
              { icon: <Shield size={24} className="text-primary-600" />, title: "Secure Payment", desc: "100% safe checkout" },
              { icon: <Star size={24} className="text-primary-600" />, title: "Best Quality", desc: "Curated products only" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3">
                <div className="bg-primary-50 p-2 rounded-lg flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <Link href="/products" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="card p-6 text-center hover:border-primary-200 border border-transparent transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count}+ Products</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-500 text-sm mt-1">Handpicked just for you</p>
            </div>
            <Link href="/products" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🔥 Bestsellers</h2>
            <p className="text-gray-500 text-sm mt-1">Most loved by our customers</p>
          </div>
          <Link href="/products" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-pink-500 py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Limited Time Offer 🎊</h2>
          <p className="text-pink-100 text-lg mb-6">
            Get up to <strong>70% off</strong> on all ethnic wear. Use code{" "}
            <strong className="bg-white/20 px-2 py-0.5 rounded">PRIYA70</strong>
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition-colors"
          >
            Grab The Deal <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          What Our Customers Say 💬
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "Anjali S.",
              location: "Mumbai",
              review: "The quality of kurtis is amazing! Better than what I expected. Will definitely order again.",
              rating: 5,
              avatar: "A",
            },
            {
              name: "Rekha M.",
              location: "Delhi",
              review: "Fast delivery and the saree was exactly as shown. The colours are vibrant and fabric is soft.",
              rating: 5,
              avatar: "R",
            },
            {
              name: "Priyanka G.",
              location: "Bangalore",
              review: "Excellent customer service! They helped me with size and the palazzo set fits perfectly.",
              rating: 4,
              avatar: "P",
            },
          ].map((t, i) => (
            <div key={i} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">📍 {t.location}</div>
                </div>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-300"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic">&ldquo;{t.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
