"use client";

import Trending from "./Trending";

export default function TrendingList() {
  const vouchers = [
    {
      id: 1,
      image: "/images/trending1.png",
      title: "Overwatch Game - Battle.net",
      price: 300000,
      discount: 25,
      wishlist: false,
    },
    {
      id: 2,
      image: "/images/trending2.png",
      title: "Voucher Game B",
      price: 159000,
      discount: 20,
      wishlist: true,
    },
    {
      id: 3,
      image: "/images/slider3.jpg",
      title: "Voucher Game C",
      price: 200000,
      discount: 25,
      wishlist: false,
    },
    // ... tambahkan voucher lainnya
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-8">
        {[...vouchers, ...vouchers, ...vouchers].map((voucher, index) => (
          <Trending
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
