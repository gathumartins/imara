import FeaturedPost from '@/app/components/FeaturedPost';
import MiniBanner from '@/app/components/MiniBanner'
import MyPagination from '@/app/components/MyPagination';
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoyMg==") {
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
    const itemsPerPage = 6;
    const fellows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const comp = "blog";
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC] py-12">
        <section className="container mb-12">
          <header className="mb-8 pb-3 border-b-1">
            <h3 className="font-avenirNextBold text-iBlue text-3xl">
              Featured Article
            </h3>
          </header>
          <FeaturedPost />
        </section>
        <section className="container">
          <header className="mb-8 pb-3 border-b-1 border-iGray">
            <h3 className="font-avenirNextBold text-iBlue text-3xl">
              Latest Articles
            </h3>
          </header>
        </section>
        <MyPagination items={fellows} ipp={itemsPerPage} comp={comp} />
      </article>
    </>
  );
}

export default page