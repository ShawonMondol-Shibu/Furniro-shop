"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="m-auto w-full"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, i) => (
            <CarouselItem
              key={i}
              className="w-full h-[90vh] bg-[url('/images/header-banner.png')] bg-cover bg-center flex items-center justify-center relative"
            >
              <div className="bg-white/80 backdrop-blur-sm xl:p-10 lg:p-8 md:p-6 p-4 rounded-lg text-center max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <p className="text-sm md:text-base font-semibold text-gray-700">
                  New Arrival
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[var(--textPrimary)] mt-2">
                  Discover Our New Collection
                </h1>

                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>

                <Button
                  variant="default"
                  asChild
                  className="rounded-none mt-6 bg-[var(--textPrimary)] text-white hover:opacity-90 transition"

                >
                  <Link href={'/shop'}>
                  BUY NOW
                  </Link>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
}
