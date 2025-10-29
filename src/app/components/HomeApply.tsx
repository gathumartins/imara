import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

function HomeApply({ apply }: any) {
  return (
    <article className="bg-white min-h-[800px] py-12 flex items-center">
      <section className="container flex flex-col-reverse sm:flex-row-reverse relative my-9">
        {apply.homeapplymage !== null && (
          <Image
            src={apply.homeapplymage.node.sourceUrl}
            alt={`Imara Africa Fellowship ${apply.homeapplymage.node.altText}`}
            width={apply.homeapplymage.node.mediaDetails.width}
            height={apply.homeapplymage.node.mediaDetails.height}
            className="rounded-t sm:rounded w-full lg:w-3/4"
          />
        )}

        <div className="sm:absolute w-full md:w-2/3 h-full lg:w-1/2 flex justify-start place-items-end md:justify-end md:place-items-center md:left-8">
          <div className="bg-iBlue rounded-b sm:rounded w-full sm:w-3/4 md:w-full px-5 py-8 lg:p-10 [&_h4]:text-lg [&_ol]:inline-block [&_ol]:ml-6 [&_h4]:my-2 [&_li]:list-decimal [&_h4]:font-avenirNextBold">
            <h3 className="font-avenirNextBold text-white text-3xl mb-5">
              {apply.title}
            </h3>
            <div
              className="text-base font-avenirRoman text-white"
              dangerouslySetInnerHTML={{ __html: apply.excerpt }}
            ></div>
            {apply.readmore.link !== null && (
              <Link
                href={apply.readmore.link}
                className="btnWhite mt-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                {apply.readmore.linklabel}
                <IoMdArrowRoundForward />
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

export default HomeApply;
