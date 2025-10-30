"use client";
import ProductCard from "@/components/layouts/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ExtraDetails from "../extraDetails/page";
import { dataType } from "../page";

export default function Page() {
  const [product, setProduct] = useState<dataType[]>();
  useEffect(() => {
    fetch("/furnitureProducts.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div>
      <header className="bg-(--bgPrimary) py-8 px-5">
        <div className="container m-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop {}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>


      <main className="my-10 px-5">
        {/* Product Details Section */}
        <ProductDetails />

        <hr />

        <ExtraDetails />
        {/* Related Products  */}
        <section>
          <div className="text-center">
            <Title className={"text-[40px] text-center"}>
              {" "}
              Related Products{" "}
            </Title>
          </div>
          <div className="xl:grid grid-cols-4 flex flex-wrap gap-10 items-center justify-center py-10">
            {product.slice(0, 4).map((item: dataType) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.productName}
                category={item.shortDescription.slice(0, 15)}
                price={item.price}
                savings={1200}
                url={`/shop/${item.id}`}
                currency={item.currency}
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
        </section>
      </main>
    </div>
  );
}
