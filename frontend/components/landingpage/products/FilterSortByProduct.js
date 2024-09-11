"use client";

import { useState } from "react";

export default function FilterSortByProduct() {
  const [selectedSort, setSelectedSort] = useState("");

  const sortOptions = [
    "Most Popular",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
  ];

  return (
    <div className="flex flex-row gap-4 items-center">
      <span className="font-normal text-center">Sort By:</span>
      <div>
        <select
          className="w-full p-2 border text-black"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="">Select sorting</option>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
