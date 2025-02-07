"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPageContent({ items, totalItems, totalPrice }) {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <div className="text-primary-white flex flex-col lg:flex-row gap-8 mt-8">
      <div className="w-full lg:w-2/3">
        <div className="bg-secondary-black p-6 shadow-md border border-white">
          <h2 className="text-xl font-semibold">Checkout</h2>
        </div>
        <div className="bg-secondary-black px-6 pb-6 p-0 lg:p-8 shadow-md mt-8 border border-white">
          <h2 className="block lg:hidden text-xl font-semibold mt-8 border-b pb-4">
            Produk
          </h2>
          <CheckoutItemTitle />
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
          <div className="mt-6">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 justify-end items-end lg:items-center">
              <span className="text-sm">
                Total Pesanan ({totalItems} produk)
              </span>
              <span className="font-semibold text-[#04536C]">
                Rp {totalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-secondary-black mt-10 p-6 lg:p-8 shadow-md border border-white">
          <h2 className="text-xl font-semibold mb-4">Choose Payment</h2>
          <PaymentOptions
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 mt-2 lg:mt-0">
        <OrderSummary subtotal={totalPrice} selectedMethod={selectedMethod} />
      </div>
    </div>
  );
}

function CheckoutItemTitle() {
  return (
    <div className="text-primary-white hidden lg:flex items-start gap-16 py-4 border-b border-gray-200 last:border-b-0">
      <h2 className="text-xl font-semibold mb-4 ">Produk</h2>

      <div className="flex gap-4 justify-between w-full">
        <h3 className="text-primary-gray w-full max-w-[300px] font-semibold text-sm lg:text-base">
          Product Name
        </h3>
        <p className="text-primary-gray text-sm lg:text-base pl-12">
          Unit Price
        </p>
        <p className="text-primary-gray text-sm lg:text-base pl-12">Quantity</p>
        <p className="text-primary-gray text-sm lg:text-base pr-12">Price</p>
      </div>
    </div>
  );
}

function CheckoutItem({ item }) {
  return (
    <div className="text-primary-white flex items-start gap-4 lg:gap-16 py-6 lg:py-8 border-b border-gray-200 last:border-b-0">
      <Image
        src={item.coverImage}
        alt={item.title}
        width={80}
        height={100}
        className="object-cover"
      />
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 justify-between w-full">
        <h3 className="w-full max-w-[300px] font-semibold text-sm lg:text-base">
          {item.title}
        </h3>
        <p className="text-sm lg:text-base">Rp {item.price.toLocaleString()}</p>
        <p className="text-sm lg:text-base">{item.quantity}</p>
        <p className="hidden lg:block text-sm lg:text-base">
          Rp {(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function PaymentOptions({ selectedMethod, setSelectedMethod }) {
  const paymentMethods = [
    { id: "bca", name: "BCA Virtual Account", icon: "/icons/bca.svg" },
    {
      id: "mandiri",
      name: "Mandiri Virtual Account",
      icon: "/icons/mandiri.svg",
    },
    { id: "bni", name: "BNI Virtual Account", icon: "/icons/bni.svg" },
  ];

  const handlePaymentMethodChange = (methodId) => {
    setSelectedMethod(methodId);
  };

  return (
    <div className="space-y-4">
      <div className="flex font-semibold text-base border-t border-primary-gray pt-6">
        <span>Credit Card</span>
      </div>
      <div
        key="credit_card"
        className="flex bg-secondary-black items-center justify-between p-4 border border-primary-white cursor-pointer "
        onClick={() => handlePaymentMethodChange("credit_card")}
      >
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="payment_method"
            className="w-4 h-4"
            checked={selectedMethod === "credit_card"}
            onChange={() => handlePaymentMethodChange("credit_card")}
          />
          <Image
            src={"/icons/mandiri.svg"}
            alt="Credit Card/Debit"
            width={40}
            height={40}
          />
          <label htmlFor="credit_card" className="font-medium">
            Credit Card/Debit
          </label>
        </div>
        <FaChevronRight className="text-gray-400" />
      </div>
      <div className="flex font-semibold text-base pt-4 pb-2">
        <span>Transfer Virtual Account</span>
      </div>
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className="flex bg-secondary-black items-center justify-between p-4 border border-primary-white cursor-pointer "
          onClick={() => handlePaymentMethodChange(method.id)}
        >
          <div className="flex items-center gap-4">
            <input
              type="radio"
              id={method.id}
              name="payment_method"
              className="w-4 h-4"
              checked={selectedMethod === method.id}
              onChange={() => handlePaymentMethodChange(method.id)}
            />
            <Image src={method.icon} alt={method.name} width={40} height={40} />
            <label htmlFor={method.id} className="font-medium">
              {method.name}
            </label>
          </div>
          <FaChevronRight className="text-gray-400" />
        </div>
      ))}
    </div>
  );
}

function OrderSummary({ subtotal, selectedMethod }) {
  const router = useRouter();
  const serviceFeePercentage = 0.05;
  const serviceFee = subtotal * serviceFeePercentage;
  const total = subtotal + serviceFee;

  const isPaymentSelected = selectedMethod !== "";

  return (
    <div className="bg-secondary-black p-6 shadow-md border border-white">
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Services Fee (5%)</span>
          <span>Rp {serviceFee.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-between font-semibold text-base border-t border-primary-gray pt-4">
        <span>Total Price</span>
        <span>Rp {total.toLocaleString()}</span>
      </div>

      <button
        onClick={() => router.push("checkout-payment")}
        className={`w-full py-3 mt-6 font-semibold transition-colors ${
          isPaymentSelected
            ? "bg-primary-green hover:bg-secondary-green text-white"
            : "bg-gray-400 text-primary-white cursor-not-allowed"
        }`}
        disabled={!isPaymentSelected}
      >
        {isPaymentSelected ? "Checkout" : "Continue to Pay"}
      </button>
    </div>
  );
}
