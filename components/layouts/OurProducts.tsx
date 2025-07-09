import React from "react";
import Title from "../ui/Title";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

export default function OurProducts() {
  return (
    <main className="container m-auto py-5">
      <Title className={"text-[40px]"}> Our Products </Title>
      <div className="xl:grid grid-cols-4 flex flex-wrap gap-10 items-center justify-center py-10">
        {Array.from({ length: 8 }).map((item, i) => (
          <Card key={i} className="w-72 pt-0 rounded-none m-auto">
            <Image
              src={"/images/image3.png"}
              width={285}
              height={301}
              alt="card image"
              className="m-auto"
            />
            <CardFooter className="block">
              <CardTitle className="text-2xl font-semibold">
                Syltherine
              </CardTitle>
              <p className="text-base font-medium">Stylish cafe chair</p>
              <h4 className="text-xl font-semibold">
                Rp 2.500.000{" "}
                <del className="text-base font-normal">Rp 3.500.000</del>
              </h4>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        variant={"outline"}
        size={"lg"}
        className="text-base text-(--textPrimary) font-semibold border-(--textPrimary) border rounded-none py-6 px-10 "
      >
        See More
      </Button>
    </main>
  );
}
