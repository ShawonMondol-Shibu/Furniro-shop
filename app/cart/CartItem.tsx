/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CartItem.tsx
"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CartContextProvider } from "@/context/CartProvider";

export default function CartItem({ cartsData }:any) {
  const [quantity, setQuantity] = useState(cartsData.quantity || 1);
  const { handleQuantity, handleRemove } = CartContextProvider();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = Math.max(1, Number(e.target.value)); // prevent 0 or negative
    setQuantity(newQty);
    handleQuantity(cartsData.id, newQty);
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="flex items-center justify-between gap-4">
        {/* Product Preview */}
        <div className="rounded-md p-2 bg-[#F9F1E7]">
          <Image
            src={cartsData.image || "/images/products/image.png"}
            alt={cartsData.productName || "Product image"}
            width={80}
            height={80}
            className="object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="space-x-6">
          <span className="text-sm text-muted-foreground font-medium">
            {cartsData.productName}
          </span>
          <span className="text-sm text-muted-foreground">
            <small>{cartsData.currency}</small>
            {cartsData.price}
          </span>
        </div>

        {/* Quantity & Total */}
        <div className="flex items-center gap-4">
          <Input
            type="number"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
            className="w-12 text-center text-sm px-1 py-0 h-8"
          />
          <p className="text-sm font-medium">
            <small>{cartsData.currency}</small>
            {(cartsData.price * quantity).toFixed(2)}
          </p>

          <Button
            size="icon"
            variant="ghost"
            className="text-yellow-600 hover:text-yellow-700"
            onClick={() => handleRemove(cartsData.id)} // remove item
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
