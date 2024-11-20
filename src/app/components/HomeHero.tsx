import React from 'react'
import Link from 'next/link';

function HomeHero() {
  return (
    <article
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(/images/homehero.webp)` }}
    >
      <section className="bg-[#1D4C94]/55 h-lvh flex flex-col justify-center">
        <div className="container flex flex-col  gap-4">
          <h1 className="text-white font-avenirNextBold capitalize text-3xl xs:text-4xl leading-relaxed md:text-6xl max-w-[400px] md:max-w-[650px] md:leading-snug">
            Building a Community of Young Africa Policy Makers
          </h1>
          <Link href="/contacts" className="bg-iSecondary p-3 font-avenirBlack text-white text-center w-[180px] rounded border-1 border-iSecondary hover:bg-transparent">
            Get In Touch
          </Link>
        </div>
      </section>
    </article>
  );
}

export default HomeHero