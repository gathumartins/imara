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

function OtherArticle({post}:any) {
  const date = new Date(post.node.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  return (
    <Link href={`/blog/${post.node.slug}`}>
      <Card className="shadow-md bg-white p-0 max-md:flex lg:flex flex-row justify-stretch mb-4">
        <CardHeader className="p-0 mt-0 relative lg:w-1/2">
          {post.node.featuredImage !== null && (
            <Image
              src={post.node.featuredImage.node.sourceUrl}
              alt={`Imara Africa Fellowship ${post.node.title} Image`}
              width={post.node.featuredImage.node.mediaDetails.width}
              height={post.node.featuredImage.node.mediaDetails.height}
              className="h-full inline-block max-md:rounded-l-lg md:rounded-t-lg lg:rounded-l-lg lg:rounded-tr-0"
            />
          )}
          <CardTitle className="sr-only">{post.node.title}</CardTitle>
          <CardDescription
            className="sr-only"
            dangerouslySetInnerHTML={{ __html: post.node.content }}
          ></CardDescription>
        </CardHeader>
        <CardContent className="py-2 my-2 lg:w-1/2 flex place-items-center">
          <section className="flex flex-col gap-2 justify-between">
            <h4 className="text-iBlue text-xs font-avenirNextBold line-clamp-3">
              {post.node.title}
            </h4>
            <h5 className="text-iNeutral font-avenirRoman text-xs">
              {formattedDate}
            </h5>
          </section>
        </CardContent>
      </Card>
    </Link>
  );
}

export default OtherArticle;
