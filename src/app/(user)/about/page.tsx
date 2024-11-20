import AboutCore from '@/app/components/AboutCore';
import AboutTeam from '@/app/components/AboutTeam';
import AboutUs from '@/app/components/AboutUs'
import MiniBanner from '@/app/components/MiniBanner'
import Program from '@/app/components/Program'
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxMg==") {
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
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {headers: {'Content-Type': 'application/json'}}
  );
  const data = await result.json();
  const mini = data.data.page.pageBanners;
  return (
    <>
    <MiniBanner data={mini}/>
    <AboutUs/>
    <AboutCore/>
    <Program/>
    <AboutTeam/>  
    </>
  )
}

export default page