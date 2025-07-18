import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import React from "react";
import BlogCard from "./BlogCard";
import Services from "@/components/layouts/Services";
import SitePagination from "@/components/layouts/SitePagination";

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb
        title="Blog"
        breadCrumbPage="Home"
        breadCrumbLink="Blog"
      />
      <main className="container m-auto my-20">
        <div className="flex">
          <section className="space-y-10 flex-1">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </section>

          <aside className="flex-1">

          </aside>
        </div>

        <SitePagination />

      </main>
      <Services />
    </div>
  );
}
