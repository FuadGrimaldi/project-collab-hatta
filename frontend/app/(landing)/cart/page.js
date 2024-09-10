"use client";

import { useState } from "react";
import CartList from "../../../components/landingpage/cart/CartList";
import CartSummary from "../../../components/landingpage/cart/CartSummary";
import Navbar from "../../../components/landingpage/Navbar";
import Footer from "../../../components/landingpage/Footer";

const initialCartItems = [
  {
    id: 1,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 100000,
    quantity: 1,
    coverImage: "/images/detail1.png",
  },
  {
    id: 2,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 200000,
    quantity: 1,
    coverImage: "/images/detail1.png",
  },
  {
    id: 3,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 150000,
    quantity: 1,
    coverImage: "/images/detail1.png",
  },
  {
    id: 4,
    title: "Minecraft: Windows 10 Edition (PC) - Microsoft Key - GLOBAL",
    price: 150000,
    quantity: 1,
    coverImage: "/images/detail1.png",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      delete newSelected[id];
      return newSelected;
    });
  };

  const toggleItemSelection = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const subtotal = Object.entries(selectedItems).reduce(
    (sum, [id, isSelected]) => {
      if (isSelected) {
        const item = cartItems.find((item) => item.id === parseInt(id));
        return sum + item.price * item.quantity;
      }
      return sum;
    },
    0
  );

  const serviceFee = subtotal * 0.05;
  const total = subtotal + serviceFee;

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userName={"Firyal"} />
      <div className="mx-auto px-8 lg:px-16 pt-32">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <CartList
              items={cartItems}
              selectedItems={selectedItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              toggleItemSelection={toggleItemSelection}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <CartSummary
              subtotal={subtotal}
              serviceFee={serviceFee}
              total={total}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
