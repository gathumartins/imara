import React from 'react'
import Link from 'next/link';

function NotFound() {
  return (
    <article
      className="bg-cover h-lvh bg-center"
      style={{ backgroundImage: "url(/images/404.webp)" }}
    >
      <section className="container h-full py-12 px-4 flex justify-center place-items-center md:justify-end md:place-items-end">
        <div className="max-w-[600px] md:w-[600px] flex flex-col">
          <h1 className="text-iBlue font-avenirBlack text-5xl sm:text-9xl text-center mb-10">
            404
          </h1>
          <h2 className="text-black font-avenirNextRegular text-3xl  sm:text-6xl text-center">
            Page Not Found
          </h2>
          <p className="max-w-[600px] text-center text-xl sm:text-2xl text-black font-avenirRoman mt-6">
            we’re sorry. the page you requested could no be found Please go back
            to the home page
          </p>
          <Link href="/" className="bg-iBlue my-8 hover:bg-iSecondary text-white w-[180px] mx-auto p-3 text-center rounded text-xl font-avenirRoman">Go Home</Link>
        </div>
      </section>
    </article>
  );
}

export default NotFound 