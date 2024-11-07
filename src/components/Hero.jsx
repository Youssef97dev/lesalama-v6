"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen w-full ">
      {/* Image Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center block lg:hidden"
        style={{
          backgroundImage: "url(/images/hero-mobile.jpg)",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: "url(/images/salama-11.jpg)",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#0000001e] h-screen mix-blend-multiply "></div>
      {/* Hero Content */}
      <div className="absolute w-full h-full flex flex-col gap-6 justify-center items-center">
        <Link href="/">
          <Image
            src="/icons/logo-salama-humberger-white.png"
            alt="le salama logo"
            width={200}
            height={200}
            className="cursor-pointer lg:hidden block"
          />
          <Image
            src="/icons/logo-salama-humberger-white.png"
            alt="le salama logo"
            width={300}
            height={300}
            className="cursor-pointer hidden lg:block"
          />
        </Link>
        <div className="block md:hidden">
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            target="_blank"
            className="border border-primary_2 bg-transparent text-primary_2 px-5 py-2 hover:bg-primary_2 hover:text-primary transition-all ease-linear"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
