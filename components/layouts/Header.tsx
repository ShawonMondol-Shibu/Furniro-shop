import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 3 }).map((item, i) => (
            <CarouselItem key={i} className=" relative">
              <Image
                src={"/images/header-banner.png"}
                width={1000}
                height={1000}
                alt="header banner image"
                className="w-full h-[90vh]"
              />
              <div className="bg-(--bgPrimary) w-[643px] p-8 fixed top-[30%] right-[5%] rounded-lg space-y-2">
                <p className="text-base font-semibold">New Arrival</p>
                <h1 className="text-6xl font-bold leading-tight text-(--textPrimary)">
                  Discover Our New Collection
                </h1>
                <p className="text-lg font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="rounded-none bg-(--textPrimary) px-20 py-8 mt-5"
                >
                  BUY NOW
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
}
