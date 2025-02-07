"use client";

import { useRouter } from "next/navigation";

export default function SeeDetailButton() {
  const router = useRouter();

  return (
    <div className="absolute inset-0 bg-primary-blue bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <button
        onClick={() => router.push("/products/1")}
        className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-primary-blue transition-colors duration-300"
      >
        See Detail
      </button>
    </div>
  );
}
