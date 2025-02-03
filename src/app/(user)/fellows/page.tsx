import CohortCard from '@/app/components/CohortCard';
import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxNg==") {
    id
    title
    content
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
  cohorts:cohorts {
    edges {
      node {
        name
        description
        slug
        id
        fellowCohort {
          cohortImage {
            node {
              mediaDetails {
                width
                height
              }
              mediaItemUrl
            }
          }
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
    const cohorts = data.data.cohorts.edges;
    return (
      <>
        <MiniBanner data={mini} />
        <article className="bg-[#EEF3FC] py-12">
          <section
            className="container [&_p]:max-w-[842px] [&_p]:mx-auto [&_p]:text-base [&_p]:text-iNeutral text-center [&_p]:font-avenirRoman"
            dangerouslySetInnerHTML={{ __html: data.data.page.content }}
          ></section>
          <section className="container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cohorts.map((mycohort: any) => (
              <CohortCard key={mycohort.node.id} data={mycohort} />
            ))}
          </section>
        </article>
      </>
    );
}

export default page