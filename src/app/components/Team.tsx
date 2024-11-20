import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Image from 'next/image';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';

function Team() {
  return (
    <Card className="flex flex-row p-0">
      <CardHeader className="p-0">
        <Image
          src="/images/team.png"
          width={292}
          height={193}
          alt="Imara Team Leader"
          className="object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 flex place-items-center">
        <div>
          <div className="[&_h4]:text-iBlue [&_h4]:font-avenirNextBold [&_h4]:text-lg [&_h4]:mb-1 [&_h5]:text-base [&_h5]:text-iBlue [&_h5]:font-avenirRoman">
            <h4>Full Names</h4>
            <h5>Designation</h5>
          </div>
          <ul className="flex flex-row max-w-[300px] mx-auto mt-8 md:ml-0 gap-8 justify-between [&_li]:w-[24px] [&_li]:h-[24px] [&_li]:border-1 [&_li]:border-iSecondary [&_li]:rounded-md">
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