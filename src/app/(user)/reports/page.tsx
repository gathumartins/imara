import MiniBanner from '@/app/components/MiniBanner';
import MyPagination from '@/app/components/MyPagination';
import React from 'react';
import Report from '@/app/components/Report';

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoyMA==") {
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
    let reports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const itemsPerPage = 6;
    const comp = "report"
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC] py-12">
        <section
          className="container text-center [&_p]:max-w-[850px] [&_p]:mx-auto [&_p]:text-iNeutral [&_p]:text-base [&-p]:font-avenirRoman mb-10"
          dangerouslySetInnerHTML={{ __html: data.data.page.content }}
        ></section>
        <MyPagination items={reports} ipp={itemsPerPage} comp={comp}/>
      </article>
    </>
  );
}

export default page