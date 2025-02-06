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

function PostCard({post}:any) {
    const date = new Date(post.node.date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  return (
    <Card className="shadow-md bg-white p-0">
      <CardHeader className="p-0 mt-0 relative">
        {post.node.featuredImage !== null && (
          <Image
            src={post.node.featuredImage.node.sourceUrl}
            alt={`Imara Fellowship Africa ${post.node.title} image`}
            width={post.node.featuredImage.node.mediaDetails.width}
            height={post.node.featuredImage.node.mediaDetails.height}
            className="w-full inline-block lg:rounded-l-lg lg:rounded-r-0 rounded-t-lg"
          />
        )}
        <CardTitle className="sr-only">{post.node.title}</CardTitle>
        <CardDescription
          className="sr-only line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.node.content }}
        ></CardDescription>
      </CardHeader>
      <CardContent className="py-6 pb-0">
        <h5 className="text-iNeutral font-avenirRoman text-base">
          {formattedDate}
        </h5>
        <h4 className="my-4 text-iBlue text-xl font-avenirNextBold">
          {post.node.title}
        </h4>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${post.node.slug}`}
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