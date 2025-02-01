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
          className="w-full inline-block rounded-t-md"
        />
        <CardTitle className="sr-only">Card Title</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Link href="/">Read More</Link>
      </CardFooter>
    </Card>
  );
}

export default PostCard