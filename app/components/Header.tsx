"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "#quote", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 overflow-hidden w-full">
      <nav className="container mx-auto px-6 py-4 ">
        <div className="flex justify-between items-center w-full">
          <div
            className={`${isMobile ? "text-md" : "text-xl"} font-bold text-gray-800 flex items-center gap-2`}
          >
            <Image
              src="/rvrlogo.png"
              alt={"RVR JC logo"}
              width={isMobile ? 30 : 50}
              height={isMobile ? 30 : 50}
            />
            <Image
              src="/acmlogo.png"
              alt={"ACM logo"}
              width={isMobile ? 30 : 50}
              height={isMobile ? 30 : 50}
            />
            RVRJCCE ACM Student Chapter
          </div>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-500" />
              )}
            </button>
          ) : (
            <div className="space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {isMobile && isMenuOpen && (
          <div className="mt-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-600 hover:text-gray-800 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
