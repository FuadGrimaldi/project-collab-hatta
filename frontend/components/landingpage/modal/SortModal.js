import { RxCross1 } from "react-icons/rx";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "priceLowToHigh", label: "Price Low to High" },
  { value: "priceHighToLow", label: "Price High to Low" },
  { value: "aToZ", label: "A to Z" },
];

export default function SortModal({
  isOpen,
  onClose,
  onSortChange,
  currentSort,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-[#262526] p-8 max-h-full max-w-md w-full flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Sort By</h2>
          <RxCross1 size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        <div className="gap-6 flex flex-col pt-6">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`w-full p-4 hover:bg-[#033A4B] hover:border-[#033A4B] transition-colors duration-300 ${
                currentSort === option.value
                  ? "bg-[#04536C] text-white "
                  : "border border-white text-white"
              }`}
              onClick={() => onSortChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex justify-between w-full mt-6 gap-6">
          <button
            className="border border-[#04536C] text-[#04536C] w-full mr-2 p-4"
            onClick={() => onSortChange("newest")}
          >
            Reset Filter
          </button>
          <button
            className="bg-[#04536C] hover:bg-[#033A4B] transition-colors duration-300 text-white w-full p-4"
            onClick={onClose}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
