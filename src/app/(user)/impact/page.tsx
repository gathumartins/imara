import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Image from 'next/image'
import { FaUsers, FaUser } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImpactNav from '@/app/components/ImpactNav';

async function page() {
    const query = `
  {
page: page(id: "cG9zdDoxOA==") {
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
    impactfields {
      capacity {
        title
        description
        subgroups {
          list {
            title
            description
            shortname
          }
        }
        defaultValue
      }
      partnership {
        title
        description
        highlight {
          description
          media {
            node {
              altText
              mediaDetails {
                width
                height
              }
              mediaItemUrl
            }
          }
        }
      }
      policy {
        title
        description
        highlight {
          description
          media {
            node {
              altText
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
    const cats = data.data.page.impactfields.capacity.subgroups;
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
              <li>{data.data.page.impactfields.capacity.title}</li>
            </ol>
            <div
              className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman"
              dangerouslySetInnerHTML={{
                __html: data.data.page.impactfields.capacity.description,
              }}
            ></div>
          </header>
          <footer className="pt-6 container">
            <Tabs
              defaultValue={data.data.page.impactfields.capacity.defaultValue}
              className="w-full"
            >
              <div className="flex flex-col">
                <TabsList className="flex max-sm:min-h-[180px] flex-col sm:flex-row w-full sm:justify-evenly gap-1 sm:gap-5 border-b-1 border-b-iBlue rounded-none px-0">
                  {cats.map((cat: any, index: number) => (
                    <TabsTrigger
                      value={cat.list.shortname}
                      className="text-xl w-full sm:w-auto mb-0 font-avenirNextBold text-white max-sm:bg-iBlue data-[state=active]:bg-iSecondary sm:data-[state=active]:bg-transparent data-[state=active]:border-b-iBlue sm:border-b-transparent flex-grow sm:border-b-4 sm:rounded-none data-[state=active]:text-white sm:data-[state=active]:text-iBlue max-sm:py-2 sm:text-iNeutral flex items-center justify-center gap-3 " key={index}
                    >
                      <FaUser className="first:block last:hidden" />
                      <FaUsers className="first:hidden last:block" />
                      <span>{cat.list.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex-grow">
                  {cats.map((cat: any, index: number) => (
                    <TabsContent value={cat.list.shortname} key={index}>
                      <div
                        className="py-10 text-justify text-base text-iNeutral font-avenirRoman"
                        dangerouslySetInnerHTML={{
                          __html: cat.list.description,
                        }}
                      ></div>
                    </TabsContent>
                  ))}
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
              <li>{data.data.page.impactfields.partnership.title}</li>
            </ol>
            <div
              className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman"
              dangerouslySetInnerHTML={{
                __html: data.data.page.impactfields.partnership.description,
              }}
            ></div>
          </header>
          <footer className="container">
            <figure className="shadow-md rounded-lg md:flex bg-[#EEF3FC] items-center place-items-center gap-5">
              {data.data.page.impactfields.partnership.highlight.media !==
                null && (
                <Image
                  src={
                    data.data.page.impactfields.partnership.highlight.media.node
                      .mediaItemUrl
                  }
                  width={
                    data.data.page.impactfields.partnership.highlight.media.node
                      .mediaDetails.width
                  }
                  height={
                    data.data.page.impactfields.partnership.highlight.media.node
                      .mediaDetails.height
                  }
                  alt={`Imara Fellowship Africa ${data.data.page.impactfields.partnership.title} Image`}
                  className="inline-block md:max-w-[450px] max-md:rounded-t-lg md:rounded-l-lg h-full"
                />
              )}
              <figcaption
                className="p-6 flex-grow font-avenirRoman text-iNeutral text-base"
                dangerouslySetInnerHTML={{
                  __html:
                    data.data.page.impactfields.partnership.highlight
                      .description,
                }}
              ></figcaption>
            </figure>
          </footer>
        </section>

        <section className="bg-[#EEF3FC] py-12 md:py-20 offset" id="policy">
          <header className="container mb-8">
            <ol
              className="list-decimal list-inside font-avenirNextBold text-iBlue text-3xl mb-5"
              start={3}
            >
              <li>{data.data.page.impactfields.policy.title}</li>
            </ol>
            <div
              className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman"
              dangerouslySetInnerHTML={{
                __html: data.data.page.impactfields.policy.description,
              }}
            ></div>
          </header>
          <footer className="container">
            <figure className="shadow-md rounded-lg md:flex flex-row-reverse bg-white items-center place-items-center gap-5">
              {data.data.page.impactfields.policy.highlight.media !== null && (
                <Image
                  src={
                    data.data.page.impactfields.policy.highlight.media.node
                      .mediaItemUrl
                  }
                  width={
                    data.data.page.impactfields.policy.highlight.media.node
                      .mediaDetails.width
                  }
                  height={
                    data.data.page.impactfields.policy.highlight.media.node
                      .mediaDetails.height
                  }
                  alt={`Imara Fellowship Africa ${data.data.page.impactfields.policy.title} Image`}
                  className="inline-block md:max-w-[450px] max-md:rounded-t-lg md:rounded-r-lg h-full"
                />
              )}

              <figcaption
                className="flex-grow p-6 font-avenirRoman text-iNeutral text-base"
                dangerouslySetInnerHTML={{
                  __html:
                    data.data.page.impactfields.policy.highlight.description,
                }}
              ></figcaption>
            </figure>
          </footer>
        </section>
      </article>
    </div>
  );
}

export default page