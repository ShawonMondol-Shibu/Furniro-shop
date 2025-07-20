import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Circle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <header className="bg-(--bgPrimary) py-8">
        <div className="container m-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="mt-10">
        {/* Product Details Section */}
        <section className="container m-auto flex items-start gap-30">
          {/* Product Details Images */}
          <div className="flex items-start gap-10">
            <div className="space-y-8">
              {Array.from({ length: 4 }).map((item, index) => (
                <div
                  key={index}
                  className="w-18 h-20 bg-(--bgPrimary) rounded-xl flex items-center"
                >
                  <Image
                    src={"/images/products/image.png"}
                    width={481}
                    height={391}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="w-[423px] h-[500] bg-(--bgPrimary) rounded-xl flex items-center">
              <Image
                src={"/images/products/image.png"}
                width={481}
                height={391}
                alt=""
              />
            </div>
          </div>

          {/* Product Details texts */}
          <div className="space-y-5 w-96">
            <h3 className="text-[42px] font-normal">Asgaard Sofa</h3>

            <h5 className="text-2xl font-medium">Rs 250,000.00</h5>

            <span className="flex items-center gap-5 h-8">
              <span className="flex gap-2 items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} fill="gold" stroke="gold" size={20} />
                ))}
              </span>

              <Separator orientation="vertical" />
              <span className="text-(--textGray) text-sm">
                5 Customer Review
              </span>
            </span>

            <p className="text-sm font-normal">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div>
              Size
              <div className="space-x-2">
                <Button size={"icon"} className="bg-(--bgPrimary) text-black">
                  L
                </Button>
                <Button size={"icon"} className="bg-(--bgPrimary) text-black">
                  XL
                </Button>
                <Button size={"icon"} className="bg-(--bgPrimary) text-black">
                  XS
                </Button>
              </div>
            </div>

            <div>
              Color
              <div className="space-x-4">
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="size-8"
                  asChild
                >
                  <Circle fill="#816DFA" stroke="#816DFA" />
                </Button>

                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="size-8"
                  asChild
                >
                  <Circle fill="black" />
                </Button>

                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="size-8"
                  asChild
                >
                  <Circle
                    fill="var(--textPrimary)"
                    stroke="var(--textPrimary)"
                  />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="border rounded-lg">
                <Button variant={"ghost"}>-</Button>
                <span className="p-2">1</span>
                <Button variant={"ghost"}>+</Button>
              </div>
              <Button variant={"outline"}>Add To Cart</Button>
              <Button variant={"outline"}>+ Compare</Button>
            </div>

            <Separator className="my-5" />
          </div>
        </section>
      </main>
    </div>
  );
}
