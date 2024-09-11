"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const menuItems = [
  { id: "profile", label: "Profile" },
  { id: "my-order", label: "My Order" },
  { id: "my-item", label: "My Item" },
  { id: "address", label: "Address" },
  { id: "change-password", label: "Change Password" },
  { id: "notification", label: "Notification" },
  { id: "wishlist", label: "Wishlist" },
];

export default function Sidebar({ activeTab }) {
  const router = useRouter();

  const handleItemClick = (itemId) => {
    router.push(`/settings/${itemId}`);
  };

  return (
    <div className="bg-secondary-black text-white p-6 shadow-md border border-white w-full md:w-64">
      <div className="flex items-center mb-6">
        <Image
          src="/images/img-profile.svg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="font-semibold">Firyal</h2>
          <p className="text-sm text-gray-400">firyal@example.com</p>
        </div>
      </div>
      <hr className="border-secondary-gray mb-6" />
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex justify-between items-center p-2 rounded ${
                  activeTab === item.id
                    ? "text-primary-blue"
                    : "text-white hover:bg-primary-blue"
                }`}
              >
                <span>{item.label}</span>
                <FaChevronRight
                  className={activeTab === item.id ? "text-primary-blue" : ""}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
