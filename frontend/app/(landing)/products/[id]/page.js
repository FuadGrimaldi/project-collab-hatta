"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaApple,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaWindows,
} from "react-icons/fa";
import Navbar from "../../../../components/landingpage/Navbar";
import Footer from "../../../../components/landingpage/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import BestDeals from "../../../../components/landingpage/homepage/BestDeals";
import { useRouter } from "next/navigation";

const vouchers = [
  {
    id: 1,
    image: "/images/slider2.jpg",
    title: "Destroy All Humans Game - Mobile Game",
    price: 150000,
    discount: 2,
    wishlist: false,
  },
  {
    id: 2,
    image: "/images/slider1.svg",
    title: "Voucher Game B",
    price: 460000,
    discount: 25,
    wishlist: true,
  },
  {
    id: 3,
    image: "/images/slider3.jpg",
    title: "Voucher Game C",
    price: 320000,
    discount: 25,
    wishlist: false,
  },
];

const product = {
  id: 1,
  title: "Destroy All Humans Game - Mobile Game",
  description:
    "Overwatch is a 2016 first-person shooter multiplayer video game for PC, developed and published by Blizzard Entertainment. In the game, players take control of one of several characters, called „heroes” and complete various missions in teamwork-based gameplay. The main selling point of Overwatch lies in its gameplay. The game is a teamwork-based FPS, where players are divided into groups of six and compete in several game modes. Players get to choose their characters from the roster of over 30 available heroes, each with their unique ability which grants some kind of advantage to the player during the match. Heroes are divided into three categories: Damage – characters known for their high mobility rate and ability to do great damage to the enemy. They are, however, highly susceptible to damage from their opponents. These type includes characters who deploy field support units such as turrets and traps, to provide additional firepower and help to protect specific areas as well as create choke points. Damage characters include Tracer, McCree, Soldier 75, Reaper, Hanzo, Genji, Mei and Widowmaker. Tank – these type of characters can take significantly more damage than any other class in the game. They are perfect at drawing enemy fire while their teammates proceed with the mission objective. Tank characters can provide protection to themselves and their team with the energy shields. Some of Tank characters are D.Va, Reinhardt, Roadhog and Winston. ",
  price: 600000,
  discountedPrice: 480000,
  discount: 20,
  coverImage: "/images/detail1.png",
  rating: 4.5,
  feedbackCount: 120,
  languages:
    "Chinese, German, Spanish, French, Italian, Japanese, Korean, Polish, Portugese, Russian, English",
  detail: [
    { title: "Tag", description: "Strategy - Turn-based - Fantasy" },
    { title: "Works on", description: "Windows (7, 8, 10)" },
    { title: "Release Date", description: "June 1, 1999" },
    { title: "Company", description: "New World Computing, Inc. / Ubisoft" },
    { title: "Size", description: "959 MB" },
  ],
  system: [
    {
      title: "System",
      desc1: "Windows 7 /8/ 10 (64-bit)",
      desc2: "Windows 7 /8/ 10 (64-bit)",
    },
    {
      title: "Processor",
      desc1: "Intel Core 2 Duo",
      desc2: "Intel Core i7 or AMD 1800 equivalent",
    },
    {
      title: "Memory",
      desc1: "2 GB RAM",
      desc2: "8 GB",
    },
    {
      title: "Graphics",
      desc1:
        "DirectX 11 compatible video card (integrated or dedicated with min 512MB memory",
      desc2: "NVIDIA Geforce 1060 or equivalent",
    },
    {
      title: "DirectX",
      desc1: "Version 11",
      desc2: "Version 11",
    },
    {
      title: "Storage",
      desc1: "20 GB available space",
      desc2: "22 GB available space",
    },
  ],
  gallery: [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery2.png",
    "/images/gallery1.png",
  ],
};

