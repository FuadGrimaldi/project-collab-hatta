import Image from "next/image";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

export default function CartItem({
  item,
  isSelected,
  updateQuantity,
  removeItem,
  toggleSelection,
}) {
  return (
    <div className="relative flex flex-row gap-4 lg:gap-8 py-8 px-0 lg:px-12 first:-mt-[0.2px]">
      <div className="absolute inset-x-4 lg:inset-x-12 top-0 h-[0.2px] bg-gray-300"></div>

      <div className="flex items-center justify-center w-auto">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelection(item.id)}
          className="w-4 h-4 lg:w-5 lg:h-5"
        />
      </div>
      <Image
        src={item.coverImage}
        alt={item.title}
        width={112}
        height={15}
        className="object-cover w-24 h-32 lg:w-28 lg:h-40"
      />

      <div className="flex w-full flex-col lg:flex-row lg:gap-12">
        <h3 className="text-xs md:text-base lg:text-lg font-semibold w-1/2 line-clamp-3 lg:line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col-reverse lg:flex-row items-start gap-0 lg:gap-12 w-full lg:w-auto">
          <div className="flex w-auto h-6 lg:h-8 mt-2 lg:mt-0 gap-0 text-sm font-light">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="text-black bg-[#ececec] px-2 py-1 text-xs lg:text-sm font-light w-6 h-6 lg:w-8 lg:h-8"
            >
              <FaMinus />
            </button>
            <input
              className="w-10 text-center bg-black text-white border border-[#ececec] text-xslg:text-sm font-light"
              value={item.quantity}
              readOnly
            />
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="text-black bg-[#ececec] px-2 py-1 text-xs lg:text-sm font-light"
            >
              <FaPlus />
            </button>
          </div>
          <div className=" w-auto">
            <span className="font-light text-[10px] md:text-xs lg:text-sm">
              Price
            </span>
            <p className="font-semibold text-xs md:text-base lg:text-lg">
              Rp {(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={() => removeItem(item.id)}
            className="hidden lg:block ml-auto w-12 text-xl text-gray-500 hover:text-red-500 transition-colors mt-2 lg:mt-0"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
