"use client";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNav from "./TopNav";

function Header({menu, lay}:any) {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white py-2 sticky w-full top-0 z-10 shadow-md">
      <div className="container flex justify-between gap-6 place-items-center">
        {lay.logo !== null && (
          <Image
            src={lay.logo.node.sourceUrl}
            alt="Imara Fellowship Logo"
            width={149}
            height={60}
          />
        )}
        <nav className="flex-grow max-w-[850px] hidden lg:flex flex-row">
          <TopNav menu={menu} status={open} />
        </nav>
        <div className="topRight flex justify-end gap-3">
          {lay.register.buttonLink.url !== null && (
            <Link
              href={lay.register.buttonLink.url}
              className="bg-iBlue text-white hover:text-iBlue px-3 py-2 rounded-sm hover:bg-white border-1 border-iBlue flex gap-2 place-items-center font-avenirBlack"
            >
              {lay.register.buttonLink.title}
              <IoMdArrowRoundForward />
            </Link>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <div className="flex place-items-center justify-end lg:hidden text-iBlue hover:text-iSecondary cursor-pointer">
              <SheetTrigger>
                <AiOutlineMenuFold className="w-8 h-8" />
              </SheetTrigger>
            </div>
            <SheetContent className="lg:hidden [&_svg]:w-10 [&_svg]:text-iPrimary [&_svg]:hover:text-iSecondary [&_svg]:h-8 [&_button]:top-4 [&_button]:left-4">
              <SheetHeader className="h-[50px] shadow-sm">
                <SheetDescription className="py-10">
                  <ul className="h-full flex flex-col mx-auto max-lg:gap-6 w-[300px] lg:w-full lg:flex-row place-items-center justify-between font-avenirRoman flex-grow">
                    {menu.map((menu: any) => (
                      <li key={menu.node.id}>
                        <Link
                          className="text-iNeutral hover:text-iBlue text-base capitalize"
                          href={menu.node.uri}
                          onClick={() => setOpen(false)}
                        >
                          {menu.node.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
