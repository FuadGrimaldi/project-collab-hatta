"use client";

import SliderImage from "../components/landingpage/SliderImage";
import Navbar from "../components/landingpage/Navbar";
import { useState } from "react";
import BestDealsList from "../components/landingpage/products/BestDealsList";
import TrendingList from "../components/landingpage/products/TrendingList";
import SectionHeader from "../components/landingpage/SectionHeader";
import NewsList from "../components/landingpage/products/NewsList";

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
        <SectionHeader
          title="Best Deals"
          subtitle="Lorem ipsum dolor sit amet"
        />
        <BestDealsList />
      </div>

      {/* Trending */}
      <div className="mt-4 md:p-16 p-8">
        <SectionHeader title="Trending" subtitle="Lorem ipsum dolor sit amet" />
        <TrendingList />
      </div>

      {/* News */}
      <div className="mt-4 md:p-16 p-8">
        <SectionHeader title="News" subtitle="Lorem ipsum dolor sit amet" />
        <NewsList />
      </div>
    </>
  );
}
