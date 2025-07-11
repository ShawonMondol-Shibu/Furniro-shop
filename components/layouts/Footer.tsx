import Link from "next/link";
import React from "react";

export default function Footer() {
    const footerLinks = [
        {name:"Home", url:"#"},
        {name:"Shop", url:"#"},
        {name:"About", url:"#"},
        {name:"Contact", url:"#"},
    ]

    const footerHelp = [
        {name:"Payment Option", url:"#"},
        {name:"Returns", url:"#"},
        {name:"Privacy Policies", url:"#"},
    ]
  return (
    <footer className="border-t-2">
      <div className="container m-auto mt-10 flex items-start justify-between gap-10">
        <div className="space-y-10">
          <h2 className="text-2xl font-bold ">Funiro.</h2>
          <div>
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>

{/* Footer Links Here */}
        <div>
            <ul className="space-y-10 text-base font-medium">
            <p className="text-(--textGray)">Links</p>
                {
                    footerLinks.map((link, i)=><li key={i}>
                    <Link href={link.url}>{link.name}</Link>
                </li>)
                }
                
            </ul>
        </div>

{/* Footer Help Here */}
        <div>
            <ul className="space-y-10 text-base font-medium">
            <p className="text-(--textGray)">Help</p>
                {
                    footerHelp.map((link, i)=><li key={i}>
                    <Link href={link.url}>{link.name}</Link>
                </li>)
                }
                
            </ul>
        </div>

      </div>
    </footer>
  );
}
