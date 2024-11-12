import HomeHero from '@/app/components/HomeHero'
import Partners from '@/app/components/Partners'
import Program from '@/app/components/Program'
import Stats from '@/app/components/Stats'
import Testimonials from '@/app/components/Testimonials'
import React from 'react'

function page() {
  return (
    <>
    <HomeHero/>
    <Stats/>
    <Program/>
    <Partners/>
    <Testimonials/>
    </>
  )
}

export default page