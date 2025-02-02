import React from 'react'
import Image from "next/image";
import Link from "next/link";

function ImpactNav() {
  return (
    <header className="container">
      <nav className="w-full relative">
        <div className="w-[90%] ml-[5%] h-[2px] bg-iBlue absolute top-1/2 hidden md:block"></div>
        <ul className="flex gap-3 md:gap-5 justify-around ">
          <li>
            <Link href="#capacity" className="flex flex-col gap-3 items-center">
              <Image
                src="/images/capacity.svg"
                alt="Imara Impact page capacity icon"
                width={110}
                height={110}
                className="h-14 w-14 inline-block"
              />
              <Image
                src="/images/timeline.svg"
                alt="Imara Impact page capacity icon"
                width={15}
                height={88}
                className="hidden md:inline-block h-14"
              />
              <span className="max-w-[300px] max-md:sr-only text-iBlue font-avenirNextBold text-xl">
                Capacity Building
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#partnership"
              className="flex flex-col gap-3 items-center"
            >
              <Image
                src="/images/partnership.svg"
                alt="Imara Impact page capacity icon"
                width={110}
                height={110}
                className="h-14 w-14 inline-block"
              />
              <Image
                src="/images/timeline.svg"
                alt="Imara Impact page capacity icon"
                width={15}
                height={88}
                className="hidden md:inline-block h-14"
              />
              <span className="max-w-[300px] max-md:sr-only text-iBlue font-avenirNextBold text-xl">
                Partnerships
              </span>
            </Link>
          </li>
          <li>
            <Link href="#policy" className="flex flex-col items-center gap-3">
              <Image
                src="/images/policy.svg"
                alt="Imara Impact page capacity icon"
                width={110}
                height={110}
                className="h-14 w-14 inline-block"
              />
              <Image
                src="/images/timeline.svg"
                alt="Imara Impact page capacity icon"
                width={15}
                height={88}
                className="hidden md:inline-block h-14"
              />
              <span className="max-w-[300px] max-md:sr-only text-iBlue font-avenirNextBold text-xl">
                Developing Policy <br /> Recommendations
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ImpactNav