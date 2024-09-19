import React from 'react'

function ComingSoon() {
  return (
    <div className="bg-[url('/images/hero.webp')] bg-cover bg-center bg-no-repeat">
        <section className="bg-[#1D4C94]/55">
            <div className="container h-lvh flex flex-col md:flex-row justify-end md:justify-between md:items-end py-[60px] gap-5">
                <div className="bg-[#B39B47]/90 backdrop-blur-sm w-full md:w-[650px] rounded-xl px-[60px] py-[40px]">
                    <h1 className="font-light text-2xl sm:text-3xl mb-2">Our New Website</h1>
                    <h2 className="font-extrabold text-white text-4xl sm:text-6xl mb-8">Coming Soon</h2>
                    <form action="" className="flex gap-4 w-full sm:w-[380px]">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" name="email" id="email"  placeholder="Enter your e-mail address" className="rounded-lg py-2 px-6 flex-grow"/>
                      <input type="submit" value="Notify Me" className="bg-[#1D4C94] rounded-lg text-center p-3 animate-pulse cursor-pointer"/>
                    </form>
                </div>
                <div className="text-center items-center md:items-end">&copy; {(new Date().getFullYear())} Imara Fellowship. All rights reserved.</div>
            </div>
        </section>
    </div>
  )
}

export default ComingSoon