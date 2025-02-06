import React from 'react'
import Slider from './Slider';

function Testimonials({tests, titles}:any) {
  return (
    <article className="bg-[#EEF3FC] py-12">
      <section className="container">
        <h3 className="font-avenirNextBold text-iBlue text-3xl">
          {titles.title}
        </h3>
        <div
          className="max-w-[550px] text-base font-avenirRoman text-iNeutral"
          dangerouslySetInnerHTML={{ __html: titles.subtitle }}
        ></div>
        <Slider tests={tests} />
      </section>
    </article>
  );
}

export default Testimonials