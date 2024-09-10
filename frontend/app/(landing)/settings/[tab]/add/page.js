"use client";

import Navbar from "../../../../../components/landingpage/Navbar";
import Footer from "../../../../../components/landingpage/Footer";
import Sidebar from "../../../../../components/landingpage/SideBar";
import AddAddress from "../../../../../components/landingpage/settings/address/AddAddress";

export default function AddAddressPage() {
  const isLoggedIn = true;
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userName="Firyal" />
      <div className="flex flex-col lg:flex-row gap-8 p-8 mt-24">
        <div className="w-full lg:w-64">
          <Sidebar activeTab="address" />
        </div>
        <div className="w-full bg-black text-white p-6 shadow-md border border-white">
          <AddAddress />
        </div>
      </div>
      <Footer />
    </div>
  );
}
