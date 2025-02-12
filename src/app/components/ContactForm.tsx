"use client";
import React, { useState } from "react";
import { FaRegEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

function ContactForm() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");
      const [submitting, setSubmitting] = useState(false);
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [success, setSuccess] = useState(false);
      const [resMess, setResMess] = useState("");
      const formId = "395";
      const unitTag = "wpcf7-f395-p1-o1";

      const handleSubmit = async (event: any) => {
        event.preventDefault();
        setSubmitting(true);

          const formData = new FormData(event.target);
          formData.append("_wpcf7", formId);
          formData.append("_wpcf7_unit_tag", unitTag);

        const reqOptions = {
          method: "POST",
          body: formData,
        };
          try {
            const req = await fetch(
              `https://www.admin.imarafellowship.org/wp-json/contact-form-7/v1/contact-forms/395/feedback`,
              reqOptions
            );

            if (!req.ok) {
              throw new Error(`HTTP error! status: ${req.status}`);
            }

            const response = await req.json();
            setResMess(response.message);

            if (response.status === "mail_sent") {
              setSuccess(true);
              setShowSuccessMessage(true);
              // Reset form
              setTimeout(() => {
                setShowSuccessMessage(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setSubject("");
              }, 5000);
            } else {
              setSuccess(false);
              setResMess(
                response.message || "Failed to send message. Please try again."
              );
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            setSuccess(false);
            setResMess(
              "An error occurred while sending your message. Please try again."
            );
          } finally {
            setSubmitting(false);
          }
      };
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
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3"
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="your-name"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="your-name"
                    id="your-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Full Name"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="your-email"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Email Address
                  </label>
                  <input
                    type="your-email"
                    name="your-email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="your-phone"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="your-phone"
                    id="your-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="your-subject"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="your-subject"
                    id="your-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter Subject"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 lg:col-span-2">
                  <label
                    htmlFor="your-message"
                    className="font-avenirRoman text-base text-iNeutral"
                  >
                    Message
                  </label>
                  <textarea
                    name="your-message"
                    id="your-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={2}
                    placeholder="Enter Message"
                    className="p-2 rounded border border-white shadow focus:outline-none focus:border-iBlue focus:ring-iBlue focus:right-1 placeholder:text-iNeutral placeholder:text-sm"
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={submitting ? "Sending Message" : "Send Message"}
                  disabled={submitting}
                  className="bg-iBlue hover:bg-iSecondary px-3 text-white w-[180px] mx-auto h-[45px] flex place-items-center justify-center text-center rounded text-lg font-avenirRoman ml-0 mt-3"
                />
                {showSuccessMessage && (
                  <div
                    className={`lg:col-span-2 text-center ${
                      success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {resMess}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

export default ContactForm;
