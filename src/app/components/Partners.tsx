'use client'
import React from 'react';
import dynamic from "next/dynamic";

const PartnerCarousel = dynamic(
  () => import("./PartnerSlider"),
  { ssr: false }
);

function  Partners({partners}:any) {
  // console.log(partners)
  return (
    <article className="bg-white">
      <section className="container py-12">
        <h3 className="font-avenirNextBold text-iBlue text-3xl text-center mb-[30px]">
          Our Partners
        </h3>
       <PartnerCarousel parts={partners}/>
      </section>
    </article>
  );
}

export default Partners