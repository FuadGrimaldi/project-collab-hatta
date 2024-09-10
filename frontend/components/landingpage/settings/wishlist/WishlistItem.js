import { Button } from "flowbite-react";
import Image from "next/image";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import CartButton2 from "../../button/CartButton2";

export default function WishlistItem({ item, removeItem }) {
  return (
    <div className="relative flex flex-row gap-4 lg:gap-8 py-8 px-0 lg:px-4 first:-mt-[0.2px]">
      <div className="absolute inset-x-4 top-0 h-[0.2px] bg-gray-300"></div>

      <Image
        src={item.coverImage}
        alt={item.title}
        width={112}
        height={15}
        className="object-cover w-24 h-32 lg:w-28 lg:h-36"
      />

      <div className="flex w-full flex-col lg:flex-row gap-0 lg:gap-6">
        <h3 className="text-xs md:text-base lg:text-lg font-semibold w-full max-w-[400px] line-clamp-3 lg:line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col mt-2 md:mt-0 gap-0 lg:gap-16 w-full max-w-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="hidden lg:block w-full">
              <span className="font-light text-[10px] md:text-xs lg:text-sm">
                Date Added
              </span>
              <p className="font-semibold text-xs md:text-base lg:text-lg">
                {item.dateAdded}
              </p>
            </div>
            <div className="w-full">
              <span className="font-light text-[10px] md:text-xs lg:text-sm">
                Price
              </span>
              <p className="font-semibold text-xs md:text-base lg:text-lg">
                Rp {item.price.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="hidden lg:block w-full"></div>
            <CartButton2 className="w-full mt-4 lg:mt-0" />
          </div>
        </div>

        <div className="flex justify-end w-40 items-start">
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
