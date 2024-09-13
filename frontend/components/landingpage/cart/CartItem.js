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
    <div className="text-primary-white relative flex flex-row gap-4 lg:gap-8 py-8 px-0 lg:px-12 first:-mt-[0.2px]">
      <div className="absolute inset-x-4 lg:inset-x-12 top-0 h-[0.2px] bg-primary-gray"></div>

      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelection(item.id)}
          className="w-4 h-4 lg:w-5 lg:h-5 peer appearance-none checked:bg-primary-blue checked:border-transparent"
        />
      </div>
      <Image
        src={item.coverImage}
        alt={item.title}
        width={112}
        height={15}
        className="object-cover w-24 h-32 lg:w-28 lg:h-40"
      />

      <div className="flex w-full flex-col lg:flex-row gap-0 lg:gap-6">
        <h3 className="text-xs md:text-base lg:text-lg font-semibold w-full max-w-[300px] line-clamp-3 lg:line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col-reverse lg:flex-row items-start mt-2 md:mt-0 gap-0 lg:gap-16 w-full max-w-[400px]">
          <div className="flex w-auto h-6 lg:h-8 mt-2 lg:mt-0 gap-0 text-sm font-light">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="text-primary-blue bg-primary-white px-2 py-1 text-xs lg:text-sm font-light w-6 h-6 lg:w-8 lg:h-8"
            >
              <FaMinus />
            </button>
            <input
              className="w-10 text-center bg-secondary-black text-white border border-primary-white text-xslg:text-sm font-light"
              value={item.quantity}
              readOnly
            />
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className=" bg-primary-white text-primary-blue px-2 py-1 text-xs lg:text-sm font-light"
            >
              <FaPlus />
            </button>
          </div>
          <div className="w-full">
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
            className="hidden lg:block ml-auto w-12 text-xl text-primary-white hover:text-primary-red transition-colors mt-2 lg:mt-0"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
