import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";

function HomeAbout() {
  return (
    <article className="bg-white py-12">
      <section className="container flex flex-col sm:flex-row relative">
        <Image
          src="/images/abouthome.webp"
          alt="Imare home about section Image"
          width={860}
          height={489}
          className="rounded-t sm:rounded w-full lg:w-3/4"
        />
        <div className="sm:absolute w-full md:w-2/3 lg:w-1/2 h-full flex justify-start place-items-end md:justify-end md:place-items-end lg:place-items-center md:right-8">
          <div className="bg-iBlue rounded-b sm:rounded w-full sm:w-3/4 md:w-full h-1/2 sm:h-3/4 md:h-[300px] lg:h-[350px] px-5 py-8 lg:p-10">
            <h3 className="font-avenirNextBold text-white text-3xl mb-5">
              About Imara Fellowship Africa
            </h3>
            <p className="text-base font-avenirRoman text-white max-lg:line-clamp-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              dolore odio autem unde sunt dolorem laborum sit fugit ea maxime
              aperiam, facere expedita ab iusto nulla eligendi quaerat magnam
              debitis numquam laboriosam temporibus, ut tenetur, iure tempore?
              Cumque vel, vitae repudiandae harum iste eveniet eaque quis
              asperiores vero nulla esse?
            </p>
            <Link href="/about" className="btnWhite mt-5">
              Learn More
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default HomeAbout