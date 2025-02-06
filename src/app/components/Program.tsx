import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Program({programs, titles}:any) {
  return (
    <div className="bg-[#B39B47]">
      <article
        className="bg-contain bg-no-repeat bg-right-top"
        style={{ backgroundImage: "url(/images/patternbg.webp)" }}
      >
        <section className="container  py-12">
          <h3 className="font-avenirNextBold text-white text-3xl text-center">
            {titles.header.title}
          </h3>
          <div className="max-w-[400px] mx-auto text-center text-white font-avenirRoman text-base mb-[20px]" dangerouslySetInnerHTML={{__html: titles.header.subtitle}}>

          </div>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.reverse().map((program: any, i: number) => (
              <Link
                href={`/programs/program/${program.node.slug}`}
                className="min-h-[180px] bg-white rounded p-4 md:p-8 flex flex-row justify-start gap-4 shadow-md hover:shadow-iNeutral"
                key={i}
              >
                <figure className="w-[150px] h-[150px] inline-block">
                  {program.node.programfields.icon !== null && (
                    <Image
                      src={program.node.programfields.icon.node.sourceUrl}
                      alt={`Imara Africa Fellowship ${program.node.title} Icon`}
                      width={
                        program.node.programfields.icon.node.mediaDetails.width
                      }
                      height={
                        program.node.programfields.icon.node.mediaDetails.height
                      }
                      className='w-full inline-block'
                    />
                  )}
                </figure>
                <div>
                  <h4 className="text-xl font-avenirBlack text-iNeutral mb-[15px]">
                    {program.node.title}
                  </h4>
                  <div
                    className="text-base font-avenirRoman text-iNeutral lg:max-w-[90%] line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: program.node.excerpt }}
                  ></div>
                </div>
              </Link>
            ))}
          </nav>
        </section>
      </article>
    </div>
  );
}

export default Program