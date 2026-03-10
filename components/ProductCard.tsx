"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link href={`/products/${product.id}`} className="card group block">
      <div className="relative overflow-hidden rounded-t-xl aspect-[3/4] bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount >= 50 && (
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              {product.discount}% OFF
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              Bestseller
            </span>
          )}
        </div>
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-500 mb-0.5">{product.subCategory}</p>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <span className="flex items-center gap-0.5 bg-green-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
            <Star size={10} fill="white" />
            {product.rating}
          </span>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-gray-900">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-xs text-green-600 font-medium">
            {product.discount}% off
          </span>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white"
          }`}
        >
          <ShoppingCart size={15} />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}
