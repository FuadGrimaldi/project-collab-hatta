import { TiShoppingCart } from "react-icons/ti";

export default function CartButton({ className = "min-w-32" }) {
  return (
    <button
      className={` bg-green-500 hover:bg-green-600 text-white py-1 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      Add to Cart
    </button>
  );
}
