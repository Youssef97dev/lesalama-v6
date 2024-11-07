"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 px-8  transition-all duration-300 ${
          isTransparent ? "bg-transparent py-5" : "bg-primary shadow-md"
        }`}
      >
        <div className="w-full flex justify-end items-center p-2">
          <div className="w-full flex justify-end lg:justify-between items-center ">
            {/* Book table button */}
            <div className="hidden md:block">
              <Link
                href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
                target="_blank"
                className="border border-primary_2 bg-transparent text-primary_2 px-4 py-2 hover:bg-primary_2 hover:text-primary transition-all ease-linear"
              >
                Book a Table
              </Link>
            </div>
            <div className="flex justify-center items-center ">
              {/* Langue */}
              <div
                className="relative "
                onMouseLeave={() => setIsDropdownOpen(false)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
                  <img
                    src="/icons/english.png"
                    className="w-5 h-5 md:w-7 md:h-7"
                  />
                  <IoMdArrowDropdown size={18} />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute top-8 bg-primary_9 mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                    <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                      <Link href="#">
                        <img
                          src="/icons/english.png"
                          className="w-5 h-5 md:w-7 md:h-7"
                        />
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                      <Link href="/fr">
                        <img
                          src="/icons/france.png"
                          className="w-5 h-5 md:w-7 md:h-7"
                        />
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {/* Menu Icon */}
              <div className="">
                <button onClick={() => setIsOpen(!isOpen)}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full"
        enterTo="transform -translate-x-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform -translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <div className="fixed top-0 right-0 w-[80%] md:w-[50%] lg:w-[30%] xl:w-[20%] h-screen bg-primary z-20 flex flex-col items-center justify-center">
          <ul className="space-y-5 md:space-y-10 text-center text-white text-xl">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lesalamamarrakech.com/menu/lunch/"
                target="_blank"
                className="hover:text-primary_2"
              >
                MENU
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary_2">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary_2">
                EVENTS
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
