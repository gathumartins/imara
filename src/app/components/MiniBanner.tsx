import React from 'react'
import Link from 'next/link';

function MiniBanner({data}:any) {
  let bg ="/images/fellowmini.webp"
  if (data.bannerImage !== null) {
    bg = data.bannerImage.node.mediaItemUrl;
  }
    return (
      <article
        className="bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <section className="bg-[#1D4C94]/65 min-h-[200px] md:min-h-[350px] flex justify-start place-items-center">
          <div className="container py-12 ">
            <ul className="flex justify-start gap-2 mb-3 text-iSecondary font-avenirRoman text-base md:text-lg">
              <li>
                <Link href="/" className="text-white hover:text-iSecondary">
                  Home
                </Link>
              </li>
              <li className="text-white">&gt;</li>
              {data && <li>{data.pageTitle}</li>}
            </ul>
            <h1 className="font-avenirNextBold text-white text-2xl md:text-3xl">
              Imara Africa Fellowship
            </h1>
            {data && (
              <h2 className="text-iSecondary font-avenirNextBold text-xl md:text-2xl">
                {data.pageTitle}
              </h2>
            )}
          </div>
        </section>
      </article>
    );
}

export default MiniBanner