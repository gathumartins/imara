import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

function Fellow({fellow}:any) {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className='min-h-[280px] p-0'>
        <Image src="/images/gladys.webp" alt="imara fellowship fellow alumni gladys potrait" width={533} height={533} className='rounded-t-lg w-full'/>
      </CardContent>
      <CardHeader className='bg-iSecondary rounded-b-lg border-none'>
        <CardTitle className='text-xl font-avenirRoman text-white'>Card Title</CardTitle>
        <CardDescription className='text-base text-white/80 font-avenirRoman'>Card Description</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Fellow