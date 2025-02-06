import FeaturedPost from '@/app/components/FeaturedPost';
import MiniBanner from '@/app/components/MiniBanner'
import MyPagination from '@/app/components/MyPagination';
import React from 'react'

async function page() {
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
  posts:posts {
    edges {
      node {
        id
        title
        content
        date
        slug
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
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
    const itemsPerPage = 6;
    const posts = data.data.posts.edges;
    const comp = "blog";
    const categoryId = "dGVybToxMw==";
    const post = posts
      .filter((post: any) =>
        post.node.categories.edges.some(
          (category: any) => category.node.id === categoryId
        )
      )
      .sort(
        (a: any, b: any) =>
          new Date(b.node.date).getTime() - new Date(a.node.date).getTime()
      )[0];
   const otherPosts = posts.filter((otherPost:any)=>otherPost.node.id !== post.node.id)
  return (
    <>
      <MiniBanner data={mini} />
      <article className="bg-[#EEF3FC] py-12">
        <section className="container mb-12">
          <header className="mb-8 pb-3 border-b-1">
            <h3 className="font-avenirNextBold text-iBlue text-3xl">
              Featured Article
            </h3>
          </header>
          <FeaturedPost post={post} />
        </section>
        <section className="container">
          <header className="mb-8 pb-3 border-b-1 border-iGray">
            <h3 className="font-avenirNextBold text-iBlue text-3xl">
              Latest Articles
            </h3>
          </header>
        </section>
        <MyPagination items={otherPosts} ipp={itemsPerPage} comp={comp}/>
      </article>
    </>
  );
}

export default page