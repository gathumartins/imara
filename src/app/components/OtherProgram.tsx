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

function OtherProgram() {
  return (
    <Card className="shadow-md bg-white max-w-[350px]">
      <CardHeader>
        <Image
          src="/images/proicon.svg"
          alt="Imara Fellowship report Icon"
          width={60}
          height={60}
          className="inline-block mb-6"
        />
        <CardTitle>Online Learning</CardTitle>
        <CardDescription className="sr-only">Card Description</CardDescription>
      </CardHeader>
      <CardContent className="pb-6 pt-4 myPro">
        <p>
          Participants are selected to sponsored to undertake a certificate
          course related to policy & Governance with one of the globally
          recognized Universities.
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href="/programs/program/1"
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
