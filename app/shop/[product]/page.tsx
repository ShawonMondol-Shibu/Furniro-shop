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
import { Toaster } from "sonner";
import { dataType } from "../page";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);
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
                <BreadcrumbLink href="/shop">Shop {id}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <Toaster richColors />

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
            {product.map((item: dataType) => (
              <ProductCard
                key={item.id}
                image={"/images/image.png"}
                title={"Asgaard Sofa"}
                category={"Luxury Big Sofa"}
                price={1000}
                savings={1200}
                url="/shop/product"
                currency={""}
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
