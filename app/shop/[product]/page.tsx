import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Circle, Star } from "lucide-react";
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

      <main>
        {/* Product Details Section */}
        <section>
          <div></div>

          <div>
            <h3>Asgaard Sofa</h3>

            <h5>Rs 250,000.00</h5>

            <span>
              <Star /> | 5 Customer Review
            </span>

            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div>
              Size
              <div>

              <Button size={'icon'} className="bg-(--bgPrimary) text-black">L</Button>
              <Button size={'icon'}>XL</Button>
              <Button size={'icon'}>XS</Button>
              </div>
            </div>

            <div>
              Color
              <div>

              <Button variant={'ghost'} size={'icon'}>
                <Circle/>
              </Button>
              <Button variant={'ghost'} size={'icon'}>
                <Circle/>
              </Button>
              <Button variant={'ghost'} size={'icon'}>
                <Circle/>
              </Button>
              </div>
            </div>

<div className="flex items-center gap-2">
  <div className="border rounded-lg">
    <Button variant={'ghost'}>-</Button>
    <span className="p-2">1</span>
    <Button variant={'ghost'}>+</Button>
  </div>
  <Button variant={'outline'}>Add To Cart</Button>
  <Button variant={'outline'}>+ Compare</Button>
</div>
          </div>
        </section>
      </main>
    </div>
  );
}
