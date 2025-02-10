import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Fellow from '@/app/components/Fellow';
import MyPagination from '@/app/components/MyPagination';

async function page({params}:any) {
  const slug = params.cohortId;
  const query = `
    query NewQuery($slug:ID!){
    cohort(id: $slug, idType: SLUG) {
    id
    slug
    name
    fellows(first:1000) {
      edges {
        node {
          title
          featuredImage {
            node {
              altText
              mediaDetails {
                height
                width
              }
              sourceUrl
            }
          }
        }
      }
    }
    fellowCohort {
      pageBanners {
        bannerImage {
          node {
            mediaItemUrl
          }
        }
        pageTitle
      }
    }
  }
}
`;
  const variables = {
    slug
  };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  const mini = data.data.cohort.fellowCohort.pageBanners;
  const itemsPerPage = 12;
  const fellows = data.data.cohort.fellows.edges;
  const comp = "fellow";
  console.log(fellows.length)
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC] py-12">
        <header className="container flex flex-col sm:flex-row justify-between gap-5 mb-10">
          <h3 className="font-avenirBlack text-3xl text-iBlue">
            {data.data.cohort.name}
          </h3>
          <form action="" className="max-sm:w-full ">
            <div>
              <label htmlFor="search" className="sr-only">
                Search Form
              </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Alumni"
                className="rounded shadow-md px-4 py-2 focus:outline-none border-1 focus:border-iBlue placeholder:text-black placeholder:text-sm font-avenirRoman placeholder:font-avenirRoman bg-white w-full"
              />
            </div>
          </form>
        </header>
        <MyPagination
          items={fellows}
          ipp={itemsPerPage}
          comp={comp}
          cTitle={data.data.cohort.name}
        />
      </article>
    </>
  );
}

export default page