import MiniBanner from '@/app/components/MiniBanner'
import Partners from '@/app/components/Partners';
import PartnerSlider from '@/app/components/PartnerSlider';
import Program from '@/app/components/Program';
import ProgramTop from '@/app/components/ProgramTop';
import Testimonials from '@/app/components/Testimonials';
import React from 'react'

async function page() {
    const query = `
  {
  page:page(id: "cG9zdDoxNA==") {
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
   partners:partners {
    edges {
      node {
        title
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
  tests:testimonials {
    edges {
      node {
        title
        content
        testimonialFields {
          cohort
        }
      }
    }
  }
  programs:programs {
    edges {
      node {
        title
        slug
        content
        excerpt
        uri
        programfields {
          icon {
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

}
  `;

    const result = await fetch(
      `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
      { headers: { "Content-Type": "application/json" } }
    );
    const data = await result.json();
    const mini = data.data.page.pageBanners;
    const homePrograms = data.data.programs.edges;
  return (
    <>
      <MiniBanner data={mini} />
      <ProgramTop />
      <Program programs={homePrograms} />
      <Partners partners={data.data.partners.edges} />
      <Testimonials tests={data.data.tests.edges} />
    </>
  );
}

export default page