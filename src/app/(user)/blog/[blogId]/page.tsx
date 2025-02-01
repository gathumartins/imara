import MiniBanner from '@/app/components/MiniBanner';
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OtherArticle from '@/app/components/OtherArticle';

async function page({ params }:any) {
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
  return (
    <>
      <MiniBanner data={mini} />
      <div className="bg-[#EEF3FC] py-12">
        <div className="container">
          <article className="bg-white rounded-lg md:flex gap-5 shadow-md p-6">
            <section className="md:w-2/3">
              <header>
                <Image
                  alt="blog image"
                  src="/images/bigblog.png"
                  width="751"
                  height="397"
                  className="w-full rounded-lg inline-block"
                />
                <h3 className="font-avenirNextBold text-iBlue text-3xl my-4">
                  Leadership Events 2024: Stay ahead of the curve
                </h3>
              </header>
              <div className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman [&_p]:mb-5">
                <p>{params.blogId}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli
                  mattis sit phasellus mollis sit aliquam sit nullam neque
                  ultrices
                </p>
              </div>
              <footer className="mt-10 flex justify-between gap-5 items-center border-t-1 border-iGray pt-5">
                <div className="flex flex-row gap-5 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h5 className="font-avenirRoman text-sm text-iNeutral">
                    Banks
                  </h5>
                </div>
                <h5 className="text-iNeutral font-avenirRoman text-base">
                  Oct 24, 2024
                </h5>
              </footer>
            </section>
            <aside className="bg-[#EEF3FC] rounded-lg p-6 md:w-1/3 md:mt-0 mt-5">
              <h4 className="font-avenirNextBold text-iBlue text-2xl mb-4">
                Other Articles
              </h4>
              <OtherArticle />
              <OtherArticle />
              <OtherArticle />
            </aside>
          </article>
        </div>
      </div>
    </>
  );
}

export default page