import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function SitePagination() {
  return (
    <Pagination className="my-20">
      <PaginationContent>
        <PaginationItem className="bg-(--bgPrimary)">
          <PaginationPrevious href="#" />
        </PaginationItem>

        {Array.from({ length: 6 }).map((item, i: number) => (
          <PaginationItem key={i} className="bg-(--bgPrimary)">
            <PaginationLink href="#" className="active:bg-(--textPrimary)">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem className="bg-(--bgPrimary)">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
