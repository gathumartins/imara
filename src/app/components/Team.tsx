import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from 'next/image';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';

function Team({team}:any) {
  return (
    <Card className="flex flex-row p-0">
      <CardHeader className="p-0 w-1/3 max-lg:w-1/2">
        {team.node.featuredImage !== null && (
          <Image
            src={team.node.featuredImage.node.sourceUrl}
            width={team.node.featuredImage.node.mediaDetails.width}
            height={team.node.featuredImage.node.mediaDetails.height}
            alt={`${team.node.title} Imara Africa Fellowship ${team.node.teamfields.designation} Image`}
            className="max-sm:h-full object-cover "
          />
        )}
      </CardHeader>
      <CardContent className="p-6 flex place-items-center">
        <div>
          <div className="[&_h4]:text-iBlue [&_h4]:font-avenirNextBold [&_h4]:text-lg [&_h4]:mb-1 [&_h5]:text-base [&_h5]:text-iBlue [&_h5]:font-avenirRoman">
            <h4>{team.node.title}</h4>
            <h5>{team.node.teamfields.designation}</h5>
          </div>
          <ul className="flex flex-row max-w-[300px] mx-auto mt-3 sm:mt-8 md:ml-0 gap-8 justify-between [&_li]:w-[24px] [&_li]:h-[24px] [&_li]:border-1 [&_li]:border-iSecondary [&_li]:rounded-md">
            <li className="flex justify-center place-items-center p-3 bg-iSecondary text-white hover:bg-white hover:text-iSecondary">
              <Link target="_blank" href="https://www.facebook.com/imaraAfr">
                <FaFacebookF />
              </Link>
            </li>
            <li className="flex justify-center place-items-center p-3 bg-iSecondary text-white hover:bg-white hover:text-iSecondary">
              <Link target="_blank" href="https://x.com/Imara_Africa">
                <FaXTwitter />
              </Link>
            </li>
            <li className="flex justify-center place-items-center p-3 bg-iSecondary text-white hover:bg-white hover:text-iSecondary">
              <Link
                target="_blank"
                href="https://www.instagram.com/imarafellowship/"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default Team