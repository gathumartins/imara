import CohortCard from '@/app/components/CohortCard';
import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxNg==") {
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
      <article className="bg-[#EEF3FC] py-12">
        <section className="container [&_p]:max-w-[842px] [&_p]:mx-auto [&_p]:text-base [&_p]:text-iNeutral text-center [&_p]:font-avenirRoman">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            aperiam officiis cumque! Doloremque a nisi explicabo veniam dolorum
            nobis culpa natus dicta quia! Vitae ad ex illum debitis expedita
            soluta sequi nostrum amet itaque voluptates reiciendis eius,
            consequuntur corporis! Incidunt, vitae dolor. Sunt fuga amet officia
            minus sit sint. Laudantium?
          </p>
        </section>
        <section className="container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CohortCard />
          <CohortCard />
          <CohortCard />
        </section>
      </article>
    </>
  );
}

export default page