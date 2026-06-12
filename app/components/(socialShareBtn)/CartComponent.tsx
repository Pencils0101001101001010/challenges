"use client";

import { useState } from "react";
import "../../styles/socialSharebtn.css";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

function CartComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div>
      {isOpen ? (
        <div className="cart-content-section">
          <span className="cart-title  ">Cart</span>

          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-body-content">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="cart-image-style"
                />
                <span>{item.title}</span>
                <small className="text-muted">
                  R {item.price} x {item.quantity}
                </small>
              </div>
            ))}

            <h5 className="text-end">Total: R {totalPrice.toFixed(2)}</h5>
            <button className="checkout-btn-style">Checkout</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="cart-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            className="bi bi-basket3"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default CartComponent;
