import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#262526] text-white pt-12 p-6 mt-32">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col gap-8">
          {/* Logo dan Teks */}
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
            <p className="mt-4 text-sm text-gray-400">
              Solusi lengkap untuk kebutuhan digital Anda. Kami membantu Anda
              tumbuh dan berkembang di era digital.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex md:flex-row flex-col gap-24 mt-12 md:mt-0 justify-center">
            {/* Our Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Product</h3>
              <ul className="space-y-2">
                {[
                  "Acquire Users",
                  "Content Marketing",
                  "Website Templates",
                  "Customer Management",
                  "Virtual Inbox",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                {[
                  "About Foundation",
                  "Brand Guidelines",
                  "Press Kit",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                {[
                  "About Foundation",
                  "Brand Guidelines",
                  "Press Kit",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-gray text-center text-sm text-gray-400">
          Copyright © 2020 Ecommerce Game All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
