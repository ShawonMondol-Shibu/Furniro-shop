import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Heart, Search, ShoppingCart, User2 } from "lucide-react";

export default function Navbar() {
  const navLink = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <nav className=" bg-white flex items-center justify-between gap-10 px-10 py-5 sticky top-0 left-0 z-10 ">
      <div className="flex items-center gap-2">
        <Image
          src={"/images/logo.png"}
          width={50}
          height={50}
          alt="top navbar logo image"
        />
        <span className="text-4xl font-bold">Furniro</span>
      </div>

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
        <li>
          <Button variant={"ghost"} size={"icon"} className="size-6" asChild>
            <User2 />
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} size={"icon"} className="size-6" asChild>
            <Search />
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} size={"icon"} className="size-6" asChild>
            <Heart />
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} size={"icon"} className="size-6" asChild>
            <ShoppingCart />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
