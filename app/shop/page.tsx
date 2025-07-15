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
import ProductCard, { productCardType } from "@/components/layouts/ProductCard";

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

      <main className="grid grid-cols-4 items-center justify-center gap-10 mt-10">
        {Array.from({ length: 15 }).map((item: productCardType) => (
          <ProductCard
            key={item}
            image={"/images/image.png"}
            title={"hi"}
            category={"hello"}
            price={100}
            savings={0}
          />
        ))}
      </main>
    </div>
  );
}
