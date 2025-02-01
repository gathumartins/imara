import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Image from 'next/image'

async function page({params}:any) {
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
  // console.log(params)
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-white">
        <section className="py-12">
          <header className="container myPro">
            <h3>Residential Academy</h3>
            <p>
              The Residential Academy is the immersive starting point of the
              Imara Fellowship journey, designed to set the stage for a year of
              transformative learning and growth. Over several intensive days,
              selected participants from diverse backgrounds and regions come
              together to form a cohesive cohort united by a shared vision for
              effective and ethical leadership in public policy.
            </p>
          </header>
          <div className="container pt-8 md:flex gap-5 items-center">
            <div className="myPro md:w-1/2">
              <h3>Program Overview</h3>
              <p>
                Held at thoughtfully selected venues, either within Nairobi or
                one of our focus counties, the Residential Academy provides a
                vibrant environment where fellows can fully engage in workshops,
                discussions, and team-building exercises. These sessions are
                structured around core themes that align with the program's
                values and goals, emphasizing leadership principles, policy
                frameworks, and the unique socio-political landscape of Kenya.
                The Academy not only introduces fellows to the expectations and
                objectives of the Imara Fellowship but also immerses them in the
                foundations of public policy and governance that are essential
                for impactful leadership.
              </p>
            </div>
            <figure className="md:w-1/2">
              <Image
                src="/images/pro.png"
                width={564}
                height={371}
                alt="Program Overview"
                className="w-full rounded-lg"
              />
            </figure>
          </div>
        </section>
        <section
          className="py-12 bg-[#EEF3FC] bg-cover bg-no-repeat bg-right-top"
          style={{ backgroundImage: "url(/images/whitebg.png)" }}
        >
          <footer className="container myPro">
            <h3>Other Programs</h3>
            <div className="flex flex-col md:flex-row gap-5"></div>
          </footer>
        </section>
      </article>
    </>
  );
}

export default page