"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={"Firyal"} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
