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
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function FeaturedPost() {
  return (
    <Card className="shadow-md bg-white p-0 lg:flex flex-row justify-stretch">
      <CardHeader className="p-0 mt-0 relative lg:w-1/2">
        <Image
          src="/images/post.png"
          alt="Imara Fellowship report Icon"
          width={354}
          height={228}
          className="w-full inline-block lg:rounded-l-lg lg:rounded-r-0 rounded-t-lg"
        />
        <CardTitle className="sr-only">Card Title</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
      </CardHeader>
      <CardContent className="py-6 px-6 lg:px-12 pb-0 lg:w-1/2 lg:flex place-items-center">
        <section className="mb-8">
          <header className="flex justify-start items-center gap-4">
            <h5 className="text-iNeutral font-avenirRoman text-base bg-[#EEF3FC] px-4 py-1 border-1 boredr-iNeutral">
              Featured
            </h5>
            <h5 className="text-iNeutral font-avenirRoman text-base">
              Oct 24, 2024
            </h5>
          </header>
          <h4 className="my-4 text-iBlue text-xl font-avenirNextBold">
            Lorem article heading will be placed here across.
          </h4>
          <p className="text-iNeutral font-avenirRoman text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            dolore amet ad dolores quibusdam quia rem, quasi suscipit officia at
            voluptatem velit laudantium ratione libero laborum doloremque
            similique quos nulla?
          </p>
          <footer className="mt-6 flex flex-row justify-between gap-5 items-center">
            <div className="flex flex-row gap-5 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h5 className="font-avenirRoman text-sm text-iNeutral">Banks</h5>
            </div>
            <Link
              href="/blog/1"
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
