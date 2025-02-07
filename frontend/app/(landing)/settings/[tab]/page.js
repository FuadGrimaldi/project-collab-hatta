"use client";

import { useParams } from "next/navigation";
import Sidebar from "../../../../components/landingpage/SideBar";
import Navbar from "../../../../components/landingpage/Navbar";
import Footer from "../../../../components/landingpage/Footer";
import Profile from "../../../../components/landingpage/settings/profile/Profile";
import Wishlist from "../../../../components/landingpage/settings/wishlist/Wishlist";
import MyOrder from "../../../../components/landingpage/settings/my-order/MyOrder";
import MyItem from "../../../../components/landingpage/settings/my-item/MyItem";
import Address from "../../../../components/landingpage/settings/address/Address";
import ChangePassword from "../../../../components/landingpage/settings/change-password/ChangePassword";
import Notification from "../../../../components/landingpage/settings/notification/Notification";

export default function SettingsPage() {
  const params = useParams();
  const tab = params.tab;

  const renderContent = () => {
    switch (tab) {
      case "profile":
        return <Profile />;
      case "wishlist":
        return <Wishlist />;
      case "my-order":
        return <MyOrder />;
      case "my-item":
        return <MyItem />;
      case "address":
        return <Address />;
      case "change-password":
        return <ChangePassword />;
      case "notification":
        return <Notification />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8 p-8 mt-24">
        <div>
          <Sidebar activeTab={tab} />
        </div>
        <div className="w-full bg-primary-black text-white shadow-md ">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
