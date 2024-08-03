"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Menu from "./Menu";

const NavBar = () => {
  const navRef = useRef(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full py-2 transition-all duration-700 z-10 rounded-md ${
        isScrolled
          ? "bg-white bg-opacity-10 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        ref={navRef}
        className="md:container pr-2  mx-auto flex items-center justify-between md:justify-center md:gap-[50px] text-gray-300"
      >
        <a
          href="#about"
          onClick={() => handleLinkClick("about")}
          className={`text-[18px] md:text-[24px] hidden md:flex ${
            activeLink === "about" ? "text-orange-400 font-semibold" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => handleLinkClick("projects")}
          className={`text-[18px] md:text-[24px] hidden md:flex ${
            activeLink === "projects" ? "text-orange-400 font-semibold" : ""
          }`}
        >
          Projects
        </a>
        <a href="#">
          <Image
            src={logo}
            alt="walid hamdy portfolio"
            width={100}
            height={60}
            className=" md:w-[100px] md:h-[60px]"
          />
        </a>
        <a
          href="#testimonials"
          onClick={() => handleLinkClick("testimonials")}
          className={`text-[18px] md:text-[24px] hidden md:flex ${
            activeLink === "testimonials" ? "text-orange-400 font-semibold" : ""
          }`}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className={`text-[18px] md:text-[24px] hidden md:flex ${
            activeLink === "contact" ? "text-orange-400 font-semibold" : ""
          }`}
        >
          Contact
        </a>
        <div className="flex md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
