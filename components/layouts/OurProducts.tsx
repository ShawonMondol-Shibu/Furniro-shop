import React from "react";
import Title from "../ui/Title";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function OurProducts() {
  return (
    <main className="container m-auto py-5">
      <div className="text-center">
        <Title className={"text-[40px] text-center"}> Our Products </Title>
      </div>
      <div className="xl:grid grid-cols-4 flex flex-wrap gap-20 items-center justify-center py-10">
        {Array.from({ length: 8 }).map((item, i) => (
          <ProductCard
            key={i}
            image={"/images/image.png"}
            title={"Asgaard Sofa"}
            category={"Luxury Big Sofa"}
            price={100}
            savings={0}
            url="/shop/product"
          />
        ))}
      </div>
      <div className="w-full text-center">
        <Button
          variant={"outline"}
          size={"lg"}
          asChild
          className="text-base text-(--textPrimary) font-semibold border-(--textPrimary) border rounded-none py-6 px-10"
        >
          <Link href={"/shop"}>See More</Link>
        </Button>
      </div>
    </main>
  );
}
