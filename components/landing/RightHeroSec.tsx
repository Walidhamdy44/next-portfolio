"use client";
import { motion } from "framer-motion";
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
      <motion.div
        className="absolute top-[150px] left-[60px]"
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/imgs/atom_5968179.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[200px] right-[80px]"
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image
          src="/imgs/java-script_721671.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[350px] left-[270px]"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/imgs/typescript_5968566.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[500px] left-[290px]"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/imgs/sql-server_5968306.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[400px] left-[100px]"
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/imgs/php_5968532.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[30px] left-[210px]"
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/imgs/sass_5968550.png"
          alt="walid hamdy image"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>
      <div className="absolute top-[-12px] right-[-15px] lg:top-[-10px] z-[30] lg:right-[60px] flex rounded-xl items-center justify-center bg-[#0d0d0d] lg:bg-black w-[120px] h-[120px]">
        <div className="w-[70px] h-[70px] rounded-lg bg-[#fc9e70] flex items-center justify-center overflow-hidden">
          <ArrowUpRight className="w-12 h-12 text-black transform transition-transform duration-300 ease-in-out hover:translate-x-[45px] hover:translate-y-[-45px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default RightHeroSec;
