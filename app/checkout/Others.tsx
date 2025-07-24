import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleIcon } from "lucide-react";
import React from "react";

export default function Others() {
  return (
    <section className="w-96 m-auto space-y-4">
      <div className="flex items-center gap-10 justify-between">
        <p className="text-2xl font-medium">Product</p>
        <p className="text-2xl font-medium">Subtotal</p>
      </div>
      <div className="flex items-center gap-10 justify-between text-base font-normal">
        <p>
          <span className="text-[var(--textGray)]">Asgaard Sofa</span> &nbsp; X
          1
        </p>
        <p className=" font-light">Rs. 250,000.00</p>
      </div>
      <div className="flex items-center gap-10 justify-between text-base font-normal">
        <p>Subtotal</p>
        <p className="font-light">Rs. 250,000.00</p>
      </div>
      <div className="flex items-center gap-10 justify-between">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-bold text-[var(--textPrimary)]">
          Rs. 250,000.00
        </p>
      </div>

      <hr />

      <div className="space-y-2">
        <p className="flex items-center gap-4 text-base font-normal">
          <CircleIcon fill="black" size={16} />
          <span>Direct Bank Transfer</span>
        </p>
        <p className="text-[var(--textGray)] text-base font-light text-justify">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <Input
            type="radio"
            id="bank"
            name="moneyTransfer"
            className="w-fit"
          />
          <Label htmlFor="bank">Direct Bank Transfer</Label>
        </div>
        <div className="flex items-center gap-4">
          <Input
            type="radio"
            id="cash"
            name="moneyTransfer"
            className="w-fit"
          />
          <Label htmlFor="cash"> Cash On Delivery</Label>
        </div>
      </div>

      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <b>privacy</b> <b>policy.</b>
      </p>

      <Button variant={"outline"} size={"lg"} type="submit">
        Place order
      </Button>
    </section>
  );
}
