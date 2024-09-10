import Image from "next/image";

export default function NotificationItem({ item }) {
  console.log(item);
  return (
    <div className="relative flex flex-col md:flex-row gap-4 lg:gap-8 py-8 px-0 lg:px-4 first:-mt-[0.2px]">
      <div className="absolute inset-x-0 lg:inset-x-4 top-0 h-[0.2px] bg-gray-300"></div>

      <div className="flex flex-row gap-4 lg:gap-8">
        <Image
          src={item.image}
          alt={item.title}
          width={112}
          height={15}
          className="object-cover w-20 h-28"
        />

        <div className="flex w-full flex-col gap-1 lg:gap-2 mr-0 md:mr-8">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold w-full max-w-[400px] line-clamp-3 lg:line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-300">{item.desc}</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="w-full md:w-44 px-4 py-2 text-sm md:text-base border-white border text-white hover:bg-white hover:text-black transition-colors">
          Detail Order
        </button>
      </div>
    </div>
  );
}
