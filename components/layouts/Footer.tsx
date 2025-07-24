import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  const footerLinks = [
    { name: "Home", url: "#" },
    { name: "Shop", url: "#" },
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const footerHelp = [
    { name: "Payment Option", url: "#" },
    { name: "Returns", url: "#" },
    { name: "Privacy Policies", url: "#" },
  ];
  return (
    <footer className="border-t-2">
      <div className="container m-auto ">
        <div className="py-10 border-b flex flex-wrap items-start justify-between gap-10">
          <div className="space-y-10">
            <h2 className="text-2xl font-bold ">Funiro.</h2>
            <div className="text-(--textGray)">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          {/* Footer Links Here */}
          <div>
            <ul className="space-y-10 text-base font-medium">
              <p className="text-(--textGray)">Links</p>
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Help Here */}
          <div>
            <ul className="space-y-10 text-base font-medium">
              <p className="text-(--textGray)">Help</p>
              {footerHelp.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter is Here */}
          <div className="space-y-10">
            <p className="text-(--textGray)">Newsletter</p>
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Enter Your Email Address"
                className="border-0 border-b-2 outline-none"
              />
              <Button variant={"link"}>SUBSCRIBE</Button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
