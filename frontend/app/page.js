"use client";

import SliderImage from "../components/landingpage/SliderImage";
import Navbar from "../components/landingpage/Navbar";
import BestDealsList from "../components/landingpage/homepage/BestDealsList";
import TrendingList from "../components/landingpage/homepage/TrendingList";
import SectionHeader from "../components/landingpage/SectionHeader";
import NewsList from "../components/landingpage/homepage/NewsList";
import RecommendedList from "../components/landingpage/homepage/RecommendedList";
import BestSellerList from "../components/landingpage/homepage/BestSellerList";
import LatestReleaseList from "../components/landingpage/homepage/LatestReleaseList";
import PreordersList from "../components/landingpage/homepage/PreordersList";
import Footer from "../components/landingpage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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

      {/* Best Sellers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:p-16 p-8">
        <div className="mt-4">
          <SectionHeader
            title="Best Sellers"
            subtitle="Lorem ipsum dolor sit amet"
          />
          <BestSellerList />
        </div>
        <div className="mt-4 ">
          <SectionHeader
            title="Latest Release"
            subtitle="Lorem ipsum dolor sit amet"
          />
          <LatestReleaseList />
        </div>
        <div className="mt-4 ">
          <SectionHeader
            title="Pre-Orders"
            subtitle="Lorem ipsum dolor sit amet"
          />
          <PreordersList />
        </div>
      </div>

      {/* News */}
      <div className="mt-4 md:p-16 p-8">
        <SectionHeader title="News" subtitle="Lorem ipsum dolor sit amet" />
        <NewsList />
      </div>

      <Footer />
    </>
  );
}
