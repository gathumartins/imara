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
    content
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
        <section
          className="py-12 px-4 max-w-[1000px] mx-auto [&_h1]:text-iBlue [&_ul]:ml-10 [&_ol]:ml-10 [&_ul>li]:list-disc [&_ol>li]:list-decimal [&_b]:font-bold [&_strong]:font-bold [&_li]:text-base [&_p]:text-base [&_p]:text-iNeutral [&_li]:text-iNeutral [&_h3]:text-iBlue"
          dangerouslySetInnerHTML={{ __html: data.data.page.content }}
        ></section>
      </article>
    </>
  );
}

export default page