import React from "react";
import { Card, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";

export type productCardType = {
  image: string;
  title: string;
  category: string;
  price: number;
  savings: number;
}

export default function ProductCard({
  image,
  title,
  category,
  price,
  savings,
}: productCardType) {
  return (
    <>
      <Card className="w-72 pt-0 rounded-none m-auto">
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
          <h4 className="text-xl font-semibold">
            Rp {price}
            <del className="text-base font-normal">{savings}</del>
          </h4>
        </CardFooter>
      </Card>
    </>
  );
}
