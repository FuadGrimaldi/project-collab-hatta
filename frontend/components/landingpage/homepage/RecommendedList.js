"use client";

import Image from "next/image";
import BestDeals from "./BestDeals";

export default function RecommendedList() {
  const vouchers = [
    {
      id: 1,
      image: "/images/rec1.png",
      title: "Overwatch Game - Battle.net",
      price: 140000,
      discount: 15,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/rec2.png",
      title: "Destroy All Humans Game - Mobile Game",
      price: 350000,
      discount: 20,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/slider3.jpg",
      title: "Voucher Game B",
      price: 200000,
      discount: 25,
      wishlist: false,
    },
    {
      id: 4,
      image: "/images/slider2.jpg",
      title: "Voucher Game C",
      price: 200000,
      discount: 25,
      wishlist: false,
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3 overflow-x-auto scrollbar-hide lg:overflow-x-visible">
        <div className="flex lg:grid lg:grid-cols-2 gap-4">
          {vouchers.slice(0, 4).map((voucher, index) => (
            <div key={`${voucher.id}-${index}`} className="lg:min-w-10">
              <BestDeals
                className={"min-w-64 md:min-w-68"}
                image={voucher.image}
                title={voucher.title}
                price={voucher.price}
                discount={voucher.discount}
                wishlist={voucher.wishlist}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 relative hidden lg:block">
        <Image
          src="/images/recommended1.png"
          alt="Recommended 1"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
