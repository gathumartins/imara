import React from 'react'
import { FaRegEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';



function ContactForm() {
  return (
    <article
      className="py-12 bg-[#EEF3FC] bg-cover bg-no-repeat bg-right-top"
      style={{ backgroundImage: "url(/images/whitebg.png)" }}
    >
      <section className="container pt-12">
        <header>
          <h3 className="font-avenirBlack text-3xl text-iSecondary max-w-[400px] mx-auto text-center">
            Still Have a Question?
          </h3>
          <p className="text-base text-iNeutral font-avenirRoman max-w-[500px] mx-auto text-center">
            If you cant find an answer to your question in our FAQ. Contact Us
            we will write back to you.
          </p>
        </header>
        <section className="container pb-12">
          <header className="max-w-[1000px] border-b-1 border-b-iNeutral/90 mb-8">
            <h4 className="font-avenirBlack text-2xl text-iBlue mb-2">
              Having Unanswered Questions?
            </h4>
            <h5 className="font-avenirBlack text-2xl text-iBlue mb-2">
              Reach To Us.
            </h5>
          </header>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="bg-iSecondary rounded p-4 py-8 flex place-items-center w-full md:w-1/2 lg:w-1/3 ">
              <div className="w-[263px] mx-auto flex flex-col gap-5">
                <div className="flex flex-row gap-5 place-items-center">
                  <div className="w-12 h-12 rounded border-1 border-iBlue p-3 flex justify-center place-items-center text-white">
                    <FaRegEnvelope className="w-[21px] h-[21px]" />
                  </div>
                  <div className="flex-grow">
                    <h6 className="text-iBlue font-avenirRoman text-base">
                      Email
                    </h6>
                    <ul className="text-white text-sm font-avenirRoman">
                      <li>
                        <Link href="mailto:info@imarafellowship.org">
                          info@imarafellowship.org
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:fellow@imarafellowship.org">
                          fellow@imarafellowship.org
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="w-12 h-12 rounded border-1 border-iBlue p-3 flex justify-center place-items-center text-white">
                    <FaPhone className="w-[21px] h-[21px]" />
                  </div>
                  <div className="flex-grow">
                    <h6 className="text-iBlue font-avenirRoman text-base">
                      Phone
                    </h6>
                    <ul className="text-white text-sm font-avenirRoman">
                      <li>
                        <Link href="tel:+254700000000">+254 700 000 000</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row gap-5 place-items-center">
                  <div className="w-12 h-12 rounded border-1 border-iBlue p-3 flex justify-center place-items-center text-white">
                    <FaLocationDot className="w-[21px] h-[21px]" />
                  </div>
                  <div className="flex-grow">
                    <h6 className="text-iBlue font-avenirRoman text-base">
                      Location
                    </h6>
                    <ul className="text-white text-sm font-avenirRoman">
                      <li>General Mathenge Road, Westlands. 1st Floor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3">
              <form
                action=""
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3"
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="fullName"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter Full Name"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 lg:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={2}
                    placeholder="Enter Message"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-iBlue hover:bg-iSecondary px-3 text-white w-[180px] mx-auto h-[45px] flex place-items-center justify-center text-center rounded text-lg font-avenirRoman ml-0 mt-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

export default ContactForm