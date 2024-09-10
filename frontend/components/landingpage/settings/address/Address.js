"use client";

import { useRouter } from "next/navigation";

export default function Address() {
  const router = useRouter();

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-0 lg:mx-6 pb-2 border-b border-[#808080]">
        <h1 className="text-2xl font-bold mb-3 lg:mb-6 mt-6">My Address</h1>
        <button
          className="w-full md:w-52 mt-4 px-4 py-3 mb-4 lg:mb-0 bg-[#04536C] text-white hover:bg-[#01465b]  transition-colors"
          onClick={() => router.push("/settings/address/add")}
        >
          + Add Address
        </button>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 mx-0 lg:mx-6 pb-6 border-b border-[#808080]">
        <div className="w-full lg:w-3/5 ">
          <button className="text-xs mt-4 px-2 py-2 bg-[#04536C] text-white hover:bg-[#01465b]  transition-colors">
            Main Address
          </button>
          <p className="text-sm text-gray-300 mt-4">Name</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            firyalhuwaida
          </p>
          <p className="text-sm text-gray-300 mt-6">Phone Number</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            (+62) 84363429384
          </p>
          <p className="text-sm text-gray-300 mt-6">Address</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            Jl. FLOWER IV Q10 NO 20, RT 005, RW 024, Kelurahan Melong, Kecamatan
            Cimahi Utara
            <br />
            KOTA CIMAHI - CIMAHI UTARA
            <br />
            JAWA BARAT
            <br /> ID 40534
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end pt-4 pr-12 pb-0 lg:pb-6">
          <p className="text-sm text-[#04536C] underline pr-[94px]">
            Edit Address
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 mx-0 lg:mx-6">
        <div className="w-full lg:w-3/5">
          <p className="text-sm text-gray-300">Name</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            firyalhuwaida
          </p>
          <p className="text-sm text-gray-300 mt-6">Phone Number</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            (+62) 84363429384
          </p>
          <p className="text-sm text-gray-300 mt-6">Address</p>
          <p className="text-sm text-gray-300 font-semibold mt-1">
            Jl. FLOWER IV Q10 NO 20, RT 005, RW 024, Kelurahan Melong, Kecamatan
            Cimahi Utara
            <br />
            KOTA CIMAHI - CIMAHI UTARA
            <br />
            JAWA BARAT
            <br /> ID 40534
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end pr-0 lg:pr-12 pt-4">
          <p className="text-sm text-[#04536C] underline pr-[94px]">
            Edit Address
          </p>
          <button className="w-full md:w-44 mt-4 px-4 py-2 bg-[#04536C] text-white hover:bg-[#01465b]  transition-colors">
            Set as Main
          </button>
          <button className="w-full md:w-44 mt-4 px-4 py-2 border-red-500 border text-red-500 hover:bg-red-500 hover:text-white transition-colors">
            Delete Address
          </button>
        </div>
      </div>
    </div>
  );
}
