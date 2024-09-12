"use client";

import Navbar from "../../../../../components/landingpage/Navbar";
import Footer from "../../../../../components/landingpage/Footer";
import Sidebar from "../../../../../components/landingpage/SideBar";
import AddAddress from "../../../../../components/landingpage/settings/address/AddAddress";

export default function AddAddressPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8 p-8 mt-24">
        <div className="w-full lg:w-64">
          <Sidebar activeTab="address" />
        </div>
        <div className="w-full bg-secondary-black text-white p-6 shadow-md border border-white">
          <AddAddress />
        </div>
      </div>
      <Footer />
    </div>
  );
}
