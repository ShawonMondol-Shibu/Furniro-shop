import React from "react";
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

export default function Page() {
  return (
    <div className="">
      <HeaderBreadCrumb
        title="Shop"
        breadCrumbPage="Home"
        breadCrumbLink="Shop"
      />

      {/* Filter is added here */}
      <section className="bg-(--bgPrimary) p-5">
        <div className="container m-auto flex items-center-safe justify-between">
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
        <section className="container m-auto lg:grid xl:grid-cols-4 grid-cols-3 flex flex-wrap items-center justify-center gap-10 mt-10">
          {Array.from({ length: 16 }).map((item, i) => (
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
        </section>

        {/* This is the Pagination */}
        <SitePagination />

        {/* This is the Service Section */}
        <Services />
      </main>
    </div>
  );
}
