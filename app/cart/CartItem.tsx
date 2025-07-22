// components/CartItem.tsx
"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CartItem() {
  return (
    <Card className="flex items-center justify-between p-4 gap-4 bg-white shadow-sm">
      {/* Product Preview */}
      <div className="flex items-center gap-4">
        <div className="rounded-md p-2 bg-[#F9F1E7]">
          <Image
            src="/images/product/image.png" // 👈 Replace with your actual image path
            alt="Asgaard Sofa"
            width={80}
            height={80}
            className="object-cover rounded-md"
          />
        </div>

        <div>
          <p className="text-sm text-muted-foreground font-medium">Asgaard sofa</p>
          <p className="text-sm text-muted-foreground">Rs. 250,000.00</p>
        </div>
      </div>

      {/* Quantity & Total */}
      <div className="flex items-center gap-4">
        <Input
          type="number"
          defaultValue={1}
          className="w-12 text-center text-sm px-1 py-0 h-8"
        />
        <p className="text-sm font-medium">Rs. 250,000.00</p>

        <Button
          size="icon"
          variant="ghost"
          className="text-yellow-600 hover:text-yellow-700"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
