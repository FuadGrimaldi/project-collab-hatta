"use client";

import CheckoutPageContent from "../../../components/landingpage/checkout/CheckoutPageContent";
import Navbar from "../../../components/landingpage/Navbar";
import Footer from "../../../components/landingpage/Footer";
import { useState } from "react";
import CheckoutPayment from "../../../components/landingpage/checkout/CheckoutPayment";

// Data dummy untuk items
const dummyItems = [
  {
    id: 1,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    coverImage: "/images/detail1.png",
    price: 250000,
    quantity: 2,
  },
  {
    id: 2,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    coverImage: "/images/detail1.png",
    price: 500000,
    quantity: 1,
  },
  {
    id: 3,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    coverImage: "/images/detail1.png",
    price: 150000,
    quantity: 1,
  },
];

// Fungsi untuk menghitung total items dan harga
function calculateTotals(items) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return { totalItems, totalPrice };
}

export default function CheckoutPage() {
  const { totalItems, totalPrice } = calculateTotals(dummyItems);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={"Firyal"} />
      <div className="px-8 lg:px-24 xl:px-48 pt-28">
        <CheckoutPayment
          bankName="BCA"
          accountNumber="896 0821 1505 4013"
          totalAmount={1000000}
        />
      </div>
      <Footer />
    </>
  );
}
