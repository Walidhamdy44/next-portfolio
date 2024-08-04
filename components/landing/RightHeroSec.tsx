import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const RightHeroSec = () => {
  return (
    <div className="relative md:pl-[30px]">
      <Image
        src="/photo.jpg"
        alt="walid hamdy image"
        width={500}
        height={800}
        className="grayscale rounded-3xl filter brightness-50 contrast-90"
      />
      <div className="absolute top-[-12px] right-[-15px] lg:top-[-10px] z-[30] lg:right-[60px] flex rounded-xl items-center justify-center bg-[#0d0d0d] lg:bg-black w-[120px] h-[120px]">
        <div className="w-[70px] h-[70px] rounded-lg bg-[#fc9e70] flex items-center justify-center overflow-hidden">
          <ArrowUpRight className="w-12 h-12 text-black transform transition-transform duration-300 ease-in-out hover:translate-x-[45px] hover:translate-y-[-45px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default RightHeroSec;
