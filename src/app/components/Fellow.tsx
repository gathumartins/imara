import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

function Fellow({ fellow, designation }: any) {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="min-h-[280px] p-0">
        {fellow.node.featuredImage !== null && (
          <Image
            src={fellow.node.featuredImage.node.sourceUrl}
            alt={`imara fellowship Africa fellow alumni ${fellow.node.titl} portrait`}
            width={fellow.node.featuredImage.node.mediaDetails.width}
            height={fellow.node.featuredImage.node.mediaDetails.height}
            className="rounded-t-lg w-full"
          />
        )}
      </CardContent>
      <CardHeader className="bg-iSecondary rounded-b-lg border-none">
        <CardTitle className="text-xl font-avenirRoman text-white">
          {fellow.node.title}
        </CardTitle>
        <CardDescription className="text-base text-white/80 font-avenirRoman">
          {designation}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Fellow