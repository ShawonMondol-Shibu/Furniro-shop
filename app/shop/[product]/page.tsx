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
              <Button>L</Button>
              <Button>XL</Button>
              <Button>XS</Button>
            </div>

            <div>
              Color
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

<div>
  
</div>
          </div>
        </section>
      </main>
    </div>
  );
}
