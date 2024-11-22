'use client'
import React from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaEnvelope } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaXTwitter,
  FaSquareWhatsapp,
} from "react-icons/fa6";


function Report() {

  return (
    <>
      <Card className="shadow-md bg-white border-iNeutral hover:border-iSecondary">
        <CardHeader className="h-[230px] bg-[#EEF3FC] cursor-pointer flex justify-center place-items-center px-4 rounded-t-md relative">
          <Image
            src="/images/reporticon.png"
            alt="Imara Fellowship report Icon"
            width={80}
            height={94}
          />
          <div className="absolute h-[230px] w-[60px] bg-iBlue -top-[6px] right-0 rounded-tr-md">

            <span className="text-center w-full text-white text-md font-avenirNextBold inline-block mx-auto">Share</span>
            <nav className="flex flex-col gap-2 p-4 justify-between h-[210px]">
              <EmailShareButton url="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf" className="text-center">
                <span className="sr-only">Email</span>
                <FaEnvelope className="text-white text-center hover:text-iSecondary w-5 h-5 mx-auto" />
              </EmailShareButton>
              <FacebookShareButton url="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf" className="text-center">
                <span className="sr-only">Facebook</span>
                <FaSquareFacebook className="text-white text-center hover:text-iSecondary w-5 h-5 mx-auto" />
              </FacebookShareButton>
              <LinkedinShareButton url="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf" className="text-center">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-white text-center hover:text-iSecondary w-5 h-5 mx-auto" />
              </LinkedinShareButton>
              <TwitterShareButton url="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf" className="text-center">
                <span className="sr-only">Twitter</span>
                <FaXTwitter className="text-white text-center hover:text-iSecondary w-5 h-5 mx-auto" />
              </TwitterShareButton>
              <WhatsappShareButton url="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf" className="text-center">
                <span className="sr-only">WhatsApp</span>
                <FaSquareWhatsapp className="text-white text-center hover:text-iSecondary w-5 h-5 mx-auto" />
              </WhatsappShareButton>
            </nav>
          </div>
        </CardHeader>
        <CardContent className="p-7">
          <h3 className="text-iBlue text-lg font-avenirBlack">
            Imara Africa Leadership Program Kisumu Visit 
          </h3>
        </CardContent>
        <CardFooter>
          <a
            href="https://ncpd.go.ke/wp-content/uploads/2021/02/Brief-56-YOUTH-BULGE-IN-KENYA-A-BLEESING-OF-A-CURSE.pdf"
            download
            className="btnBlueOutline min-w-full py-3 gap-5"
            target="_blank"
          >
            Download Report
            <FaArrowDown />
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default Report;
