import MiniBanner from '@/app/components/MiniBanner'
import React from 'react'
import Image from 'next/image'
import OtherProgram from '@/app/components/OtherProgram';

async function page({params}:any) {
  const slug = params.programId;
  const query = `
   query NewQuery($slug:ID!){
    program:program(id: $slug, idType: SLUG) {
    id
    title
    slug
    content
    featuredImage {
      node {
        altText
        mediaDetails {
          width
          height
        }
        sourceUrl
      }
    }
    programfields {
      overview
    }
    pageBanners {
      pageTitle
      bannerImage {
        node {
          mediaItemUrl
        }
      }
    }
  }

}`;

  const variables = {
    slug,
  };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  const mini = data.data.program.pageBanners;

  // console.log(data.data.program.featuredImage.node);
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-white">
        <section className="py-12">
          <header className="container myPro">
            <h3>{data.data.program.title}</h3>
            <div
              className="myPro"
              dangerouslySetInnerHTML={{ __html: data.data.program.content }}
            ></div>
          </header>
          <div className="container pt-8 md:flex gap-5 items-center">
            <div className="myPro md:w-1/2">
              <h3>Program Overview</h3>
              <div
                className="myPro"
                dangerouslySetInnerHTML={{
                  __html: data.data.program.programfields.overview,
                }}
              ></div>
            </div>
            {data.data.program.featuredImage !== null && (
              <figure className="md:w-1/2">
                <Image
                  src={data.data.program.featuredImage.node.sourceUrl}
                  width={
                    data.data.program.featuredImage.node.mediaDetails.width
                  }
                  height={
                    data.data.program.featuredImage.node.mediaDetails.width
                  }
                  alt={`Imara Fellowship Africa Program ${data.data.program.featuredImage.node.altText}`}
                  className="w-full rounded-lg"
                />
              </figure>
            )}
          </div>
        </section>
        <section
          className="py-12 bg-[#EEF3FC] bg-cover bg-no-repeat bg-right-top"
          style={{ backgroundImage: "url(/images/whitebg.png)" }}
        >
          <footer className="container myPro">
            <h3>Other Programs</h3>
            <div className="flex flex-col justify-around md:flex-row gap-5">
              <OtherProgram />
              <OtherProgram />
              <OtherProgram />
            </div>
          </footer>
        </section>
      </article>
    </>
  );
}

export default page