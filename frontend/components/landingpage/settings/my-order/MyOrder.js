"use client";

import { useState } from "react";
import Image from "next/image";
import CartButton from "../../button/CartButton";
import OrderTabs from "./OrderTabs";

const categoryOptions = [
  "Digital Product",
  "Physical Product",
  "Service",
  "Subscription",
];

const sampleOrders = [
  {
    id: 1,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 400000,
    finalPrice: 350000,
    image: "/images/detail1.png",
    orderNumber: "1234567890",
    bookedDate: "2024-05-20",
    totalItem: 1,
  },
  {
    id: 2,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 350000,
    finalPrice: 300000,
    image: "/images/detail1.png",
    orderNumber: "1234567890",
    bookedDate: "2024-07-14",
    totalItem: 2,
  },
  // Add more sample orders as needed
];

export default function MyOrder() {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="bg-primary-black w-full mb-6">
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-primary-black flex flex-col md:flex-row md:text-center text-left md:items-center items-start gap-0 md:gap-4 mb-6">
        <h2 className="text-sm md:text-base mb-2">Category Product :</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-60 p-2 border border-gray-300 text-sm text-gray-500"
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-8 bg-primary-black">
        {sampleOrders.map((order) => (
          <div
            key={order.id}
            className="bg-secondary-black flex flex-col gap-4 lg:gap-8 py-8 px-4 lg:px-8 border border-white"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="flex gap-4 md:gap-8 w-full lg:w-3/5">
                <Image
                  src={order.image}
                  alt={order.title}
                  width={74}
                  height={15}
                  className="object-cover w-20 h-28"
                />
                <div className="flex flex-col">
                  <div className="">
                    <span className="text-xs md:text-sm">Order Number</span>
                    <p className="text-base">{order.orderNumber}</p>
                  </div>
                  <div className="flex gap-2 w-full">
                    <span className="text-sm">Booked Date</span>
                    <p className="text-sm">{order.bookedDate}</p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col lg:flex-row gap-0 lg:gap-6 ">
                <div className="flex flex-col w-full lg:w-3/5">
                  <h3 className="text-sm md:text-base font-semibold w-full max-w-[400px] line-clamp-3 lg:line-clamp-2">
                    {order.title}
                  </h3>
                  <p className="text-sm">x {order.totalItem}</p>
                </div>
                <div className="flex flex-col mt-2 md:mt-0 w-full lg:w-2/5 text-end">
                  <span className="text-sm line-through">
                    Rp {order.price.toLocaleString()}
                  </span>
                  <p className="text-base">
                    Rp {order.finalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-full h-[1px] bg-white" />
            <div className="w-full flex-col-reverse md:flex-row gap-4 items-center flex ">
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <button className="w-full md:w-44 px-4 py-2 text-sm md:text-base bg-primary-blue text-white hover:bg-secondary-blue transition-colors">
                  Detail Ratings
                </button>
                <button className="w-full md:w-44 px-4 py-2 text-sm md:text-base border-white border text-white hover:bg-white hover:text-black transition-colors">
                  Detail Order
                </button>
                <CartButton className="w-full md:w-44 px-4 py-2 hidden md:block" />
              </div>
              <div className="flex flex-col w-full items-end justify-end ">
                <p className="text-sm">Order Total</p>
                <p className="text-base font-semibold text-primary-blue">
                  Rp {(order.finalPrice * order.totalItem).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
