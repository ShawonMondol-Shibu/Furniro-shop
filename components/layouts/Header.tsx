import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
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
              className="relative w-full h-[90dvh] bg-[url('/images/header-banner.png')] bg-no-repeat bg-top bg-contain flex items-center justify-between"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-8 rounded-lg space-y-4 bg-[var(--bgPrimary)] max-w-xl text-center">
                <p className="text-base font-semibold text-white">New Arrival</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[var(--textPrimary)]">
                  Discover Our New Collection
                </h1>
                <p className="text-lg font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-none px-10 py-6 mt-4 bg-[var(--textPrimary)] text-white"
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
