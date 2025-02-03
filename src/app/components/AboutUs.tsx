import React from 'react'
import Image from 'next/image';

function AboutUs({content, img}:any) {
  return (
    <article className="bg-white">
      <section className="container py-12 flex flex-col lg:flex-row lg:justify-between gap-5">
        <div
          className="lg:w-2/3 [&_h3]:font-avenirBlack [&_h3]:text-3xl [&_h3]:text-iBlue [&_h3]:mb-5 [&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenir [&_p]:mb-5 myPro"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {img !== null && (
          <Image
            className="inline-block flex-grow rounded border-1 mx-auto lg:w-1/3"
            src={img.node.sourceUrl}
            alt="About Imara Africa"
            width={img.node.mediaDetails.width}
            height={img.node.mediaDetails.height}
          />
        )}
      </section>
    </article>
  );
}

export default AboutUs