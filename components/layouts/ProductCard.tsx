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
        <Card className="lg:w-72 w-48  pt-0 bg-(--cardBg) border-none rounded-none shadow-none m-auto">
          <Image
            src={image}
            width={285}
            height={301}
            alt={category}
            className="m-auto"
          />
          <CardFooter className="block">
            <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
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
