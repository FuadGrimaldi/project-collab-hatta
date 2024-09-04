import { RxCross1 } from "react-icons/rx";
import FilterProduct from "../products/FilterProduct";

export default function FilterModal({
  isOpen,
  onClose,
  onFilterChange,
  onResetFilter,
  currentFilters,
}) {
  if (!isOpen) return null;

  const handleApply = () => {
    // Implementasikan logika untuk mengambil filter yang dipilih
    // dan kirim ke onFilterChange
    const selectedFilters = {}; // Ganti ini dengan logika pengambilan filter yang sebenarnya
    onFilterChange(selectedFilters);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-[#262526] p-8 w-full max-w-md max-h-full overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Filters</h2>
          <RxCross1 size={24} onClick={onClose} className="cursor-pointer" />
        </div>
        <FilterProduct currentFilters={currentFilters} />
        <div className="flex justify-between w-full mt-4 gap-4">
          <button
            className="border border-[#04536C] text-[#04536C] w-full mr-2 p-2"
            onClick={onResetFilter}
          >
            Reset Filter
          </button>
          <button
            className="bg-[#04536C] text-white w-full p-2"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
