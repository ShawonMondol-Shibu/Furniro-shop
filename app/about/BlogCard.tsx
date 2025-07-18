import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ElementType } from "react";

interface blogIconType {
  icon: ElementType;
  title: string;
}

export default function BlogCard() {
  const blogIcons = [
    { icon: UserRound, title: "Admin" },
    { icon: BriefcaseBusiness, title: "Admin" },
    { icon: Tag, title: "Admin" },
  ];
  return (
    <div>
      <Image src={"/blogs/image.png"} width={817} height={500} alt="" />
      <div className="flex items-center gap-10 py-4">
        {blogIcons.map((blogIcon: blogIconType, i: number) => (
          <span key={i} className="flex items-center text-(--textGray)">
            <blogIcon.icon size={20} />
            {blogIcon.title}
          </span>
        ))}
      </div>

      <CardTitle className="text-3xl font-medium">
        Going all-in with millennial design
      </CardTitle>
      <CardDescription className="text-base font-normal">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </CardDescription>
      <Button
        variant={"link"}
        size={"lg"}
        className="text-base font-normal px-0"
        asChild
      >
        <Link href={"#"}>Read More</Link>
      </Button>
    </div>
  );
}
