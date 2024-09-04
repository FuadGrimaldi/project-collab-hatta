"use client";
import { useState, useEffect, useCallback } from "react";
import News from "./News";

export default function NewsList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const news = [
    {
      id: 1,
      image: "/images/news1.png",
      title: "IN DEVELOPMENT: TAINTED GRAIL",
      date: "2024-02-20",
    },
    {
      id: 2,
      image: "/images/new2.png",
      title: "WEEKEND SALE: JUMPY ACTION -ADVENTURE GAMES UP TO 90% OFF",
      date: "2024-02-20",
    },
    {
      id: 3,
      image: "/images/news3.png",
      title: "ASYLUM DEMO IS HERE! Feat 2 hours of gameplay ",
      date: "2024-02-20",
    },
    {
      id: 4,
      image: "/images/slider2.jpg",
      title: "IN DEVELOPMENT: TAINTED GRAIL",
      date: "2024-02-20",
    },
    {
      id: 5,
      image: "/images/trending1.png",
      title: "WEEKEND SALE: JUMPY ACTION -ADVENTURE GAMES UP TO 90% OFF",
      date: "2024-02-20",
    },
    {
      id: 6,
      image: "/images/slider3.jpg",
      title: "ASYLUM DEMO IS HERE! Feat 2 hours of gameplay ",
      date: "2024-02-20",
    },
    {
      id: 7,
      image: "/images/new2.png",
      title: "WEEKEND SALE: JUMPY ACTION -ADVENTURE GAMES UP TO 90% OFF",
      date: "2024-02-20",
    },
    {
      id: 8,
      image: "/images/news3.png",
      title: "ASYLUM DEMO IS HERE! Feat 2 hours of gameplay ",
      date: "2024-02-20",
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Menggunakan breakpoint 768px
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(news.length / itemsPerSlide);

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
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out  gap-2 md:gap-8"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {news.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0"
            style={{ width: isMobile ? "100%" : "calc((100% - 5rem) / 3)" }}
          >
            <News image={item.image} title={item.title} date={item.date} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === activeIndex ? "bg-gray-800 w-8" : "bg-gray-300 w-4"
            }`}
            aria-label={`Lihat berita ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
