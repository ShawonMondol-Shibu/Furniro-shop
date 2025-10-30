import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleX, ShoppingCart } from "lucide-react";
import Title from "../ui/Title";
import { Button } from "../ui/button";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { CartContextProvider } from "@/context/CartProvider";
export default function CartButton() {
  const { totalPrice, carts, handleRemove } = CartContextProvider();
  const cartLinks = [
    { url: "/cart", name: "Cart" },
    { url: "/checkout", name: "Checkout" },
    { url: "/comparison", name: "Comparison" },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="relative w-fit">
          <small className="sticky right-0 top-0 w-4 h-4 text-white bg-primary rounded-full flex items-center justify-center">
            {carts.length}
          </small>
          <ShoppingCart />
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="flex items-start justify-between gap-10">
          <Title className="border-b text-2xl font-semibold pb-4">
            Shoping Cart
          </Title>
          <Button variant={"ghost"} size={"icon"} asChild className="size-6">
            <MdOutlineRemoveShoppingCart />
          </Button>
        </div>

        {carts.map((cart) => (
          <Card key={cart.id} className="p-0 border-none shadow-none mt-4">
            <div className="flex items-center justify-between gap-5">
              <Image
                src={cart.image || "/images/products/image.png"}
                width={108}
                height={108}
                alt={cart.productName}
              />
              <CardContent className="p-0 space-y-2">
                <p>{cart.productName}</p>
                <p>
                  {cart.quantity}X {""}
                  <span className="text-(--textPrimary) text-xs font-medium">
                    {cart.currency}
                    {cart.price}
                  </span>
                </p>
              </CardContent>
              <CardFooter className="p-0">
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => handleRemove(cart.id)}
                  asChild
                  className="size-6"
                >
                  <CircleX />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}

        <div className="mt-10">
          <div className="flex items-center justify-between gap-20">
            <p>Subtotal</p>
            <p className="text-(--textPrimary)">Rs {totalPrice}</p>
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between gap-5">
            {cartLinks.map((cartLink) => (
              <Button
                key={cartLink.name}
                variant={"outline"}
                asChild
                className="hover:bg-[var(--bg-primary]"
              >
                <Link href={cartLink.url}>{cartLink.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
