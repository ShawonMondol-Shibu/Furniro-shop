import React, { ElementType } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Title from "@/components/ui/Title";
import ProductCard from "@/components/layouts/ProductCard";
import { BadgeCheck, Headset, Trophy, Truck } from "lucide-react";

interface serviceType {
  icon: ElementType;
  title: string;
  desc: string;
}

export default function Page() {
  const services = [
    { icon: Trophy, title: "High Quality", desc: "crafted from top materials" },
    { icon: BadgeCheck, title: "Warranty Protection", desc: "Over 2 years" },
    { icon: Truck, title: "Free Shipping", desc: "Order over 150 $" },
    { icon: Headset, title: "24 / 7 Support", desc: "Dedicated support" },
  ];

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

      <section className="bg-(--bgPrimary) p-5">

      </section>

      <main>
        {/* This is the Product Section */}
        <section className="container m-auto lg:grid xl:grid-cols-4 grid-cols-3 flex flex-wrap items-center justify-center gap-10 mt-10">
          {Array.from({ length: 16 }).map((item, i) => (
            <ProductCard
              key={i}
              image={"/images/image.png"}
              title={""}
              category={"hello"}
              price={100}
              savings={0}
              url=""
            />
          ))}
        </section>

        {/* This is the Pagination */}
        <Pagination className="my-20">
          <PaginationContent>
            <PaginationItem className="bg-(--bgPrimary)">
              <PaginationPrevious href="#" />
            </PaginationItem>

            {Array.from({ length: 6 }).map((item, i: number) => (
              <PaginationItem key={i} className="bg-(--bgPrimary)">
                <PaginationLink href="#" className="active:bg-(--textPrimary)">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem className="bg-(--bgPrimary)">
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* This is the Service Section */}
        <section className="bg-(--bgPrimary) px-10 py-32 flex gap-20 flex-wrap items-center justify-center">
          {services.map((service: serviceType, i: number) => (
            <div key={i} className="flex items-center gap-2 ">
              <service.icon size={60} />
              <div>
                <h3 className="text-3xl font-semibold">{service.title}</h3>
                <p className="text-xl font-medium text-(--textGray)">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
