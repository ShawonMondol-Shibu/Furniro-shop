"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import data from "@/public/furnitureProducts.json";

export default function ProductDetails() {
  const params = useParams();
  console.log(params.product);
  const id = String(params.product);
  const productData = data.find((product) => String(product.id) == id);
  console.log(productData);
  const handleCart = ()=>{
    localStorage.setItem("id", id)
    console.info(localStorage)
    return toast.success(`${id} Product added`)
  }
  return (
    <section className="container m-auto grid md:grid-cols-2 grid-cols-1 items-start gap-10">
      {/* Product Details Images */}
      <div className="flex items-start gap-10">
        <div className="space-y-8">
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              key={index}
              className="w-18 h-20 bg-(--bgPrimary) rounded-xl flex items-center"
            >
              <Image
                src={productData?.image ?? ""}
                width={481}
                height={391}
                alt={productData?.productName ?? ""}
              />
            </div>
          ))}
        </div>
        <div className="w-[423px] h-[500] bg-(--bgPrimary) rounded-xl flex items-center">
          <Image
            src={productData?.image ?? ""}
            width={481}
            height={391}
            alt={productData?.productName ?? ""}
          />
        </div>
      </div>

      {/* Product Details texts */}
      <div className="space-y-5 w-96">
        <h3 className="text-[42px] font-normal">{productData?.productName}</h3>

        <h5 className="text-2xl font-medium">
          {productData?.currency}
          {productData?.price}{" "}
        </h5>

        <span className="flex items-center gap-5 h-8">
          <span className="flex gap-2 items-center">
            {[...Array(Math.floor(productData?.rating || 0))].map(
              (_, index) => (
                <Star key={index} fill="gold" stroke="gold" size={20} />
              )
            )}

            {productData?.rating}
          </span>

          <Separator orientation="vertical" />
          <span className="text-(--textGray) text-sm">
            {productData?.totalReviews} Customer Review
          </span>
        </span>

        <p className="text-sm font-normal">{productData?.shortDescription}</p>

        {/* Product Sizes  */}
        <div className="space-y-4">
          <p>Size</p>
          <div className="space-x-2">
            {productData?.sizes.map((sizes) => (
              <Button
                key={sizes}
                className="bg-(--bgPrimary) hover:text-white hover:bg-(--textPrimary) text-black"
              >
                {sizes}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Colors */}
        <div className="space-y-4">
          <p>Color</p>
          <div className="space-x-4">
            {productData?.colors.map((color) => (
              <Button size={"sm"} key={color}>
                {/* <Circle fill="#816DFA" stroke="#816DFA" /> */}
                {color}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="border rounded-lg">
            <Button variant={"ghost"}>-</Button>
            <span className="p-2">1</span>
            <Button variant={"ghost"}>+</Button>
          </div>
          <Button
            variant={"outline"}
            onClick={handleCart}
            className="hover:cursor-pointer"
          >
            Add To Cart
          </Button>
          <Button variant={"outline"} asChild>
            <Link href={"/comparison"}>+ Compare</Link>
          </Button>
        </div>

        <Separator className="my-5" />

        <div className="space-y-2 my-5">
          {productData?.inStock ? (
            <p className="font-semibold">
              Stock :{" "}
              <span className="text-green-600 font-medium"> In Stock</span>
            </p>
          ) : (
            <p className="font-semibold">
              Stock :{" "}
              <span className="text-red-600 font-medium"> Out Of Stock</span>
            </p>
          )}

          {productData?.freeShipping ? (
            <p className="font-semibold">
              Shipping :{" "}
              <span className="text-green-600 font-medium"> Free</span>
            </p>
          ) : (
            <p className="font-semibold">
              Stock : <span className="text-red-600 font-medium">Paid</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
