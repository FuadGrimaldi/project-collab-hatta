"use client";

import { useState, useEffect } from "react";

export default function OrderTabs({ activeTab, setActiveTab }) {
  const orderTabs = [
    "All Orders",
    "Waiting for Payment",
    "Processed",
    "Shipped",
    "Completed",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="mb-6">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-2 border border-white text-white bg-transparent focus:ring-white focus:border-white"
        >
          {orderTabs.map((tab) => (
            <option className="text-black" key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="border-white border mb-6">
      <div className="flex justify-around gap-4">
        {orderTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-4 ${
              activeTab === tab
                ? "border-b-4 border-[#04536C] text-[#04536C]"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
