import HomeAbout from '@/app/components/HomeAbout'
import HomeHero from '@/app/components/HomeHero'
import Partners from '@/app/components/Partners'
import Program from '@/app/components/Program'
import Stats from '@/app/components/Stats'
import Testimonials from '@/app/components/Testimonials'
import React from 'react'

async function page() {
const query = `
{
page:page(id: "cG9zdDoxMA==") {
    id
    title
    uri
    slug
    link
    content
    homehero {
      hero {
        cta
        heroimage {
          node {
            sourceUrl
          }
        }
        herotitle
      }
      homeabout {
        excerpt
        homeaboutimage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        readmore {
          linklabel
          link
        }
        title
      }
      homestats {
        title
        description
        stats {
          figures
          title
          description
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

  const heroData = data.data.page.homehero.hero
  const homeStats = data.data.page.homehero.homestats
  const homeAbout = data.data.page.homehero.homeabout
  const homePrograms = data.data.programs.edges;
  //  console.log(data.data.tests.edges);
  return (
    <>
      <HomeHero hero={heroData} />
      <Stats stats={homeStats} />
      <HomeAbout about={homeAbout} />
      <Program programs={homePrograms} />
      <Partners partners={data.data.partners.edges} />
      <Testimonials tests={data.data.tests.edges} />
    </>
  );
}

export default page