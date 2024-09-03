"use client";

import SliderImage from "../components/landingpage/SliderImage";
import Navbar from "../components/landingpage/Navbar";
import { useState } from "react";
import BestDealsList from "../components/landingpage/products/BestDealsList";
import TrendingList from "../components/landingpage/products/TrendingList";
import SectionHeader from "../components/landingpage/SectionHeader";
import NewsList from "../components/landingpage/products/NewsList";
import RecommendedList from "../components/landingpage/products/RecommendedList";

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
        <SectionHeader
          title="Trending Products"
          subtitle="Lorem ipsum dolor sit amet"
        />
        <TrendingList />
      </div>

      {/* Recommended */}
      <div className="mt-4 md:p-16 p-8">
        <SectionHeader
          title="Recommended For You"
          subtitle="Lorem ipsum dolor sit amet"
        />
        <RecommendedList />
      </div>

      {/* News */}
      <div className="mt-4 md:p-16 p-8">
        <SectionHeader title="News" subtitle="Lorem ipsum dolor sit amet" />
        <NewsList />
      </div>
    </>
  );
}
