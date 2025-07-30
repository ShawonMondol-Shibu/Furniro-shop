"use client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProductCard from "@/components/layouts/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import Services from "@/components/layouts/Services";
import SitePagination from "@/components/layouts/SitePagination";

export interface dataType {
  id: number;
  productName: string;
  price: number;
  currency: string;
  shortDescription: string;
}

export default function Page() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("/furnitureProducts.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!product) {
    return <h3 className="text-center">Loading....</h3>;
  }

  return (
    <div className="">
      <HeaderBreadCrumb
        title="Shop"
        breadCrumbPage="Home"
        breadCrumbLink="Shop"
      />

      {/* Filter is added here */}
      <section className="bg-(--bgPrimary) p-5">
        <div className="container m-auto flex gap-5 items-center-safe justify-between">
          {/* Filter left side */}
          <div className="h-6 flex items-center gap-2 ">
            <Button
              variant={"ghost"}
              size={"lg"}
              className="text-xl font-normal"
            >
              <SlidersHorizontal size={25} />
              Filter
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <HiViewGrid size={25} />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <BsViewList size={25} />
            </Button>
            <Separator
              orientation="vertical"
              className="border-(--textPrimary) border"
            />
            <p>Showing 1–16 of 32 results</p>
          </div>

          {/* Filter right side */}
          <div className="flex items-center gap-5">
            <div className="flex items-center-safe gap-5">
              <p>Show</p>
              <span className="px-4 py-3 bg-white text-(--textGray)">16</span>
            </div>

            <div className="flex items-center-safe gap-5">
              <p>Short by</p>
              <Popover>
                <PopoverTrigger className="bg-white text-(--textGray) py-3 px-4">
                  Default
                </PopoverTrigger>
                <PopoverContent>Default</PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* This is the Product Section */}
        <section className="container m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  items-center justify-center xl:gap-20 gap-10 mt-10 px-5">
          {product.map((item: dataType) => (
            <ProductCard
              key={item.id}
              image={"/images/image.png"}
              title={item.productName}
              category={item.shortDescription.slice(0, 10)}
              currency={item.currency}
              price={item.price}
              savings={1200}
              url={`/shop/${item.id}`}
            />
          ))}
        </section>

        {/* This is the Pagination */}
        <SitePagination />

        {/* This is the Service Section */}
        <Services />
      </main>
    </div>
  );
}
