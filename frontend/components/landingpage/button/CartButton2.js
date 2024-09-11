export default function CartButton({ className = "min-w-32" }) {
  return (
    <button
      className={`bg-primary-green hover:bg-secondary-green text-white py-1 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      Add to Cart
    </button>
  );
}
