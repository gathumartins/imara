import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Fellow from '@/app/components/Fellow';
import MyPagination from '@/app/components/MyPagination';

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
    const itemsPerPage = 12;
    const fellows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const comp = "fellow";
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC] py-12">
        <header className="container flex flex-col sm:flex-row justify-between gap-5 mb-10">
          <h3 className="font-avenirBlack text-3xl text-iBlue">
            Cohort One- 2019
          </h3>
          <form action="" className='max-sm:w-full '>
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
        <MyPagination items={fellows} ipp={itemsPerPage} comp={comp}/>
      </article>
    </>
  );
}

export default page