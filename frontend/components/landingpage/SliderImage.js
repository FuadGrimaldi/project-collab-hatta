import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function SliderImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const vouchers = [
    {
      image: "/images/slider1.svg",
      title: "Voucher Game A",
    },
    {
      image: "/images/slider2.jpg",
      title: "Voucher Game B",
    },
    {
      image: "/images/slider1.svg",
      title: "Voucher Game C",
    },
    {
      image: "/images/slider3.jpg",
      title: "Voucher Game D",
    },
    {
      image: "/images/slider1.svg",
      title: "Voucher Game E",
    },
  ];

  const changeImage = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % vouchers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [vouchers.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-56 md:h-96">
        <div className="relative w-full h-full overflow-hidden">
          {vouchers.map((voucher, index) => (
            <div
              key={voucher.title}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={voucher.image}
                layout="fill"
                objectFit="cover"
                alt={voucher.title}
              />
              <div className="absolute top-5 -right-5 md:top-20 md:right-20 w-60 md:w-80 text-white p-4 z-10">
                <span className="text-[10px] md:text-sm bg-yellow-500 px-2 py-1">
                  NEW
                </span>
                <h3 className="text-md md:text-xl font-bold mt-3">
                  {voucher.title}
                </h3>
                <p className="text-[10px] md:text-sm mt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                </p>

                <button className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white w-24 text-[10px] md:text-base md:w-40 px-2 md:px-4 py-1 md:py-2 mt-4 ">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {vouchers.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`w-10 h-1 rounded transition-colors duration-300 ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Lihat voucher ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
