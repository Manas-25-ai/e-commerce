"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
  { value: "discount", label: "Biggest Discount" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "all"
  );
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchParam) {
      const q = searchParam.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      const catMap: Record<string, string> = {
        women: "Women",
        men: "Men",
        kids: "Kids",
        home: "Home & Living",
      };
      result = result.filter(
        (p) =>
          p.category === catMap[selectedCategory] ||
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, searchParam]);

  const pageTitle = searchParam
    ? `Search results for "${searchParam}"`
    : selectedCategory !== "all"
    ? `${
        categories.find((c) => c.id === selectedCategory)?.name || selectedCategory
      }'s Collection`
    : "All Products";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
        <p className="text-gray-500 text-sm mt-1">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters (desktop) */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="card p-4 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4">Filters</h2>

            {/* Categories */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Category
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                      selectedCategory === "all"
                        ? "bg-primary-100 text-primary-700 font-medium"
                        : "text-gray-600 hover:text-primary-600"
                    }`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "text-gray-600 hover:text-primary-600"
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price range */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Price Range
              </h3>
              <p className="text-xs text-gray-500 mb-1">
                ₹{priceRange[0]} – ₹{priceRange[1]}
              </p>
              <input
                type="range"
                min={0}
                max={1000}
                step={50}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>₹0</span>
                <span>₹1000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Sort + filter bar */}
          <div className="flex items-center justify-between mb-4 gap-3">
            {/* Mobile filter toggle */}
            <button
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-3 py-2"
              onClick={() => setFiltersOpen(true)}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>

            {/* Sort */}
            <div className="ml-auto flex items-center gap-2">
              <label className="text-sm text-gray-600 hidden sm:block">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filters */}
          {selectedCategory !== "all" && (
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                {categories.find((c) => c.id === selectedCategory)?.name ||
                  selectedCategory}
                <button onClick={() => setSelectedCategory("all")}>
                  <X size={12} />
                </button>
              </span>
            </div>
          )}

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-lg">Filters</h2>
              <button onClick={() => setFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Category
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setFiltersOpen(false);
                    }}
                    className={`w-full text-left text-sm py-2 px-2 rounded ${
                      selectedCategory === "all"
                        ? "bg-primary-100 text-primary-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setFiltersOpen(false);
                      }}
                      className={`w-full text-left text-sm py-2 px-2 rounded ${
                        selectedCategory === cat.id
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Max Price: ₹{priceRange[1]}
              </h3>
              <input
                type="range"
                min={0}
                max={1000}
                step={50}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-primary-600"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
