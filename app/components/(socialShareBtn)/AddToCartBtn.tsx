"use client";

import { useCart } from "@/app/context/CartContext";

export default function AddToCartBtn({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="btn btn-outline-black ms-2"
    >
      Add to Cart
    </button>
  );
}
