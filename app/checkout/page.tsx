import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import Services from "@/components/layouts/Services";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb
        title="Checkout"
        breadCrumbPage="Home"
        breadCrumbLink="Checkout"
      />

      <main className="container m-auto px-5 my-10 grid grid-cols-2 items-start gap-10">
        <section>
          <div className="flex gap-5 items-center">
            <div className="space-y-4">
              <Label> Frist Name </Label>
              <Input />
            </div>
            <div className="space-y-4">
              <Label> Frist Name </Label>
              <Input />
            </div>
          </div>
        </section>

        <section className="w-96 m-auto space-y-4">
          <div className="flex items-center gap-10 justify-between">
            <p className="text-2xl font-medium">Product</p>
            <p className="text-2xl font-medium">Subtotal</p>
          </div>
          <div className="flex items-center gap-10 justify-between text-base font-normal">
            <p>
              <span className="text-[var(--textGray)]">Asgaard Sofa</span>{" "}
              &nbsp; X 1
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
        </section>
      </main>

      <Services />
    </div>
  );
}
