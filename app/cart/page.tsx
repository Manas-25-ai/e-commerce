"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart, getCartKey } from "@/lib/CartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="text-7xl mb-6">🛒</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything yet. Start shopping and fill it up!
        </p>
        <Link href="/products" className="btn-primary inline-flex items-center gap-2">
          <ShoppingBag size={18} /> Start Shopping
        </Link>
      </div>
    );
  }

  const deliveryFee = totalPrice >= 499 ? 0 : 49;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Shopping Cart{" "}
        <span className="text-gray-500 font-normal text-base">
          ({totalItems} {totalItems === 1 ? "item" : "items"})
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={getCartKey(item.product.id, item.selectedSize, item.selectedColor)} className="card p-4 flex gap-4">
              {/* Image */}
              <div className="relative w-24 h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${item.product.id}`}
                  className="font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 text-sm sm:text-base"
                >
                  {item.product.name}
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">{item.product.subCategory}</p>

                <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-600">
                  {item.selectedColor && (
                    <span>Color: <strong>{item.selectedColor}</strong></span>
                  )}
                  {item.selectedSize && (
                    <span>Size: <strong>{item.selectedSize}</strong></span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Price */}
                  <div>
                    <span className="font-bold text-gray-900">₹{item.product.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ₹{item.product.originalPrice}
                    </span>
                    <span className="text-xs text-green-600 ml-2 font-medium">
                      {item.product.discount}% off
                    </span>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        updateQuantity(
                          getCartKey(item.product.id, item.selectedSize, item.selectedColor),
                          item.quantity - 1
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          getCartKey(item.product.id, item.selectedSize, item.selectedColor),
                          item.quantity + 1
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-primary-600">
                    Subtotal: ₹{item.product.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(getCartKey(item.product.id, item.selectedSize, item.selectedColor))}
                    className="text-red-400 hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 underline"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div>
          <div className="card p-5 sticky top-24">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Price ({totalItems} items)</span>
                <span>₹{items.reduce((acc, i) => acc + i.product.originalPrice * i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>
                  −₹{items.reduce((acc, i) => acc + (i.product.originalPrice - i.product.price) * i.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charges</span>
                <span className={deliveryFee === 0 ? "text-green-600 font-medium" : ""}>
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-orange-500">
                  Add ₹{499 - totalPrice} more for free delivery
                </p>
              )}
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                <span>Total Amount</span>
                <span>₹{finalTotal}</span>
              </div>
              <p className="text-green-600 text-xs font-medium">
                You save ₹{items.reduce((acc, i) => acc + (i.product.originalPrice - i.product.price) * i.quantity, 0)} on this order 🎉
              </p>
            </div>

            <button className="w-full btn-primary mt-5 flex items-center justify-center gap-2 py-3 text-base">
              Proceed to Checkout <ArrowRight size={18} />
            </button>

            {/* Payment methods */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 mb-2">Secure Payment Options</p>
              <div className="flex justify-center gap-2 flex-wrap text-xs text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded">UPI</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Net Banking</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Cards</span>
                <span className="bg-gray-100 px-2 py-1 rounded">COD</span>
              </div>
            </div>

            <Link
              href="/products"
              className="block text-center text-primary-600 text-sm font-medium mt-4 hover:underline"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
