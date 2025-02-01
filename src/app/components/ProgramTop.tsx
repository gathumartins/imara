import React from 'react'
import Image from 'next/image'

function ProgramTop() {
  return (
    <section className="py-12 bg-white">
      <div className="container pt-8 flex flex-col-reverse lg:flex-row gap-5 ">
        <figure className="lg:w-1/2">
          <Image
            src="/images/pro.png"
            width={564}
            height={371}
            alt="Program Overview"
            className="w-full rounded-lg"
          />
        </figure>
        <div className="myPro lg:w-1/2">
          <h3>Our Program </h3>
          <p>
            Our 12-month program offers an immersive experience designed to mold
            committed young Africans into effective policy leaders. Through a
            blend of residential learning sessions, online modules, and
            practical leadership experiences, participants are guided on a
            journey of self-discovery and professional growth. Each component is
            crafted to build critical skills, foster a deep understanding of
            governance, and nurture a sense of responsibility toward community
            and public service. From intensive workshops and mentorship to
            real-world projects and collaborative initiatives, fellows gain the
            tools and insights needed to shape the future of Africa's public
            sector with integrity and vision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProgramTop