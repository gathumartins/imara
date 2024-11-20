import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoyNw==") {
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
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC]">
        <section className="py-12 max-w-[1200px] mx-auto">
          <h1>Terms and Conditions</h1>
        </section>
      </article>
    </>
  );
}

export default page