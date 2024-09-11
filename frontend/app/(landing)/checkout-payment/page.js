"use client";

import Navbar from "../../../components/landingpage/Navbar";
import Footer from "../../../components/landingpage/Footer";
import { useState } from "react";
import CheckoutPayment from "../../../components/landingpage/checkout/CheckoutPayment";

export default function CheckoutPage() {
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
