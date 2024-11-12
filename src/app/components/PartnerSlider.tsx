'use client'
import React from "react";
import ScrollCarousel from "scroll-carousel-react";

const PartnerSlider = () => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={1} speed={1} margin={50}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <div
          key={item}
          className="bg-iBlue/20 border-1 border-iNeutral rounded h-36 w-60 flex place-items-center justify-center"
        >
          {item}
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default PartnerSlider;
