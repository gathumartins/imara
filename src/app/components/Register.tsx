import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function Register({lay}:any) {
  return (
    <section className="bg-white">
      <div className="container py-12 flex flex-col-reverse md:flex-row justify-between gap-10 place-items-center">
        <Image
          src="/images/registerimg.webp"
          alt="Imara Fellowship resister section image"
          width={542}
          height={280}
          className="inline-block rounded flex-grow"
        />
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