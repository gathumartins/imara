import React from 'react'
import Image from 'next/image'

function ProgramTop({cont, feat}:any) {
  return (
    <section className="py-12 bg-white">
      <div className="container pt-8 flex flex-col-reverse lg:flex-row gap-5 ">
        <figure className="lg:w-1/2">
          {feat !== null && (
            <Image
              src={feat.node.sourceUrl}
              width={feat.node.mediaDetails.width}
              height={feat.node.mediaDetails.height}
              alt={`Imara Fellowship Africa ${feat.node.altText}`}
              className="w-full rounded-lg"
            />
          )}
        </figure>
        <div
          className="myPro lg:w-1/2 myPro"
          dangerouslySetInnerHTML={{ __html: cont }}
        ></div>
      </div>
    </section>
  );
}

export default ProgramTop