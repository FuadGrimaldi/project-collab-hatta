"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CartSummary({ subtotal, serviceFee, total, hasItems }) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckout = () => {
    if (isMounted && hasItems) {
      router.push("/checkout");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full border border-white p-4 ">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rp {subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Service Fee (5%)</span>
        <span>Rp {serviceFee.toLocaleString()}</span>
      </div>
      <div className="border-t border-white my-4"></div>
      <div className="flex justify-between font-bold mb-4">
        <span>Total Price</span>
        <span>Rp {total.toLocaleString()}</span>
      </div>
      <button
        onClick={handleCheckout}
        className={`w-full py-2 rounded transition-colors ${
          hasItems
            ? "bg-primary-green text-white hover:bg-secondary-green"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
        disabled={!hasItems}
      >
        Checkout
      </button>
    </div>
  );
}
