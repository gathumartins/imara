"use client";
import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


function FeaturedPost({post}:any) {
  const date = new Date(post.node.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  return (
    <Card className="shadow-md bg-white p-0 lg:flex flex-row justify-stretch">
      <CardHeader className="p-0 mt-0 relative lg:w-1/2">
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
      <CardContent className="py-6 px-6 lg:px-12 pb-0 lg:w-1/2 lg:flex place-items-center">
        <section className="mb-8">
          <header className="flex justify-start items-center gap-4">
            <h5 className="text-iNeutral font-avenirRoman text-base bg-[#EEF3FC] px-4 py-1 border-1 boredr-iNeutral">
              Featured
            </h5>
            <h5 className="text-iNeutral font-avenirRoman text-base">
              {formattedDate}
            </h5>
          </header>
          <h4 className="my-4 text-iBlue text-xl font-avenirNextBold">
            {post.node.title}
          </h4>
          <div
            className="text-iNeutral font-avenirRoman text-base line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.node.content }}
          ></div>
          <footer className="mt-6 flex flex-row justify-between gap-5 items-center">
            <div className="flex flex-row gap-5 items-center">
              <Avatar>
                <AvatarImage src={post.node.author.node.avatar.url} />
                <AvatarFallback>{post.node.author.node.name}</AvatarFallback>
              </Avatar>
              <h5 className="font-avenirRoman text-sm text-iNeutral">
                {post.node.author.node.name}
              </h5>
            </div>
            <Link
              href={`/blog/${post.node.slug}`}
              className="text-iSecondary text-lg hover:text-iBlue font-avenirBook flex gap-2 items-center"
            >
              <span>Read More</span>
              <FaArrowRight />
            </Link>
          </footer>
        </section>
      </CardContent>
    </Card>
  );
}

export default FeaturedPost;
