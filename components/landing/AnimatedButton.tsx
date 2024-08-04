"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
interface Button {
  BgColor: string;
  text: string;
  color: string;
  link: string;
}

const AnimatedButton = ({ BgColor, text, color, link }: Button) => {
  return (
    <motion.button
      className={cn(" py-2 px-4 rounded-md shadow-lg", BgColor, color)}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px rgba(255, 126, 95, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={link}>{text}</Link>
    </motion.button>
  );
};

export default AnimatedButton;
