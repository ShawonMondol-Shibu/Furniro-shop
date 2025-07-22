import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleX, ShoppingCart } from "lucide-react";
import Title from "../ui/Title";
import { Button } from "../ui/button";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
export default function CartButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ShoppingCart />
      </PopoverTrigger>
      <PopoverContent className="w-96">

        <div className="flex items-start justify-between gap-10">
            <Title className="border-b text-2xl font-semibold pb-4">Shoping Cart</Title>
            <Button variant={"ghost"} size={'icon'} asChild className="size-6">
                <MdOutlineRemoveShoppingCart />
            </Button>
        </div>

        <Card className="p-0 border-none shadow-none mt-4">
            <div className="flex items-center justify-between gap-5">

                <Image src={'/images/products/image.png'} width={108} height={108} alt="product image"/>
            <CardContent className="p-0">
                <p>Asgaard Sofa</p>
                <p>1 x <span>Rs 250,000.00</span></p>
            </CardContent>
            <CardFooter className="p-0">
                <Button variant={'ghost'} size={'icon'} asChild className="size-6">
                    <CircleX/>
                </Button>
            </CardFooter>
            </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
