"use client";

import { useRouter } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="bg-primary-blue hover:bg-secondary-blue text-white text-xs md:text-sm w-28 md:w-32 py-2 transition-colors duration-300"
    >
      Back to Home
    </button>
  );
}
