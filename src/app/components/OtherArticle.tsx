"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function OtherArticle() {
  return (
    <Link href="/blog/1">
      <Card className="shadow-md bg-white p-0 max-md:flex lg:flex flex-row justify-stretch mb-4">
        <CardHeader className="p-0 mt-0 relative lg:w-1/2">
          <Image
            src="/images/post.png"
            alt="Imara Fellowship report Icon"
            width={354}
            height={228}
            className="h-full inline-block max-md:rounded-l-lg md:rounded-t-lg lg:rounded-l-lg lg:rounded-tr-0"
          />
          <CardTitle className="sr-only">Card Title</CardTitle>
          <CardDescription className="sr-only">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent className="py-2 my-2 lg:w-1/2 flex place-items-center">
          <section className="flex flex-col gap-2 justify-between">
            <h4 className="text-iBlue text-xs font-avenirNextBold line-clamp-3">
              Lorem article heading will be placed here across.
            </h4>
            <h5 className="text-iNeutral font-avenirRoman text-xs">
              Oct 24, 2024
            </h5>
          </section>
        </CardContent>
      </Card>
    </Link>
  );
}

export default OtherArticle;
