"use client";
import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import Services from "@/components/layouts/Services";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb
        title="Checkout"
        breadCrumbPage="Home"
        breadCrumbLink="Checkout"
      />

      <Toaster richColors />
      <main className="container m-auto px-5 my-10 ">
        <CheckoutForm />
      </main>

      <Services />
    </div>
  );
}
