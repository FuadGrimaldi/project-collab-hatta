import Image from "next/image";
import ReadMoreButton from "../button/ReadMoreButton";

export default function News({ image, title, date }) {
  return (
    <div className="bg-black h-full min-w-40 md:min-w-92 border border-gray-900 shadow-md overflow-hidden flex flex-col">
      <div className="relative h-40 md:h-48 w-full group">
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500">
          {(() => {
            const d = new Date(date);
            const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
            const month = d.toLocaleDateString("en-US", { month: "long" });
            const day = d.toLocaleDateString("en-US", { day: "2-digit" });
            const year = d.toLocaleDateString("en-US", { year: "numeric" });
            return (
              <>
                <strong>{weekday}</strong> | {month} {day} {year}
              </>
            );
          })()}
        </span>
        <h3 className="text-md md:text-lg font-semibold mb-2 text-white line-clamp-2 h-12 md:h-14">
          {title}
        </h3>
        <div className="flex-grow"></div>
        <div className="flex justify-end">
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}
