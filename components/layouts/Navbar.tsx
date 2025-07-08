import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Heart, Search, ShoppingCart, User2 } from "lucide-react";

export default function Navbar() {
  const navLink = [
    { name: "Home", url: "#" },
    { name: "Shop", url: "#" },
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <nav className="flex items-center justify-between gap-10 px-10 py-5">
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
              <Link href={nav.url} className="text-base font-medium">
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
