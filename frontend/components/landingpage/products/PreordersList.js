"use client";

import BestSellers from "./BestSellers";

export default function PreordersList() {
  const vouchers = [
    {
      id: 1,
      image: "/images/pre2.png",
      title: "Overwatch Game - Battle.net",
      price: 100000,
      discount: 5,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/rec2.png",
      title: "Voucher Game B",
      price: 150000,
      discount: 20,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/pre1.png",
      title: "Steam Gift Card 5 USD Steam Key Global",
      price: 220000,
      discount: 12,
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
