"use client";
import { useState } from "react";
import BestDeals from "./BestDeals";
import useWindowSize from "../../../hooks/useWindowSize";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BestDealsList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { width } = useWindowSize();

  const vouchers = [
    {
      id: 1,
      image: "/images/slider2.jpg",
      title: "Destroy All Humans Game - Mobile Game",
      price: 10000,
      discount: 25,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/slider1.svg",
      title: "Voucher Game B",
      price: 10000,
      discount: 25,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/slider3.jpg",
      title: "Voucher Game C",
      price: 10000,
      discount: 25,
      wishlist: false,
    },
    // ... tambahkan voucher lainnya
  ];

  const scrollAmount = width < 768 ? 300 : 1200;

  const handleScroll = (direction) => {
    const container = document.getElementById("voucher-container");
    if (container) {
      const newPosition =
        direction === "next"
          ? scrollPosition + scrollAmount
          : scrollPosition - scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => handleScroll("prev")}
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-[#04536C] hover:bg-[#033A4B] transition-colors duration-300 text-white rounded-full p-3 z-10"
        aria-label="Previous"
      >
        <IoIosArrowBack />
      </button>

      <div
        id="voucher-container"
        className="w-full overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-4">
          {[...vouchers, ...vouchers, ...vouchers].map((voucher, index) => (
            <BestDeals
              className={"min-w-64 md:min-w-96"}
              key={`${voucher.id}-${index}`}
              image={voucher.image}
              title={voucher.title}
              price={voucher.price}
              discount={voucher.discount}
              wishlist={voucher.wishlist}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => handleScroll("next")}
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-[#04536C] hover:bg-[#033A4B] transition-colors duration-300 text-white rounded-full p-3 z-10"
        aria-label="Next"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
