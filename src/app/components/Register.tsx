import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function Register({lay}:any) {
  console.log(lay.register.registerImage);
  return (
    <section className="bg-white">
      <div className="container py-12 flex flex-col-reverse md:flex-row justify-between gap-10 place-items-center">
        {lay.register.registerImage !== null && (
          <Image
            src={lay.register.registerImage.node.sourceUrl}
            alt={`Imara Fellowship Africa Resgister Section Image`}
            width={lay.register.registerImage.node.mediaDetails.width}
            height={lay.register.registerImage.node.mediaDetails.height}
            className="inline-block rounded flex-grow md:w-1/2"
          />
        )}
        <div className="flex flex-col justify-start md:w-1/2 gap-4">
          <h3 className="font-avenirBlack text-3xl text-iBlue lg:w-3/4">
            {lay.register.registerTitle}
          </h3>
          <div
            className="font-avenirRoman text-base lg:w-3/4 text-iNeutral"
            dangerouslySetInnerHTML={{
              __html: lay.register.registerDescription,
            }}
          ></div>
          {lay.register.buttonLink.url !== null && (
            <Link href={lay.register.buttonLink.url} className="btnBlueOutline">
              {lay.register.buttonLink.title}
              <IoMdArrowRoundForward />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Register