"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import HeartButton from "./HeartButton";
import UserButton from "./UserButton";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleMenu() {
    if (toggleMenu) {
      setToggleMenu(false);
    }
    if (!toggleMenu) {
      setToggleMenu(true);
    }
  }

  const navLink = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const pages = [
    { page: UserButton },
    { page: NavSearch },
    { page: HeartButton },
    { page: CartButton },
  ];

  return (
    <nav
      className={` bg-white lg:flex ${
        toggleMenu ? "grid" : "flex"
      } items-center justify-between gap-10 px-10 py-5 sticky top-0 left-0 z-10 `}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/images/logo.png"}
          width={50}
          height={50}
          alt="top navbar logo image"
        />
        <span className="text-4xl font-bold">Furniro</span>
      </Link>

      <>
        <ul
          className={`lg:flex ${
            toggleMenu ? "grid" : "hidden"
          } items-center justify-center gap-10`}
        >
          {navLink.map((nav, i: number) => (
            <li key={i}>
              <Link href={nav.url} className="text-base font-semibold">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </>

      <div
        className={`lg:flex ${
          toggleMenu ? "grid" : "hidden"
        } items-center justify-center gap-10`}
      >
        {pages.map((page, index) => (
          <Button
            key={index}
            variant={"ghost"}
            size={"icon"}
            asChild
            className="hover:cursor-pointer"
          >
            <page.page />
          </Button>
        ))}
      </div>

      <Menu
        size={30}
        onClick={handleMenu}
        className="lg:hidden inline hover:cursor-pointer"
      />
    </nav>
  );
}
