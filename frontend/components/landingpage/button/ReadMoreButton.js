export default function ReadMoreButton({ className }) {
  return (
    <button
      className={`bg-[#04536C] hover:bg-[#033A4B] text-white text-xs md:text-sm w-28 md:w-32 py-2 transition-colors duration-300 ${className}`}
    >
      Read More
    </button>
  );
}
