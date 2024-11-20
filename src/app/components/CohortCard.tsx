import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";

function CohortCard() {
  return (
    <Card className="rounded bg-white">
      <CardHeader className="bg-iSecondary rounded-t p-8 flex justify-center place-items-center">
        <Image src="/images/cohort.svg" alt="Imara Cohort Image" width={180} height={136}/>
      </CardHeader>
      <CardContent className="pt-5 [&_p]:text-iNeutral [&_p]:text-base [&_p]:font-avenirRoman [&_h4]:text-iBlue [&_h4]:font-avenirBook [&_h4]:text-lg [&_h4]:mb-3">
        <h4>Cohort 1 - 2019</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea beatae maiores, vel harum eos nesciunt earum suscipit corrupti velit.</p>
      </CardContent>
      <CardFooter>
        <Link
          href="#"
          className="bg-iSecondary p-3 rounded text-white border-1 border-iSecondary hover:bg-white hover:text-iSecondary w-full text-center flex gap-2 justify-center place-items-center font-avenirBlack"
        >
          View Cohort <IoMdArrowRoundForward />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CohortCard