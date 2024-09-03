import { TiShoppingCart } from "react-icons/ti";

export default function CartButton() {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white w-20 py-1 transition-colors duration-300">
      <TiShoppingCart className="inline text-white text-xl" />
    </button>
  );
}
