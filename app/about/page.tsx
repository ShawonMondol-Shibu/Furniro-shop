import HeaderBreadCrumb from "@/components/layouts/HeaderBreadCrumb";
import React from "react";
import BlogCard from "./BlogCard";

export default function Page() {
  return (
    <div>
      <HeaderBreadCrumb
        title="Blog"
        breadCrumbPage="Home"
        breadCrumbLink="Blog"
      />
      <main className="container m-auto mt-20 grid grid-cols-2">
        <section>
          
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>

        <aside></aside>
      </main>
    </div>
  );
}