export default function ProductDetail() {
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeOS, setActiveOS] = useState("windows");
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Menggunakan breakpoint 768px
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 4;
  const totalSlides = Math.ceil(product.gallery.length / itemsPerSlide);

  const changeSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="px-6 md:px-24 pt-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cover Image */}
          <div className="w-[200px] h-[263px] mx-auto lg:mx-0">
            <Image
              src={product.coverImage}
              alt={product.title}
              width={200}
              height={263}
              className="w-[200px] h-[263px] object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-3/6">
            <h1 className="text-primary-white text-2xl font-bold mb-2">
              {product.title}
            </h1>

            {/* Rating dan Feedback */}
            <div className="flex items-center mb-4">
              <div className="flex text-primary-yellow mr-2">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  if (product.rating >= ratingValue) {
                    return <FaStar key={index} />;
                  } else if (product.rating >= ratingValue - 0.5) {
                    return <FaStarHalfAlt key={index} />;
                  } else {
                    return <FaRegStar key={index} />;
                  }
                })}
              </div>
              <span className="text-gray-600">
                {product.rating.toFixed(1)} ({product.feedbackCount} feedback)
              </span>
            </div>

            <p
              className={`text-primary-white mb-4 ${
                showFullDescription ? "" : "line-clamp-3"
              }`}
            >
              {product.description}
            </p>
            <button
              onClick={toggleDescription}
              className="text-primary-blue mb-4"
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Price and Buttons */}
          <div className="w-full lg:w-2/6">
            <div className="flex flex-col mb-4">
              <span className="text-lg font-normal text-primary-gray">
                Price
              </span>
              <span className="text-primary-white text-2xl font-bold mb-2">
                Rp {product.discountedPrice.toLocaleString()}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-primary-gray line-through">
                  Rp {product.price.toLocaleString()}
                </span>
                <span className=" text-primary-blue px-2 py-1 font-bold text-sm">
                  {product.discount}% OFF
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <button
                onClick={() => router.push("/cart")}
                className="w-full bg-primary-green hover:bg-secondary-green transition-colors duration-300 text-white px-4 py-2 flex items-center justify-center"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                onClick={toggleWishlist}
                className="text-primary-white w-full border border-primary-gray px-4 py-2 flex items-center justify-center  transition-colors duration-300 hover:text-primary-red hover:border-primary-red"
              >
                {isInWishlist ? (
                  <FaHeart className="mr-2 text-primary-red" />
                ) : (
                  <FaRegHeart className="mr-2 hover:text-primary-red" />
                )}
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full overflow-hidden mt-14">
          <div
            className="flex transition-transform duration-500 ease-in-out  gap-2 md:gap-8"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {product.gallery.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: isMobile ? "100%" : "calc((100% - 5rem) / 4)" }}
              >
                <div className="relative h-40 md:h-48 w-full group">
                  <Image
                    src={item}
                    layout="fill"
                    objectFit="cover"
                    alt={item}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary-blue w-8"
                    : "bg-gray-300 w-4"
                }`}
                aria-label={`Lihat berita ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-16">
          <div>
            <div className="flex flex-col relative mb-4">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              <h2 className="text-primary-white text-xl lg:text-2xl font-bold mb-3">
                Product Description
              </h2>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] w-64 bg-primary-blue"></span>
            </div>
            <span className="text-primary-white">{product.description}</span>
          </div>
          <div>
            <div className="flex flex-col relative mb-4">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              <h2 className="text-primary-white text-xl lg:text-2xl font-bold mb-3">
                Game Detail
              </h2>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] w-44 md:w-64 bg-primary-blue"></span>
            </div>
            {product.detail.map((item, index) => (
              <div key={index} className="flex">
                <span className="text-primary-white w-48">{item.title} :</span>
                <span className="text-primary-white w-full">
                  {item.description}
                </span>
              </div>
            ))}
            <div className="flex flex-col relative mb-4 mt-16 lg:mt-6">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              <h2 className="text-primary-white text-xl lg:text-2xl font-bold mb-3">
                Languages
              </h2>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] w-44 md:w-64 bg-primary-blue"></span>
            </div>
            <span className="text-primary-white">{product.languages}</span>
          </div>
          <div>
            <div className="flex flex-col relative mb-4 ">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
              <div className="flex justify-between items-center">
                <h2 className="text-primary-white text-xl lg:text-2xl font-bold mb-3">
                  System Requirement
                </h2>
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => setActiveOS("windows")}
                    className={`relative pb-2 ${
                      activeOS === "windows"
                        ? "text-primary-blue"
                        : "text-primary-white"
                    }`}
                  >
                    <FaWindows className="text-xl lg:text-3xl" />
                    {activeOS === "windows" && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary-blue"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveOS("mac")}
                    className={`relative pb-2 ${
                      activeOS === "mac"
                        ? "text-primary-blue"
                        : "text-primary-white"
                    }`}
                  >
                    <FaApple className="text-xl lg:text-3xl" />
                    {activeOS === "mac" && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary-blue"></span>
                    )}
                  </button>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] w-52 md:w-64 bg-primary-blue"></span>
            </div>

            <div className="flex flex-col lg:flex-row mb-4 lg:hidden">
              <div className="w-full lg:w-5/6 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
                  <h3 className="text-primary-white text-lg font-semibold mb-3 block lg:hidden">
                    Minimum:
                  </h3>
                  {product.system.map((item, index) => (
                    <div key={`min-${index}`} className="flex mb-2">
                      <span className="text-primary-white w-32 block lg:hidden">
                        {item.title}:
                      </span>
                      <span className="text-primary-white flex-1">
                        {item.desc1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full lg:w-1/2 lg:pl-4">
                  <h3 className="text-primary-white text-lg font-semibold mb-3 lg:hidden">
                    Recommended:
                  </h3>
                  {product.system.map((item, index) => (
                    <div key={`rec-${index}`} className="flex mb-2">
                      <span className="text-primary-white w-32 lg:hidden">
                        {item.title}:
                      </span>
                      <span className="text-primary-white flex-1">
                        {item.desc2}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:flex relative mb-4 pb-4">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>

              <span className="text-primary-white text-lg font-semibold w-7/12">
                Minimum system requirements:
              </span>
              <span className="text-primary-white text-lg font-semibold w-5/12">
                Recommended system requirements:
              </span>
            </div>
            <div className="hidden lg:flex flex-col">
              {product.system.map((item, index) => (
                <div key={index} className="flex mb-2">
                  <span className="text-primary-white w-1/6">
                    {item.title}:
                  </span>
                  <span className="text-primary-white w-5/12 mr-2">
                    {item.desc1}
                  </span>
                  <span className="text-primary-white w-5/12">
                    {item.desc2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col relative mb-4">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
            <h2 className="text-primary-white text-xl lg:text-2xl font-bold mb-3">
              You may like these products
            </h2>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] w-44 md:w-80 bg-primary-blue"></span>
          </div>
          <div className="w-full overflow-x-auto scrollbar-hide mt-8">
            <div className="flex gap-12">
              {[...vouchers, ...vouchers, ...vouchers].map((voucher, index) => (
                <BestDeals
                  className={"min-w-64 md:min-w-96"}
                  key={`${voucher.id}-${index}`}
                  image={voucher.image}
                  title={voucher.title}
                  price={voucher.price}
                  discount={voucher.discount}
                  wishlist={voucher.wishlist}
                />
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
