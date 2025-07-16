import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Title from "@/components/ui/Title";
import ProductCard from "@/components/layouts/ProductCard";

export default function Page() {
  return (
    <div className="">
      <header className="bg-[url(/images/shopBanner.png)] bg-cover h-80 w-full text-center flex items-center">
        <div className="m-auto">
          <Title className="text-center">Shop </Title>
          <Breadcrumb className="">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main>
        <div className="container m-auto lg:grid xl:grid-cols-4 @min-xs::grid-cols-3 flex flex-wrap items-center justify-center gap-10 mt-10">
          {Array.from({ length: 16 }).map((item, i) => (
            <ProductCard
              key={i}
              image={"/images/image.png"}
              title={""}
              category={"hello"}
              price={100}
              savings={0}
            />
          ))}
        </div>

        
      </main>
    </div>
  );
}
