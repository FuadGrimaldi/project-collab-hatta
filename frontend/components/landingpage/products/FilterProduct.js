"use client";

import { useState } from "react";

export default function FilterProduct() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedFilters, setSelectedFilters] = useState({});

  const filters = {
    systemDevice: ["Windows", "Mac", "Linux"],
    device: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    tag: [
      "Co-op",
      "MMO",
      "HTC Vive",
      "Single Player",
      "Gamepad",
      "Multiplayer",
    ],
  };

  const handleFilterChange = (category, item) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: !prev[category]?.[item],
      },
    }));
  };
  return (
    <div>
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mt-8">Price</h3>
        <div className="w-full flex border border-white mt-4">
          <span className="bg-secondary-black text-white px-2 py-2 rounded-l flex items-center justify-center">
            IDR
          </span>
          <input
            type="number"
            placeholder="Min"
            className="w-full p-2 border border-l-0 rounded-r"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
          />
        </div>
        <div className="w-full flex border border-white mt-4">
          <span className="bg-secondary-black  text-white px-2 py-2 rounded-l flex items-center justify-center">
            IDR
          </span>
          <input
            type="number"
            placeholder="Max"
            className="w-full p-2 border border-l-0 rounded-r"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: e.target.value }))
            }
          />
        </div>
      </div>
      {/* Checkbox Filters */}
      {Object.entries(filters).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="font-semibold mb-2 capitalize">
            {category.replace(/([A-Z])/g, " $1").trim()}
          </h3>
          {items.map((item) => (
            <div key={item} className="flex justify-between items-center mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 appearance-none h-4 w-4 border border-secondary-gray rounded-sm bg-white checked:bg-primary-blue checked:border-secondary-blue focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  checked={selectedFilters[category]?.[item] || false}
                  onChange={() => handleFilterChange(category, item)}
                />
                <span className="ml-2">{item}</span>
              </label>
              <span className="text-primary-gray">0</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
