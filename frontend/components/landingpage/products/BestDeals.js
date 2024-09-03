import Image from "next/image";
import CartButton from "../button/CartButton";
import { calculateDiscountedPrice } from "../../../lib/priceUtils";
import SeeDetailButton from "../button/SeeDetailButton";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function BestDeals({ image, title, price, discount, wishlist }) {
  const discountedPrice = calculateDiscountedPrice(price, discount);

  return (
    <div className="bg-black h-full min-w-64 md:min-w-96 border border-gray-900 shadow-md overflow-hidden flex flex-col">
      <div className="relative h-40 md:h-48 w-full group">
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
        <div className="absolute top-0 left-0 bg-[#F84343] text-white px-3 py-1 text-xs md:text-sm ">
          {discount}%
        </div>
        <div className="absolute top-0 right-0 bg-[#262526] rounded-full text-white p-3 m-2 text-smmd:text-md ">
          {wishlist ? <FaHeart className="text-[#04536C]" /> : <FaRegHeart />}
        </div>
        <SeeDetailButton />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md md:text-lg font-semibold mb-2 text-white line-clamp-2 h-12 md:h-14">
          {title}
        </h3>
        <div className="flex-grow"></div>
        <div className="flex justify-between items-end">
          <CartButton />
          <div className="flex flex-col items-end">
            <span className="text-gray-500 text-xs md:text-sm line-through">
              Rp {price.toLocaleString()}
            </span>
            <span className="text-md md:text-lg font-bold text-blue-600">
              Rp {discountedPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
