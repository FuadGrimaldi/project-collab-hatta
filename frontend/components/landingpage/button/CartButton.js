import { TiShoppingCart } from "react-icons/ti";

export default function CartButton({ className = "w-20" }) {
  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white py-1 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <TiShoppingCart className="inline text-white text-lg md:text-xl" />
    </button>
  );
}
