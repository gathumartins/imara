'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';

function PostCard() {
  return (
    <Card className="shadow-md bg-white p-0">
      <CardHeader className="p-0 mt-0 relative">
        <Image
          src="/images/post.png"
          alt="Imara Fellowship report Icon"
          width={354}
          height={228}
          className="w-full inline-block rounded-t-lg"
        />
        <CardTitle className="sr-only">Card Title</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
      </CardHeader>
      <CardContent className="py-6 pb-0">
        <h5 className="text-iNeutral font-avenirRoman text-base">
          Oct 24, 2024
        </h5>
        <h4 className="my-4 text-iBlue text-xl font-avenirNextBold">
          Lorem article heading will be placed here across.
        </h4>
      </CardContent>
      <CardFooter>
        <Link
          href="/blog/1"
          className="text-iSecondary text-lg hover:text-iBlue font-avenirBook flex gap-1 items-center"
        >
          <span>Read More</span>
          <FaArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PostCard