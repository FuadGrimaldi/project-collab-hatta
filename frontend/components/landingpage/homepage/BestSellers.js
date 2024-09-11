import Image from "next/image";
import CartButton from "../button/CartButton";
import { calculateDiscountedPrice } from "../../../lib/priceUtils";

export default function BestSellers({ image, title, price, discount }) {
  const discountedPrice = calculateDiscountedPrice(price, discount);

  return (
    <article className="bg-secondary-black h-full w-full border border-primary-gray shadow-md overflow-hidden flex">
      <div className="relative h-32 w-20 flex-shrink-0">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3 flex flex-col justify-between flex-grow">
        <h3 className="text-md md:text-lg font-semibold mb-2 text-white line-clamp-2">
          {title}
        </h3>
        <div className="flex justify-between items-end">
          <PriceDisplay
            originalPrice={price}
            discountedPrice={discountedPrice}
          />
          <CartButton />
        </div>
      </div>
    </article>
  );
}

function PriceDisplay({ originalPrice, discountedPrice }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-primary-gray text-xs md:text-sm line-through">
        Rp {originalPrice.toLocaleString()}
      </span>
      <span className="text-sm md:text-base font-bold text-primary-blue">
        Rp {discountedPrice.toLocaleString()}
      </span>
    </div>
  );
}
