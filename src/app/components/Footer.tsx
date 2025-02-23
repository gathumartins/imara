"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Register from "./Register";

function Footer({ progs, quicks, orgs, lay }: any) {
      const [email, setEmail] = useState("");
      const [state, setState] = useState("idle");
      const [errorMsg, setErrorMsg] = useState<{ title: string } | null>(null);

      const subscribe = async (e: any) => {
        e.preventDefault();
        setState("Loading");
        const res = await fetch(`/api/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.error) {
          setErrorMsg(data.error);
          setState("Error");
          return;
        }
        setState("Success");
        setEmail("");
      };
  return (
    <footer>
      <article>
        <Register lay={lay} />
        <section className="bg-iBlue pt-8 pb-6">
          <div className="container">
            <div className="footer-top mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
              <nav className="w-[1/3]">
                <h2 className="text-iSecondary text-lg mb-4 font-avenirNextBold">
                  Programs
                </h2>
                <ul>
                  {progs.map((prog: any) => (
                    <li
                      key={prog.node.id}
                      className="mb-3 text-white hover:text-iSecondary text-base font-avenirRoman"
                    >
                      <Link href={`/programs/${prog.node.uri}`}>
                        {prog.node.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav className="">
                <h2 className="text-iSecondary text-lg mb-4 font-avenirNextBold">
                  Imara Organization
                </h2>
                <ul>
                  {orgs.map((org: any) => (
                    <li
                      key={org.node.id}
                      className="mb-3 text-white hover:text-iSecondary text-base font-avenirRoman"
                    >
                      <Link href={org.node.uri}>{org.node.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav>
                <h2 className="text-iSecondary text-lg mb-4 font-avenirNextBold">
                  Quick Links
                </h2>
                <ul>
                  {quicks.map((quick: any) => (
                    <li
                      key={quick.node.id}
                      className="mb-3 text-white hover:text-iSecondary text-base font-avenirRoman"
                    >
                      <Link href={quick.node.uri}>{quick.node.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="w-full mx-auto md:ml-0 lg:mr-0 rounded bg-white/25 py-5 px-4 sm:max-w-[300px]">
                <form
                  action=""
                  className="w-full flex flex-col justify-center place-items-center gap-2 h-full"
                >
                  <Image
                    src="/images/envelope.png"
                    alt="Imara fellowship subscribe newsletter form envelope icon"
                    width="48"
                    height="48"
                    className="inline-block h-10 w-10"
                  />
                  <h2 className="text-base text-white font-avenirRoman">
                    Subscribe to our newsletter
                  </h2>
                  <section className="flex max-md:mx-4 flex-row bg-white p-1 rounded-md">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="rounded-l-md p-2 focus:outline-none border-white focus:ring-1 focus:ring-iSecondary focus:shadow-none focus:border-iBlue flex-1 placeholder:text-sm placeholder:text-iNeutral text-black"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-iSecondary rounded-r-md border-iSecondary border ring-1 text-center px-2 ring-iSecondary cursor-pointer text-3xl text-white w-10 flex justify-center place-items-center"
                      disabled={state === "Loading"}
                      onClick={subscribe}
                    >
                      <span className="sr-only">Subscribe</span>
                      {state === "Loading" ? (
                        <AiOutlineLoading3Quarters/>
                      ) : (
                        <IoIosSend/>
                      )}
                    </button>
                  </section>
                  <section className="text-left h-4">
                    {state === "Error" && errorMsg && (
                      <div className="text-red-500 text-md">
                        *{errorMsg.title}
                      </div>
                    )}
                    {state === "Success" && (

                      <div className="text-green-500 text-xs text-center">
                        Success. Thank You Subscribing our Newsletter
                      </div>
                    )}
                  </section>
                </form>
              </div>
            </div>
            <div className="footer-btm border-t-1 border-iGray flex flex-col md:flex-row justify-between pt-8">
              <ul className="flex flex-row max-w-[300px] mx-auto mb-4 md:ml-0 gap-8 justify-between [&_li]:w-[24px] [&_li]:h-[24px] [&_li]:border-1 [&_li]:border-white [&_li]:rounded-md">
                <li className="flex justify-center place-items-center text-white hover:text-iSecondary">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/imaraAfr"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="flex justify-center place-items-center text-white hover:text-iSecondary">
                  <Link target="_blank" href="https://x.com/Imara_Africa">
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="flex justify-center place-items-center text-white hover:text-iSecondary">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/imarafellowship/"
                  >
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
              <p className="text-white font-avenirRoman text-[14px] md:text-base text-center md:text-right">
                Copyright &copy; {new Date().getFullYear()} Imara Fellowship |
                All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
