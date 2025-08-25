import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="m-auto"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, i) => (
            <CarouselItem
              key={i}
              className=" w-full h-[95dvh] bg-[url('/images/header-banner.png')] bg-no-repeat bg-top bg-contain"
            >
              <div className="xl:p-8 lg:p-6 md:p-4 p-2 rounded-lg md:space-y-2 space-y-0 bg-[var(--bgPrimary)] xl:max-w-lg lg:max-w-96 md:max-w-80 max-w-70 text-center">
                <p className="xl:text-base lg:text-sm text-xs font-semibold">
                  New Arrival
                </p>
                <h1 className="xl:text-5xl lg:text-3xl text-xl font-bold leading-tight text-[var(--textPrimary)]">
                  Discover Our New Collection
                </h1>
                <p className="xl:text-lg lg:text-base text-sm font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Button
                  variant="default"
                  className="rounded-none mt-4 bg-[var(--textPrimary)]  text-white"
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
