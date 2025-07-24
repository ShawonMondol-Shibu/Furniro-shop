import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import HeartButton from "./HeartButton";
import UserButton from "./UserButton";

export default function Navbar() {
  const navLink = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <nav className=" bg-white flex items-center justify-between gap-10 px-10 py-5 sticky top-0 left-0 z-10 ">
      <Link href={'/'} className="flex items-center gap-2">
        <Image
          src={"/images/logo.png"}
          width={50}
          height={50}
          alt="top navbar logo image"
        />
        <span className="text-4xl font-bold">Furniro</span>
      </Link>

      <>
        <ul className="flex items-center justify-center gap-10">
          {navLink.map((nav, i: number) => (
            <li key={i}>
              <Link href={nav.url} className="text-base font-semibold">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </>

      <ul className="flex items-center gap-10">
        <li className="hover:cursor-pointer">
          <UserButton />
        </li>
        <li className="hover:cursor-pointer">
          <NavSearch />
        </li>
        <li className="hover:cursor-pointer">
          <HeartButton />
        </li>
        <li className="hover:cursor-pointer">
          <CartButton/>
        </li>
      </ul>
    </nav>
  );
}
