import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";

function HomeAbout({about}: any) {
  return (
    <article className="bg-white py-12">
      <section className="container flex flex-col sm:flex-row relative">
        {about.homeaboutimage !== null && (
          <Image
            src={about.homeaboutimage.node.sourceUrl}
            alt={`Imara Africa Fellowship ${about.homeaboutimage.node.altText}`}
            width={about.homeaboutimage.node.mediaDetails.width}
            height={about.homeaboutimage.node.mediaDetails.height}
            className="rounded-t sm:rounded w-full lg:w-3/4"
          />
        )}

        <div className="sm:absolute w-full md:w-2/3 lg:w-1/2 h-full flex justify-start place-items-end md:justify-end md:place-items-end lg:place-items-center md:right-8">
          <div className="bg-iBlue rounded-b sm:rounded w-full sm:w-3/4 md:w-full h-1/2 sm:h-3/4 md:h-[300px] lg:h-[350px] px-5 py-8 lg:p-10">
            <h3 className="font-avenirNextBold text-white text-3xl mb-5">
              {about.title}
            </h3>
            <div
              className="text-base font-avenirRoman text-white max-lg:line-clamp-3"
              dangerouslySetInnerHTML={{ __html: about.excerpt }}
            ></div>
            {about.readmore.link !== null && (
              <Link href={about.readmore.link} className="btnWhite mt-5">
                {about.readmore.linklabel}
                <IoMdArrowRoundForward />
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

export default HomeAbout