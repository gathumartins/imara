"use client"
import React, {useState} from 'react';
import axios from 'axios';


function ComingSoon() {
    const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState<{ title: string} | null>(null);

  const subscribe = async (e:any) => {
    e.preventDefault();
    setState("Loading");
    // from api route
    const res = await fetch(`/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      setErrorMsg(data.error);
      // console.log(errorMsg)
      setState("Error");
      return;
    }
    setState("Success");
    setEmail("");
  };
  return (
    <div className="bg-[url('/images/hero.webp')] bg-cover bg-center bg-no-repeat">
      <section className="bg-[#1D4C94]/55">
        <div className="container min-h-dvh flex flex-col md:flex-row justify-end md:justify-between md:items-end py-[60px] gap-5">
          <div className="bg-[#B39B47]/90 backdrop-blur-sm w-full md:w-[650px] rounded-xl px-4 xs:px-[30px] sm:px-[60px] py-[40px]">
            <h1 className="font-light text-2xl sm:text-3xl mb-2 text-white">
              Our New Website
            </h1>
            <h2 className="font-extrabold text-white text-4xl sm:text-6xl mb-8">
              Coming Soon
            </h2>
            <form action="">
              <section className="flex flex-col xs:flex-row gap-4 w-full sm:w-[380px]">
                <div className="">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your e-mail address"
                    className="rounded-lg py-2 px-6 flex-grow w-full border-1 border-iSecondary focus:outline-none focus:border-iBlue focus:ring-iBlue ring-1"
                  />
                </div>
                <input
                  type="submit"
                  value="Notify Me"
                  className="bg-[#1D4C94] text-white rounded-lg text-center p-2 cursor-pointer"
                  disabled={state === "Loading"}
                  onClick={subscribe}
                />
              </section>
              <section className="text-left h-4">
                {state === "Error" && errorMsg && (
                  <div className="text-red-500 text-md">*{errorMsg.title}</div>
                )}
                {state === "Success" && (
                  <div className="text-green-500 text-md">
                    Success. Thank You Subscribing our Newsletter
                  </div>
                )}
              </section>
            </form>
          </div>
          <div className="text-center items-center md:items-end text-white">
            &copy; {new Date().getFullYear()} Imara Fellowship. All rights
            reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon