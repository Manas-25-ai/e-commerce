"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft, Shield, Truck, RefreshCw, Check } from "lucide-react";
import { Product, products } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary-600">Products</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-primary-600">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
        {/* Images */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.isBestseller && (
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                🔥 Bestseller
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary-500" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="text-primary-600 text-sm font-medium mb-1">
            {product.category} › {product.subCategory}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-full text-sm font-semibold">
              <Star size={14} fill="white" />
              {product.rating}
            </div>
            <span className="text-gray-500 text-sm">
              {product.reviewCount.toLocaleString()} ratings
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
            <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded text-sm">
              {product.discount}% OFF
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            You save{" "}
            <strong className="text-green-600">
              ₹{product.originalPrice - product.price}
            </strong>
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Color: <span className="font-normal text-gray-600">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-sm rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? "border-primary-500 bg-primary-50 text-primary-700 font-medium"
                        : "border-gray-200 text-gray-600 hover:border-primary-300"
                    }`}
                  >
                    {selectedColor === color && <Check size={12} className="inline mr-1" />}
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Size: <span className="font-normal text-gray-600">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 text-sm rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-gray-200 text-gray-600 hover:border-primary-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-3 mb-6">
            <p className="text-sm font-semibold text-gray-700">Qty:</p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-primary-600 hover:bg-primary-700 text-white"
              }`}
            >
              <ShoppingCart size={18} />
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>
            <Link
              href="/cart"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Buy Now
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-600 border-t border-gray-100 pt-5">
            <div className="flex flex-col items-center gap-1">
              <Truck size={18} className="text-primary-500" />
              <span>Free Delivery above ₹499</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RefreshCw size={18} className="text-primary-500" />
              <span>7-Day Easy Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield size={18} className="text-primary-500" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="card p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Product Description</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">Related Products</h2>
            <Link
              href={`/products?category=${product.category.toLowerCase()}`}
              className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={14} className="rotate-180" /> View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
