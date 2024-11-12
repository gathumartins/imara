import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function Register() {
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
          <h2 className="font-avenirBlack text-3xl text-iBlue lg:w-3/4">
            Excited to Join us?, Register for our next intake
          </h2>
          <p className="font-avenirRoman text-base lg:w-3/4 text-iNeutral">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium alias provident enim eveniet consequuntur sapiente velit
            id quasi voluptate molestiae.
          </p>
          <Link href="/" className="btnBlueOutline">
            Register
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register