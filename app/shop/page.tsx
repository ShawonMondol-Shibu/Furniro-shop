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
  image: string;
}

export default function Page() {
  const [product, setProduct] = useState<dataType[]>();

  useEffect(() => {
    fetch("/furnitureProducts.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <h3 className="text-center py-20 text-lg font-semibold">Loading...</h3>;
  }

  return (
    <div className="">
      <HeaderBreadCrumb
        title="Shop"
        breadCrumbPage="Home"
        breadCrumbLink="Shop"
      />

      {/* 🧩 Filter Section */}
      <section className="bg-[var(--bgPrimary)] p-4 sm:p-6 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal size={20} />
              Filter
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <HiViewGrid size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <BsViewList size={20} />
              </Button>
            </div>

            <Separator
              orientation="vertical"
              className="hidden sm:block border border-[var(--textPrimary)] h-6"
            />

            <p className="text-sm sm:text-base whitespace-nowrap">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <p>Show</p>
              <span className="px-3 py-2 bg-white text-gray-600 rounded-sm">16</span>
            </div>

            <div className="flex items-center gap-2">
              <p>Sort by</p>
              <Popover>
                <PopoverTrigger className="bg-white text-gray-600 py-2 px-3 rounded-sm">
                  Default
                </PopoverTrigger>
                <PopoverContent className="w-32 text-sm">Default</PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      {/* 🛍 Product Grid Section */}
      <main className="container mx-auto mt-10 px-3 sm:px-5">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {product.map((item: dataType) => (
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
        </section>

        {/* Pagination */}
        <div className="mt-10">
          <SitePagination />
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <Services />
        </div>
      </main>
    </div>
  );
}
