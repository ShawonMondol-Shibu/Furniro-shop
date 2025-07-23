import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import Services from "@/components/layouts/Services";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb
        title="Checkout"
        breadCrumbPage="Home"
        breadCrumbLink="Checkout"
      />

      <main className="container m-auto px-5 my-10">
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

        
      </main>

      <Services/>
    </div>
  );
}
