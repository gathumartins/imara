import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Image from 'next/image'
import { FaUsers, FaUser } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImpactNav from '@/app/components/ImpactNav';

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
    <div className="relative">
      <MiniBanner data={mini} />
      <section className="bg-white py-6 sticky top-[70px] left-0 w-full z-10 border-t-1 border-b-1 border-b-[#EEF3FC]">
        <ImpactNav />
      </section>
      <article className="relative h-full overflow-y-auto">
        <section id="capacity" className="offset"></section>
        <section className="bg-[#EEF3FC] py-12 md:py-20">
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
          <footer className="pt-6 container">
            <Tabs defaultValue="individual" className="w-full">
              <div className="flex flex-col">
                <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-iBlue rounded-none px-0">
                  <TabsTrigger
                    value="individual"
                    className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral flex items-center justify-center gap-3 "
                  >
                    <FaUser className="first:block last:hidden" />
                    <FaUsers className="first:hidden last:block" />
                    <span> Individual Impact</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="community"
                    className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral flex items-center justify-center gap-3"
                  >
                    <FaUser className="first:block last:hidden" />
                    <FaUsers className="first:hidden last:block" />
                    <span>Community & County</span>
                  </TabsTrigger>
                </TabsList>
                <div className="flex-grow">
                  <TabsContent value="individual">
                    <div className="py-10 text-justify text-base text-iNeutral font-avenirRoman">
                      <p>
                        Our fellows have advanced in their careers and studies
                        in policy and governance. Notable examples include Ms.
                        Gladys Ndanu, promoted for her role in Universal Health
                        Care in Muranga County, influenced by a youth baraza
                        panel discussion. Mr. Shadrack Osero earned a DAAD
                        Helmut Schmidt Program scholarship for a Master’s in
                        Public Management at the University of Potsdam, based on
                        work addressing TVET policy gaps in Kericho.
                        Additionally, Mr. Mathew Ndolo and Ms. Ivy Wandia
                        Gathoni pursued policy studies at UC Berkeley and the
                        Geneva Graduate Institute.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="community">
                    <div className="py-10 text-justify text-base text-iNeutral font-avenirRoman">
                      <p>
                        Our fellows have advanced in their careers and studies
                        in policy and governance. Notable examples include Ms.
                        Gladys Ndanu, promoted for her role in Universal Health
                        Care in Muranga County, influenced by a youth baraza
                        panel discussion. Mr. Shadrack Osero earned a DAAD
                        Helmut Schmidt Program scholarship for a Master’s in
                        Public Management at the University of Potsdam, based on
                        work addressing TVET policy gaps in Kericho.
                        Additionally, Mr. Mathew Ndolo and Ms. Ivy Wandia
                        Gathoni pursued policy studies at UC Berkeley and the
                        Geneva Graduate Institute.
                      </p>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </footer>
        </section>

        <section className="bg-white py-12 md:py-20 offset" id="partnership">
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

        <section className="bg-[#EEF3FC] py-12 md:py-20 offset" id="policy">
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
    </div>
  );
}

export default page