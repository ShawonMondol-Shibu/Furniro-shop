import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleX, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import Title from "../ui/Title";

export default function HeartButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <Heart />
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <Title className="text-2xl">Faviourate</Title>
        <Card className="p-0 border-none shadow-none mt-4">
          <div className="flex items-center justify-between gap-5">
            <Image
              src={"/images/products/image.png"}
              width={108}
              height={108}
              alt="product image"
            />
            <CardContent className="p-0 space-y-2">
              <p>Asgaard Sofa</p>
              <p>
                1 x{" "}
                <span className="text-(--textPrimary) text-xs font-medium">
                  Rs 250,000.00
                </span>
              </p>
            </CardContent>
            <CardFooter className="p-0">
              <Button
                variant={"ghost"}
                size={"icon"}
                asChild
                className="size-6"
              >
                <CircleX />
              </Button>
            </CardFooter>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
