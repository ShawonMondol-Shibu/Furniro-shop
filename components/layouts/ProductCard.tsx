import React from "react";
import { Card, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export type productCardType = {
  image: string;
  title: string;
  category: string;
  price: number;
  savings: number;
  url: string;
};

export default function ProductCard({
  image,
  title,
  category,
  price,
  savings,
  url,
}: productCardType) {
  return (
    <>
      <Link href={url} className="m-auto">
        <Card className="lg:w-72 w-48  pt-0 bg-(--cardBg) hover:scale-105 border-none rounded-none shadow-none hover:shadow-xl m-auto group transition-all duration-200 ease-linear">
          <Image
            src={image}
            width={285}
            height={301}
            alt={category}
            className="m-auto"
          />
          <CardFooter className="block space-y-2">
            <CardTitle className="text-2xl font-semibold group-hover:text-(--textPrimary) transition-colors duration-200 ease-in-out">{title}</CardTitle>
            <p className="text-base font-medium">{category}</p>
            <h4 className="text-xl font-semibold flex items-center justify-between">
              Rp {price}
              <del className="text-base font-normal">{savings}</del>
            </h4>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}
