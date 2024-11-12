import React from 'react'
import Link from 'next/link';

function MiniBanner() {
  return (
    <article
      className="bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/images/aboutmini.webp)" }}
    >
      <section className="bg-[#1D4C94]/65 min-h-[350px] flex justify-start place-items-center">
        <div className="container py-12 ">
          <ul className="flex justify-start gap-4 mb-3 text-white [&_a]:hover:text-iSecondary font-avenirRoman text-lg">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>&gt;</li>
            <li>About US</li>
          </ul>
          <h1 className="font-avenirNextBold text-white text-3xl">
            Imara Africa Fellowship
          </h1>
          <h2 className="text-iSecondary font-avenirNextBold text-2xl">
            About US
          </h2>
        </div>
      </section>
    </article>
  );
}

export default MiniBanner