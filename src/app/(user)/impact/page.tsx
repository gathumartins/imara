import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Image from 'next/image'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxOA==") {
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
      <article className="relative">
        <section className="bg-white py-12 sticky top-[70px] left-0 w-full z-10 border-t-1">
          <header className="container"></header>
        </section>

        <section className="bg-[#EEF3FC] py-12 md:py-20" id="capacity">
          <header className="container mb-8">
            <ol className="list-decimal list-inside font-avenirNextBold text-iBlue text-3xl mb-5">
              <li>Capacity Building</li>
            </ol>
            <div className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman">
              <p>
                The project continues to register progress in building the
                capacity of the youth in two levels. Level one being the Imara
                Fellows who were recruited to be trained in policy making
                process in partnership with the county government in various
                fields of their interest and careers and level two being
                capacity improvement among the community youth who were the
                local partners during the implementation.
              </p>
            </div>
          </header>
          <footer className="container"></footer>
        </section>

        <section className="bg-white py-12 md:py-20" id="partnership">
          <header className="container mb-8">
            <ol
              className="list-decimal list-inside font-avenirNextBold text-iBlue text-3xl mb-5"
              start={2}
            >
              <li>Partnership</li>
            </ol>
            <div className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman">
              <p>
                The implementation of this work has seen the project establish a
                firm partnership with the County Governments of Kisumu, Busia
                and other local partners including Jiwo Paro, Kondele Social
                Justice Centre & TEAM-Transform Empowerment for Action
                initiative, (Kisumu), Busia Youth Steering Committee (Busia),
                and Kericho Youth Network.
              </p>
            </div>
          </header>
          <footer className="container">
            <figure className="shadow-md rounded-lg md:flex bg-[#EEF3FC] items-center place-items-center gap-5">
              <Image
                src="/images/policy.png"
                width={761}
                height={630}
                alt="policy Image"
                className="inline-block md:max-w-[450px]"
              />
              <figcaption className="p-6 flex-grow font-avenirRoman text-iNeutral text-base">
                The project was also able to develop partnerships with different
                Youth Serving Organizations. For instance PAWA 254 and WOSWA
                collaboratively hosted the leadership cafes and the First Youth
                Baraza respectively in addition to mobilization of the youth and
                key stakeholders during these activities.
              </figcaption>
            </figure>
          </footer>
        </section>

        <section className="bg-[#EEF3FC] py-12 md:py-20" id="policy">
          <header className="container mb-8">
            <ol
              className="list-decimal list-inside font-avenirNextBold text-iBlue text-3xl mb-5"
              start={3}
            >
              <li>Developing Policy Recommendations</li>
            </ol>
            <div className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman">
              <p>
                The project addressed key county policy issues and co-created
                actionable solutions. In Kericho, a report led to
                recommendations for hiring more instructors in Technical
                Vocational and Educational Training Centers. In Kisumu,
                engagements identified youth income sources like betting and
                adult content creation, resulting in recommendations for
                entrepreneurial training, now implemented by Jiwo Paro. These
                efforts established a baseline for policy formulation.
              </p>
            </div>
          </header>
          <footer className="container">
            <figure className="shadow-md rounded-lg md:flex flex-row-reverse bg-white items-center place-items-center gap-5">
              <Image
                src="/images/policy.png"
                width={761}
                height={630}
                alt="policy Image"
                className="inline-block md:max-w-[450px]"
              />
              <figcaption className="flex-grow p-6 font-avenirRoman text-iNeutral text-base">
                The policy document's infographics were based on insights from
                government representatives who contributed to its finalization.
                Key departments, including the Youth Office, Education and ICT,
                and Industrialization & Enterprise Development, supported data
                collection. Despite challenges like slow progress and political
                stand-offs, the Busia steering committee's efforts led to the
                assembly tabling a youth internship policy motion on August 6,
                2019.
              </figcaption>
            </figure>
          </footer>
        </section>
      </article>
    </>
  );
}

export default page