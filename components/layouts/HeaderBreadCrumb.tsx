import React from "react";
import Title from "../ui/Title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Image from "next/image";

interface headerType {
  title: string;
  breadCrumbPage: string;
  breadCrumbLink: string;
}

export default function HeaderBreadCrumb({
  title,
  breadCrumbPage,
  breadCrumbLink,
}: headerType) {
  return (
    <>
      <header className="bg-[url(/images/shopBanner.png)] bg-cover h-80 w-full text-center flex items-center">
        <div className="m-auto grid items-center gap-4">
          <Image
            src={"/images/logo.png"}
            width={50}
            height={50}
            alt="Furniro Hero logo"
            className="m-auto"
          />
          <Title className="text-center text-5xl">{title} </Title>
          <Breadcrumb className="m-auto">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{breadCrumbPage}</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">{breadCrumbLink}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </>
  );
}
