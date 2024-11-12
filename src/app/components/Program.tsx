import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Program() {
  return (
    <div
      className="bg-contain bg-no-repeat bg-right-top"
      style={{ backgroundImage: "url(/images/patternbg.webp)" }}
    >
      <article className="bg-[#B39B47]/90">
        <section className="container  py-12">
          <h3 className="font-avenirNextBold text-white text-3xl text-center">
            Program Components
          </h3>
          <p className="max-w-[400px] mx-auto text-center text-white font-avenirRoman text-base mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            excepturi .
          </p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/home"
              className="min-h-[180px] bg-white rounded p-4 md:p-8 flex flex-row justify-start gap-4 shadow-md hover:shadow-iNeutral"
            >
              <figure className="w-28 h-28">
                <Image
                  src="/images/icon.png"
                  alt="Imara Program Icon"
                  width={43}
                  height={45}
                />
              </figure>
              <div>
                <h4 className="text-xl font-avenirBlack text-iNeutral mb-[15px]">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-base font-avenirRoman text-iNeutral lg:max-w-[90%]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  odio quo, sunt sapiente eos laudantium mollitia ad rem quas
                  laborum?
                </p>
              </div>
            </Link>
            <Link
              href="/home"
              className="min-h-[180px] bg-white rounded p-4 md:p-8 flex flex-row justify-start gap-4 shadow-md hover:shadow-iNeutral"
            >
              <figure className="w-28 h-28">
                <Image
                  src="/images/icon.png"
                  alt="Imara Program Icon"
                  width={43}
                  height={45}
                />
              </figure>
              <div>
                <h4 className="text-xl font-avenirBlack text-iNeutral mb-[15px]">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-base font-avenirRoman text-iNeutral lg:max-w-[90%]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  odio quo, sunt sapiente eos laudantium mollitia ad rem quas
                  laborum?
                </p>
              </div>
            </Link>
            <Link
              href="/home"
              className="min-h-[180px] bg-white rounded p-4 md:p-8 flex flex-row justify-start gap-4 shadow-md hover:shadow-iNeutral"
            >
              <figure className="w-28 h-28">
                <Image
                  src="/images/icon.png"
                  alt="Imara Program Icon"
                  width={43}
                  height={45}
                />
              </figure>
              <div>
                <h4 className="text-xl font-avenirBlack text-iNeutral mb-[15px]">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-base font-avenirRoman text-iNeutral lg:max-w-[90%]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  odio quo, sunt sapiente eos laudantium mollitia ad rem quas
                  laborum?
                </p>
              </div>
            </Link>
            <Link
              href="/home"
              className="min-h-[180px] bg-white rounded p-4 md:p-8 flex flex-row justify-start gap-4 shadow-md hover:shadow-iNeutral"
            >
              <figure className="w-28 h-28">
                <Image
                  src="/images/icon.png"
                  alt="Imara Program Icon"
                  width={43}
                  height={45}
                />
              </figure>
              <div>
                <h4 className="text-xl font-avenirBlack text-iNeutral mb-[15px]">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="text-base font-avenirRoman text-iNeutral lg:max-w-[90%]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  odio quo, sunt sapiente eos laudantium mollitia ad rem quas
                  laborum?
                </p>
              </div>
            </Link>
          </nav>
        </section>
      </article>
    </div>
  );
}

export default Program