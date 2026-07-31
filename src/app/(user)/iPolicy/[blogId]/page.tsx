import MiniBanner from '@/app/components/MiniBanner';
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OtherArticle from '@/app/components/OtherArticle';

async function page({ params, posts }:any) {
const slug = params.blogId;
const query = `
query NewQuery($slug:ID!){
  post:post(id:$slug, idType: SLUG) {
    id
    slug
    title
    content
    date
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
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
  }
  posts:posts(first:6) {
    edges {
      node {
        id
        title
        content
        date
        slug
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
      }
    }
  }
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
    const mini = data.data.page.pageBanners;
      const date = new Date(data.data.post.date);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(date);
      const otherPosts = data.data.posts.edges.filter((post:any)=>post.node.id !== data.data.post.id)
  return (
    <>
      <MiniBanner data={mini} />
      <div className="bg-[#EEF3FC] py-12">
        <div className="container">
          <article className="bg-white rounded-lg md:flex gap-5 shadow-md p-6">
            <section className="md:w-2/3">
              <header>
                {data.data.post.featuredImage !== null && (
                  <Image
                    alt={`Imara Fellowship Africa ${data.data.post.title} image`}
                    src={data.data.post.featuredImage.node.sourceUrl}
                    width={data.data.post.featuredImage.node.mediaDetails.width}
                    height={
                      data.data.post.featuredImage.node.mediaDetails.height
                    }
                    className="w-full rounded-lg inline-block"
                  />
                )}

                <h3 className="font-avenirNextBold text-iBlue text-3xl my-4">
                  {data.data.post.title}
                </h3>
              </header>
              <div
                className="[&_p]:text-base [&_p]:text-iNeutral [&_p]:font-avenirRoman [&_p]:mb-5"
                dangerouslySetInnerHTML={{ __html: data.data.post.content }}
              ></div>
              <footer className="mt-10 flex justify-between gap-5 items-center border-t-1 border-iGray pt-5">
                <div className="flex flex-row gap-5 items-center">
                  <Avatar>
                    <AvatarImage src={data.data.post.author.node.avatar.url} />
                    <AvatarFallback>
                      {data.data.post.author.node.name}
                    </AvatarFallback>
                  </Avatar>
                  <h5 className="font-avenirRoman text-sm text-iNeutral">
                    {data.data.post.author.node.name}
                  </h5>
                </div>
                <h5 className="text-iNeutral font-avenirRoman text-base">
                  {formattedDate}
                </h5>
              </footer>
            </section>
            <aside className="bg-[#EEF3FC] rounded-lg p-6 md:w-1/3 md:mt-0 mt-5">
              <h4 className="font-avenirNextBold text-iBlue text-2xl mb-4">
                Other Articles
              </h4>
              {otherPosts.map((post: any) => (
                <OtherArticle key={post.node.id} post={post}/>
              ))}
            </aside>
          </article>
        </div>
      </div>
    </>
  );
}

export default page