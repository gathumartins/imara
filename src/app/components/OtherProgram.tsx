"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function OtherProgram({pro}:any) {
  return (
    <Card className="shadow-md bg-white max-w-[350px] flex flex-col justify-between">
      <CardHeader>
        {pro.node.programfields.icon !== null && (
          <Image
            src={pro.node.programfields.icon.node.mediaItemUrl}
            alt={`Imara Africa Fellowship ${pro.node.title} Icon`}
            width={pro.node.programfields.icon.node.mediaDetails.width}
            height={pro.node.programfields.icon.node.mediaDetails.height}
            className="inline-block mb-6"
          />
        )}
        <CardTitle className="text-iBlue font-avenirNextBold text-lg">
          {pro.node.title}
        </CardTitle>
        <CardDescription
          className="sr-only line-clamp-3 "
          dangerouslySetInnerHTML={{ __html: pro.node.content }}
        ></CardDescription>
      </CardHeader>
      <CardContent
        className="pb-6 pt-4 myPro line-clamp-2 mb-3"
        dangerouslySetInnerHTML={{ __html: pro.node.content }}
      ></CardContent>
      <CardFooter>
        <Link
          href={`/programs/program/${pro.node.slug}`}
          className="text-white text-lg hover:bg-iSecondary text-center p-3 rounded-md font-avenirBook flex justify-center gap-1 items-center w-full bg-iBlue"
        >
          <span>Read More</span>
          <FaArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default OtherProgram;
