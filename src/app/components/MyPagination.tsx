"use client";
import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
import Report from "@/app/components/Report";
import Fellow from "./Fellow";
import PostCard from "./PostCard";

function MyPagination({ items, ipp, comp}: any) {
    const itemsPerPage = ipp;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const currentItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
        {comp == "report" &&
          currentItems.map((item: any, i: number) => <Report key={i} />)}
        {comp == "fellow" &&
          currentItems.map((item: any, i: number) => <Fellow key={i} />)}
        {comp == "blog" && currentItems.map((item: any, i: number) => <PostCard key={i} />)}
      </section>
      {items.length > 6 && (
        <footer className="container mt-5 flex justify-end">
          <Pagination
            loop
            showControls
            total={totalPages}
            initialPage={1}
            page={currentPage}
            onChange={(page) => setCurrentPage(page)}
            className="gap-2"
            classNames={{
              prev: "bg-white border-iBlue text-iNeutral hover:bg-iBlue hover:text-white",
              next: "bg-white border-iBlue text-iNeutral hover:bg-iBlue hover:text-white",
              cursor:
                "bg-iBlue text-white hover:bg-iSecondary rounded-md px-3 py-1",
            }}
          />
        </footer>
      )}
    </>
  );
}

export default MyPagination;
