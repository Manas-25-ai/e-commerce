"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { CartItem, Product } from "@/lib/products";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        product: Product;
        quantity: number;
        selectedSize?: string;
        selectedColor?: string;
      };
    }
  | { type: "REMOVE_ITEM"; payload: { cartKey: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { cartKey: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (
    product: Product,
    quantity: number,
    selectedSize?: string,
    selectedColor?: string
  ) => void;
  removeItem: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
}

export function getCartKey(
  productId: string,
  selectedSize?: string,
  selectedColor?: string
): string {
  return `${productId}:${selectedSize ?? ""}:${selectedColor ?? ""}`;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "LOAD_CART":
      return { items: action.payload };
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.payload.product.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
            selectedSize: action.payload.selectedSize,
            selectedColor: action.payload.selectedColor,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) =>
            getCartKey(item.product.id, item.selectedSize, item.selectedColor) !==
            action.payload.cartKey
        ),
      };
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter(
            (item) =>
              getCartKey(item.product.id, item.selectedSize, item.selectedColor) !==
              action.payload.cartKey
          ),
        };
      }
      return {
        items: state.items.map((item) =>
          getCartKey(item.product.id, item.selectedSize, item.selectedColor) ===
          action.payload.cartKey
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        dispatch({ type: "LOAD_CART", payload: JSON.parse(saved) });
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const addItem = (
    product: Product,
    quantity: number,
    selectedSize?: string,
    selectedColor?: string
  ) =>
    dispatch({
      type: "ADD_ITEM",
      payload: { product, quantity, selectedSize, selectedColor },
    });

  const removeItem = (cartKey: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: { cartKey } });

  const updateQuantity = (cartKey: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { cartKey, quantity } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
