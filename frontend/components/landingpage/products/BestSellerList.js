"use client";

import BestSellers from "./BestSellers";

export default function BestSellerList() {
  const vouchers = [
    {
      id: 1,
      image: "/images/trending1.png",
      title: "Overwatch Game - Battle.net",
      price: 240000,
      discount: 20,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/trending2.png",
      title: "Voucher Game B",
      price: 350000,
      discount: 14,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/slider3.jpg",
      title: "Voucher Game C",
      price: 500000,
      discount: 25,
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
