import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import { MdOutlinePinDrop } from "react-icons/md";
import dynamic from "next/dynamic";
import FAQ from '@/app/components/FAQ';
import ContactForm from '@/app/components/ContactForm';

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false, // Prevents server-side rendering
});
async function page() {
   const query = `
  {
  page: page(id: "cG9zdDoyNA==") {
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
    contactUs {
      address
      mapLocation {
        center {
          lat
          lng
        }
        height
        zoom
      }
      faq {
        qandas {
          question
          answer
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
   const location = data.data.page.contactUs.mapLocation;
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-white">
        <section className="container py-12 text-center text-iSecondary">
          <MdOutlinePinDrop className="w-14 h-14 mx-auto" />
          <span className="max-w-[300px] mx-auto mt-5 inline-block font-avenirBook text-2xl">
            <h4>{data.data.page.contactUs.address}</h4>
          </span>
        </section>
      </article>
      <Map location={location}/>
      <FAQ faqs={data.data.page.contactUs.faq}/>
      <ContactForm/>
    </>
  );
}

export default page