"use client";

import { useEffect, useState } from "react";
import BestDeals from "../../../components/landingpage/homepage/BestDeals";
import FilterProduct from "../../../components/landingpage/products/FilterProduct";
import FilterSortByProduct from "../../../components/landingpage/products/FilterSortByProduct";
import Navbar from "../../../components/landingpage/Navbar";
import Footer from "../../../components/landingpage/Footer";
import { FaFilter, FaSort } from "react-icons/fa";
import SortModal from "../../../components/landingpage/modal/SortModal";
import FilterModal from "../../../components/landingpage/modal/FilterModal";
import { getProducts, setAuthToken } from "../../../services/api";
import ErrorPage from "../../../components/landingpage/ErrorPage";

const tabs = ["All Games", "New Releases", "Upcoming", "Sale"];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All Games");
  const [showSortModal, setShowSortModal] = useState(false);
  const [sortOption, setSortOption] = useState("newest");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);

    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log("data", data);
        setProducts(data.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowFilterModal(false);
  };

  const handleResetFilter = () => {
    setFilters({});
    setShowFilterModal(false);
  };

  if (error)
    return (
      <div>
        <ErrorPage />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 md:px-16 pb-16 pt-28">
        {/* Kontrol mobile */}
        <div className="lg:hidden flex flex-col gap-5 mb-4">
          <select
            className="w-full text-black p-2"
            onChange={(e) => setActiveTab(e.target.value)}
            value={activeTab}
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
          <div className="flex justify-between gap-5">
            <div className="w-full">
              <button
                onClick={() => setShowFilterModal(true)}
                className="w-full bg-white text-black p-2 flex items-center"
              >
                <FaFilter className="mr-2" /> Filter
              </button>
            </div>
            <div className="w-full">
              <button
                onClick={() => setShowSortModal(true)}
                className="w-full bg-white text-black p-2  flex items-center"
              >
                <FaSort className="mr-2" /> Sort
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar filter - sembunyikan di mobile */}
          <div className="hidden lg:block w-full md:w-1/4 pr-0 md:pr-16 pt-3">
            <h2 className="text-xl font-bold">Filters</h2>
            <FilterProduct />
          </div>

          {/* Konten utama */}
          <div className="w-full lg:w-3/4">
            {/* Tab - sembunyikan di mobile */}
            <div className="hidden lg:flex relative">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 text-sm font-medium relative ${
                    activeTab === tab
                      ? "text-primary-blue"
                      : "text-white hover:text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary-blue"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <span className="text-white">({products.length} Products)</span>
              <div className="hidden lg:block">
                <FilterSortByProduct />
              </div>
            </div>

            {/* Grid produk */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              {products.map((product) => (
                <BestDeals
                  key={product.id}
                  image={"/images/rec1.png"}
                  title={product.name}
                  price={product.price}
                  discount={10}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal filter */}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onFilterChange={handleFilterChange}
        onResetFilter={handleResetFilter}
      />

      {/* Modal sort */}
      <SortModal
        isOpen={showSortModal}
        onClose={() => setShowSortModal(false)}
        onSortChange={handleSortChange}
        currentSort={sortOption}
      />

      <Footer />
    </div>
  );
}
