"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import HeartButton from "./HeartButton";
import UserButton from "./UserBtn";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathName = usePathname();

  const navLink = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const pages = [UserButton, NavSearch, HeartButton, CartButton];

  const handleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 shadow-sm sticky top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          width={45}
          height={45}
          alt="Navbar logo"
          priority
        />
        <span className="text-2xl font-bold text-gray-900">Furniro</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-10">
        {navLink.map((nav, i) => (
          <li key={i}>
            <Link
              href={nav.url}
              className={`text-base font-medium transition-colors duration-200 ${
                pathName === nav.url
                  ? "text-[var(--textPrimary)]"
                  : "text-gray-700 hover:text-[var(--textPrimary)]"
              }`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        {pages.map((Component, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            asChild
            className="hover:cursor-pointer"
          >
            <Component />
          </Button>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        {toggleMenu ? (
          <X size={28} onClick={handleMenu} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={handleMenu} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute left-0 top-[70px] w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 transition-all duration-300 ease-in-out ${
          toggleMenu ? "opacity-100 visible" : "opacity-0 invisible -translate-y-3"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {navLink.map((nav, i) => (
            <li key={i}>
              <Link
                href={nav.url}
                onClick={() => setToggleMenu(false)}
                className={`text-base font-medium transition-colors duration-200 ${
                  pathName === nav.url
                    ? "text-[var(--textPrimary)]"
                    : "text-gray-700 hover:text-[var(--textPrimary)]"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {pages.map((Component, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              asChild
              className="hover:cursor-pointer"
            >
              <Component />
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
