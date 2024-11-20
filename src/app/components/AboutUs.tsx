import React from 'react'
import Image from 'next/image';

function AboutUs() {
  return (
    <article className="bg-white">
      <section className="container py-12 flex flex-col lg:flex-row lg:justify-between gap-5">
        <div className="lg:w-2/3 [&_h3]:font-avenirBlack [&_h3]:text-3xl [&_h3]:text-iBlue [&_h3]:mb-5 [&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenir [&_p]:mb-5">
          <h3>About Imara Africa</h3>
          <p>
            Imara Africa is a leadership development program collaboratively
            convened by Siasa Place, Africa Youth Leadership Forum (AYLF), Mark
            Appeal Group.
          </p>
          <p>
            The three entities are respectively a CSOs, (SP) focused on advocacy
            through education and capacity building, targeted program
            implementation, a leadership Trust (AYLF), working in the broader
            East Africa region with a focus on developing skills and values
            amongst young leaders and a Social Consultancy (MA), with a distinct
            model that designs high impact programs and leverages assets,
            talents, and in-kind services through strategic alliances and
            creative collaboration.
          </p>
        </div>
        <Image
          className="inline-block flex-grow rounded border-1 mx-auto"
          src="/images/aboutfeatured.webp"
          alt="About Imara Africa"
          width={588}
          height={476}
        />
      </section>
    </article>
  );
}

export default AboutUs