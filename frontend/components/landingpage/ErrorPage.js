import Image from "next/image";
import BackToHome from "./button/BackToHome";

export default function ErrorPage() {
  return (
    <div className="bg-primary-black text-white flex flex-col items-center justify-center pt-12 p-6 mt-32">
      <Image
        src="/images/404.svg"
        alt="404"
        width={827}
        height={450}
        className="h-[150px] w-[247px] md:h-[250px] md:w-[447px] lg:h-[450px] lg:w-[847px]"
      />
      <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mt-4">
        Sorry, page not found
      </h1>
      <p className="my-4 text-lg md:text-xl lg:text-2xl text-gray-400 text-center">
        It looks like the page you are looking for is not available, please try
        again later
      </p>
      <BackToHome />
    </div>
  );
}
