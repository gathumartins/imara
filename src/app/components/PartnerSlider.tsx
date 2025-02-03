'use client'
import react from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

const PartnerSlider = ({parts}:any) => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={1} speed={1} margin={50}>
      {parts.map((item: any, index: number) => (
        <div className="border-1 border-iNeutral bg-white rounded h-36 w-60 flex place-items-center justify-center p-3">
          <Image
            src={item.node.featuredImage.node.sourceUrl}
            width={item.node.featuredImage.node.mediaDetails.width}
            height={item.node.featuredImage.node.mediaDetails.height}
            alt={item.title}
            key={index}
          />
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default PartnerSlider;
