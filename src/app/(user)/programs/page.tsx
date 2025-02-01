import MiniBanner from '@/app/components/MiniBanner'
import Partners from '@/app/components/Partners';
import PartnerSlider from '@/app/components/PartnerSlider';
import Program from '@/app/components/Program';
import ProgramTop from '@/app/components/ProgramTop';
import Testimonials from '@/app/components/Testimonials';
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxNA==") {
    id
    title
    uri
    slug
    link
    pageBanners {
      pageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
  `;

    const result = await fetch(
      `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
      { headers: { "Content-Type": "application/json" } }
    );
    const data = await result.json();
    const mini = data.data.page.pageBanners;
  return (
    <>
    <MiniBanner data={mini}/>
    <ProgramTop/>
    <Program/>
    <Testimonials/>
    <Partners/>
    </>
  )
}

export default page