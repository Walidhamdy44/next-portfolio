import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";

const LeftHeroSec = () => {
  return (
    <div className="flex items-start gap-4 flex-col">
      <div className="text-[40px] font-bold md:text-[50px] flex flex-col text-gradient-1 md:font-medium">
        <p>
          <span className="text-orange-700">FRONT END </span>DEVELOPER
        </p>
        <p className="flex items-center text-[28px]">
          <span className="font-semibold rounded-full bg-orange-700/10 border border-white text-white w-[50px] h-[50px] flex items-center justify-center text-[30px] mr-3">
            +2
          </span>
          <span className="pl-[5px]"> Years of Experience</span>
        </p>
        <p>REACT || NEXT JS</p>
      </div>
      {/* ------- */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-gray-400/30 w-[60%] text-gradient-2">
          Skilled in using React JS and Next JS to develop intuitive user
          interfaces and interactive components.
        </p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 border-white rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
            <a href="#projects">Take a Look!</a>
          </button>
          <AnimatedButton
            BgColor="bg-[#fc9e70]"
            color="text-white"
            text="Get in Touch"
            link="/contact"
          />
        </div>
      </div>
      {/* ------- */}
      <a href="#projects" className="flex items-center gap-6 mt-[30px]">
        <h2 className="text-[35px] font-medium">Portfolio</h2>
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#fc9e70]">
          <ArrowUpRight />
        </div>
      </a>
      <div className="img-container overflow-hidden rounded-xl">
        <Image
          alt="Portfolio img"
          src="/refero.design krea.ai 78602.jpg"
          width={600}
          height={400}
          className="rounded-xl transform transition-transform duration-300 ease-in-out hover:animate-pulse hover:scale-110"
        />
      </div>
    </div>
  );
};

export default LeftHeroSec;
