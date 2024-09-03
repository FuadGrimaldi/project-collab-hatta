"use client";

import SliderImage from "../components/landingpage/SliderImage";
import Navbar from "../components/landingpage/Navbar";
import { useState } from "react";
import BestDealsList from "../components/landingpage/products/BestDealsList";
import DiscoverAllButton from "../components/landingpage/button/DiscoverAllButton";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={"Firyal"} />
      <div className="mt-16">
        <SliderImage />
      </div>

      {/* Best Deals */}
      <div className="mt-4 md:p-16 p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold">Best Deals</h1>
            <p className="text-gray-500 text-xs md:text-sm">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <DiscoverAllButton />
        </div>
        <BestDealsList />
      </div>
    </>
  );
}
