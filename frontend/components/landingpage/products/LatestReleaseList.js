"use client";

import BestSellers from "./BestSellers";

export default function LatestReleaseList() {
  const vouchers = [
    {
      id: 1,
      image: "/images/news1.png",
      title: "Overwatch Game - Battle.net",
      price: 180000,
      discount: 4,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/rec1.png",
      title: "Voucher Game B",
      price: 150000,
      discount: 20,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/latest1.png",
      title: "Voucher Game C",
      price: 400000,
      discount: 15,
      wishlist: false,
    },
    // ... tambahkan voucher lainnya
  ];

  return (
    <div className="w-full ">
      <div className="flex flex-col gap-4">
        {[...vouchers, ...vouchers].map((voucher, index) => (
          <BestSellers
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
  );
}
