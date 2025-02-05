"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  const toggleMembership = () => setIsMembershipOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/#quote", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#events", label: "Events" },
    { href: "/#team", label: "Team" },
    { href: "/#gallery", label: "Gallery" },
  ];

  return (
    <header className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 `}>
      <div
        className={`w-full px-4 py-4 flex justify-between items-center max-w-full`}
      >
        <div
          className={`font-bold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[calc(100%-48px)] `}
        >
          <div className={`font-bold flex items-center gap-2`}>
            <Image
              src="/rvrlogo.png"
              alt={"RVR JC logo"}
              width={50}
              height={50}
              sizes="(max-width: 768px) 20px, 50px"
            />
            <Image
              src="/acmlogo.png"
              alt={"ACM logo"}
              width={50}
              height={50}
              sizes="(max-width: 768px) 20px, 50px"
            />
            <span className="text-sm sm:text-base md:text-xl">
              RVRJCCE ACM Student Chapter
            </span>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className={`text-gray-600 hover:text-gray-800 block md:hidden`}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          )}
        </button>
        <nav className={`hidden md:flex`}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={toggleMembership}
              className="text-gray-600 hover:text-gray-800 mx-2 flex items-center"
            >
              Members{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className="h-4 w-4 font-bold text-gray-500"
              />
            </button>
            {isMembershipOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 z-55"
                onClick={toggleMembership}
              >
                <Link
                  href="/staff"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Staff
                </Link>
                <Link
                  href="/student"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Students
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className={`w-full bg-white md:hidden `}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-600 hover:text-gray-800 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 py-2">
            <button
              onClick={toggleMembership}
              className="text-gray-600 hover:text-gray-800 flex items-center"
            >
              Members{" "}
              <ChevronDownIcon strokeWidth={2} className="ml-1 h-4 w-4" />
            </button>
            {isMembershipOpen && (
              <div
                className="ml-4 mt-2"
                onClick={() => {
                  toggleMembership();
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  href="/staff"
                  className="block py-2 text-gray-600 hover:text-gray-800"
                >
                  Staff
                </Link>
                <Link
                  href="/student"
                  className="block py-2 text-gray-600 hover:text-gray-800"
                >
                  Students
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
