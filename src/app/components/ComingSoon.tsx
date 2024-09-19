"use client"
import React, {useState} from 'react';
import axios from 'axios';


function ComingSoon() {
    const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

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
            <div className="container h-lvh flex flex-col md:flex-row justify-end md:justify-between md:items-end py-[60px] gap-5">
                <div className="bg-[#B39B47]/90 backdrop-blur-sm w-full md:w-[650px] rounded-xl px-[60px] py-[40px]">
                    <h1 className="font-light text-2xl sm:text-3xl mb-2">Our New Website</h1>
                    <h2 className="font-extrabold text-white text-4xl sm:text-6xl mb-8">Coming Soon</h2>
                    <form action="" className="flex gap-4 w-full sm:w-[380px]">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your e-mail address" className="rounded-lg py-2 px-6 flex-grow"/>
                      <input type="submit" value="Notify Me" className="bg-[#1D4C94] rounded-lg text-center p-3 cursor-pointer" disabled={state === "Loading"} onClick={subscribe}/>
                    </form>
                    
                </div>
                <div className="text-center items-center md:items-end">&copy; {(new Date().getFullYear())} Imara Fellowship. All rights reserved.</div>
            </div>
        </section>
    </div>
  )
}

export default ComingSoon