import React from 'react'
import Slider from './Slider';

function Testimonials({tests}:any) {
  return (
    <article className="bg-[#EEF3FC] py-12">
      <section className="container">
        <h3 className="font-avenirNextBold text-iBlue text-3xl">What our alumni have to say</h3>
        <p className='max-w-[550px] text-base font-avenirRoman text-iNeutral'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum cupiditate sapiente non, cum hic reiciendis.</p>
        <Slider tests={tests}/>
      </section>

    </article>
  );
}

export default Testimonials