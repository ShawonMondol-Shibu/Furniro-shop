import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import React from "react";
import BlogCard from "./BlogCard";
import Services from "@/components/layouts/Services";
import SitePagination from "@/components/layouts/SitePagination";
import { Input } from "@/components/ui/input";
import Link from "next/link";
interface categoryType {
  titles: string;
  items: number;
}
export default function Page() {
  const categorys = [
    { titles: "Crafts", items: 2 },
    { titles: "Design", items: 8 },
    { titles: "Handmade", items: 7 },
    { titles: "Interior", items: 1 },
    { titles: "Wood", items: 6 },
  ];
  return (
    <div>
      <HeaderBreadCrumb
        title="Blog"
        breadCrumbPage="Home"
        breadCrumbLink="Blog"
      />
      <main className="container m-auto my-20">
        <div className="flex items-start justify-between gap-20">
          <section className="space-y-10 flex-1/2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </section>

          <aside className="flex-1">
            <div>
              <Input />
              <ul className="px-5">
                <h3>Categories</h3>
                {categorys.map((category: categoryType, i: number) => (
                  <li key={i}>
                    <Link
                      href={""}
                      className="flex items-center justify-between"
                    >
                      <span>{category.titles}</span>

                      <span>{category.items}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>Recent Posts</div>
          </aside>
        </div>
        <SitePagination />
      </main>
      <Services />
    </div>
  );
}
