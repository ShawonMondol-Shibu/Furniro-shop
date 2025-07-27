import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import React from "react";
import BlogCard from "./BlogCard";
import Services from "@/components/layouts/Services";
import SitePagination from "@/components/layouts/SitePagination";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
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
      <main className="container m-auto my-20 px-5">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <section className="space-y-10 flex-1/2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </section>

          <aside className="flex-1">
            <div className="space-y-10 mb-40">
              <Input />
              <ul className="px-5 space-y-5">
                <h3 className="text-2xl font-medium">Categories</h3>
                {categorys.map((category: categoryType, i: number) => (
                  <li key={i}>
                    <Link
                      href={"/about/blog"}
                      className="flex items-center justify-between text-base font-normal text-(--textGray)"
                    >
                      <span>{category.titles}</span>
                      <span>{category.items}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-5 space-y-10">
              <h3 className="text-2xl font-medium">Recent Posts</h3>
              {Array.from({ length: 5 }).map((post, i: number) => (
                <Link
                  href={"/about/blog"}
                  key={i}
                  className="w-3xs flex gap-5 items-center"
                >
                  <Image
                    src={"/blogs/posts/image.png"}
                    width={80}
                    height={80}
                    alt="post banner"
                    className="rounded-xl"
                  />
                  <hgroup className="space-y-2">
                    <h5 className="text-sm">
                      {"Going all-in with millennial design"}
                    </h5>
                    <p className="text-xs text-(--textGray)">{"03 Aug 2022"}</p>
                  </hgroup>
                </Link>
              ))}
            </div>
          </aside>
        </div>
        <SitePagination />
      </main>
      <Services />
    </div>
  );
}
