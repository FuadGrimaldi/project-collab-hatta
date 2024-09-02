"use client";

import SliderImage from "../components/SliderImage";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={"Firyal"} />
      <SliderImage />
    </>
  );
}
