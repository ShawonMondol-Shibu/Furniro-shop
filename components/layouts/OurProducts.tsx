"use client";
import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { dataType } from "@/app/shop/page";

export default function OurProducts() {
  const [products, setProduct] = useState<dataType[]>();
  useEffect(() => {
    fetch("/furnitureProducts.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!products) {
    return <h3 className="text-center">Loading....</h3>;
  }
  return (
    <main className="container m-auto py-5">
      <div className="text-center">
        <Title className={"text-[40px] text-center"}> Our Products </Title>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-20 gap-10 items-center justify-center py-10 px-5">
        {products.map((item: dataType) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.productName}
            category={item.shortDescription.slice(0, 10)}
            currency={item.currency}
            price={item.price}
            savings={1200}
            url={`/shop/${item.id}`}
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
