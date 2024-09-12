"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function CheckoutPayment({
  bankName,
  accountNumber,
  totalAmount,
}) {
  const [openGuide, setOpenGuide] = useState(0);
  const router = useRouter();

  const paymentGuides = [
    {
      title: "ATM Transfer Instructions",
      steps: [
        "Select Pay / Buy.",
        "Select Others> Others> Multi Payment.",
        "Enter company code 89608 and select Correct.",
        "Enter the Virtual Account number 896 082115054013 and select Correct.",
        "Check the information on the screen. Make sure the Merchant is Shopee Indonesia, the total bill is correct and your username is Firyal. If correct, press number 1 and select Yes.",
        "Check the confirmation screen and select Yes.",
      ],
    },
    {
      title: "IBanking Transfer Guide",
      steps: [
        "Log in to your internet banking account",
        "Select 'Transfer' or 'Payment' option",
        "Choose 'Transfer to Other Bank'",
        "Enter the destination account number",
        "Enter the transfer amount",
        "Review and confirm the transaction",
        "Enter your OTP (One-Time Password)",
        "Transaction complete, save the receipt",
      ],
    },
    {
      title: "MBanking Transfer Guide",
      steps: [
        "Open your mobile banking app",
        "Log in to your account",
        "Select 'Transfer' option",
        "Choose 'Transfer to Other Bank'",
        "Enter the destination account number",
        "Enter the transfer amount",
        "Review the transaction details",
        "Enter your PIN or use biometric authentication",
        "Transaction complete, save the confirmation",
      ],
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied to clipboard!");
  };

  return (
    <div className="bg-secondary-black text-white p-8 rounded-lg shadow-md border border-white">
      <div className="flex flex-col md:flex-row justify-between border-b pb-8">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4">
          <Image src="/images/logo.svg" alt="Logo" width={90} height={40} />
          <h2 className="text-xl font-semibold ">Total Payments</h2>
        </div>
        <h2 className="text-xl font-semibold mt-2 md:mt-0">
          Rp {totalAmount.toLocaleString()}
        </h2>
      </div>

      <div className="mt-8">
        <div className="flex gap-4">
          <Image
            src={`/icons/${bankName.toLowerCase()}.svg`}
            alt={bankName}
            width={50}
            height={40}
          />
          <p className="text-base font-medium">
            Bank {bankName} (Automatic Checked)
          </p>
        </div>
        <p className="mt-2 text-sm">No. Account:</p>
        <div className="mt-2 flex gap-4 items-center">
          <p className="text-xl font-bold text-primary-blue">{accountNumber}</p>
          <button
            onClick={handleCopy}
            className="flex items-center text-primary-green hover:text-secondary-green"
          >
            COPY
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-400 my-6 ">
        Pay the order to the Virtual Account above before re-ordering with the
        Virtual Account so that the number remains the same.
      </p>

      {paymentGuides.map((guide, index) => (
        <div
          key={index}
          className="mt-4 border border-primary-white rounded-lg"
        >
          <button
            className="w-full p-4 flex gap-4 items-center focus:outline-none border-b border-primary-white"
            onClick={() => setOpenGuide(openGuide === index ? null : index)}
          >
            {openGuide === index ? <FaChevronDown /> : <FaChevronRight />}
            <span className="font-semibold">{guide.title}</span>
          </button>
          {openGuide === index && (
            <div className="p-4 pl-12">
              <ol className="list-decimal list-inside">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={() => router.push("/")}
        className="w-28 md:w-60 py-3 mt-6 text-sm md:text-base font-semibold transition-colors bg-primary-blue hover:bg-secondary-blue text-white"
      >
        Okay
      </button>
      <button
        onClick={() => router.push("/products")}
        className="w-32 md:w-60 ml-8 py-3 mt-6 text-sm md:text-base font-semibold transition-colors border border-white hover:text-primary-blue hover:border-secondary-blue text-white"
      >
        Shop Again
      </button>
    </div>
  );
}
