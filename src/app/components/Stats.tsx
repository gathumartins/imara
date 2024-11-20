"use client";
import React from "react";
import CountUp from "react-countup";
import { PiChartBarThin } from "react-icons/pi";


function Stats() {
  return (
    <article className="bg-[#EEF3FC] px-5 py-12">
      <section className="bg-white container rounded py-12 px-[30px] md:px-[50px] lg:px-[80px] flex flex-col md:flex-row justify-between gap-8 place-items-center">
        <div className="md:w-1/2">
          <PiChartBarThin className="text-iSecondary w-12 h-12 font-bold"/>
          <h3 className="max-w-[400px] font-avenirNextBold text-iBlue text-3xl">
            Numbers that showcase our success
          </h3>
          <p className="max-w-[400px] text-base font-avenirRoman text-iNeutral">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            cupiditate sapiente non, cum hic reiciendis.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid sm:grid-cols-2 gap-5">
          <div className="rounded hover:bg-iSecondary sm:first:mt-10 bg-white border-1 sm:last:-mt-10 border-iSecondary h-[180px] [&_h4]:hover:text-white p-[20px] text-center [&_h5]:hover:text-white [&_p]:hover:text-white flex flex-col place-items-center">
            <div className="">
              <h4 className="text-iNeutral font-avenirBlack text-3xl">
                <CountUp
                  start={0}
                  end={2000}
                  duration={2.5}
                  delay={0.5}
                  separator=","
                  suffix="+"
                  enableScrollSpy
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h4>
              <h5 className="text-xl font-avenirBlack text-iSecondary">
                Lorem, ipsum dolor.
              </h5>
              <p className="font-avenirRoman text-base text-iNeutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          {/* one  */}
          <div className="rounded hover:bg-iSecondary sm:first:mt-10 bg-white border-1 sm:last:-mt-10 border-iSecondary h-[180px] [&_h4]:hover:text-white p-[20px] text-center [&_h5]:hover:text-white [&_p]:hover:text-white flex flex-col place-items-center">
            <div className="">
              <h4 className="text-iNeutral font-avenirBlack text-3xl">
                <CountUp
                  start={0}
                  end={99}
                  duration={2.5}
                  delay={3.0}
                  separator=","
                  suffix="%"
                  enableScrollSpy
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h4>
              <h5 className="text-xl font-avenirBlack text-iSecondary">
                Lorem, ipsum dolor.
              </h5>
              <p className="font-avenirRoman text-base text-iNeutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          {/* one  */}
          <div className="rounded hover:bg-iSecondary sm:first:mt-10 bg-white border-1 sm:last:-mt-10 border-iSecondary h-[180px] [&_h4]:hover:text-white p-[20px] text-center [&_h5]:hover:text-white [&_p]:hover:text-white flex flex-col place-items-center">
            <div className="">
              <h4 className="text-iNeutral font-avenirBlack text-3xl">
                <CountUp
                  start={0}
                  end={10}
                  duration={2.5}
                  delay={3.5}
                  separator=","
                  suffix="+"
                  enableScrollSpy
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h4>
              <h5 className="text-xl font-avenirBlack text-iSecondary">
                Lorem, ipsum dolor.
              </h5>
              <p className="font-avenirRoman text-base text-iNeutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          {/* one  */}
          <div className="rounded hover:bg-iSecondary sm:first:mt-10 bg-white border-1 sm:last:-mt-10 border-iSecondary h-[180px] [&_h4]:hover:text-white p-[20px] text-center [&_h5]:hover:text-white [&_p]:hover:text-white flex flex-col place-items-center">
            <div className="">
              <h4 className="text-iNeutral font-avenirBlack text-3xl">
                <CountUp
                  start={0}
                  end={20}
                  duration={2.5}
                  delay={4.0}
                  separator=","
                  suffix="+"
                  enableScrollSpy
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h4>
              <h5 className="text-xl font-avenirBlack text-iSecondary">
                Lorem, ipsum dolor.
              </h5>
              <p className="font-avenirRoman text-base text-iNeutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          {/* one  */}
        </div>
      </section>
    </article>
  );
}

export default Stats;
