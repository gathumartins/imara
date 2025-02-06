import AboutCore from '@/app/components/AboutCore';
import AboutTeam from '@/app/components/AboutTeam';
import AboutUs from '@/app/components/AboutUs'
import MiniBanner from '@/app/components/MiniBanner'
import Program from '@/app/components/Program'
import React from 'react'

async function page() {
    const query = `
  {
  page: page(id: "cG9zdDoxMg==") {
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
    content
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        sourceUrl
      }
    }
    aboutfields {
      coreStatements {
        defaultvalue
        statements {
          title
          content
          shortname
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
  teams:teams {
    edges {
      node {
        title
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sourceUrl
          }
        }
        teamfields {
          designation
        }
      }
    }
  }
  titles:layout(id: "cG9zdDo5OQ==", idType: ID) {
    programstitle {
      header {
        title
        subtitle
      }
    }
    testimonialtitles {
      header {
        title
        subtitle
      }
    }
  }
}
  `;

  const result = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {headers: {'Content-Type': 'application/json'}}
  );
  const data = await result.json();
  const mini = data.data.page.pageBanners;
  const homePrograms = data.data.programs.edges;

  return (
    <>
      <MiniBanner data={mini} />
      <AboutUs
        content={data.data.page.content}
        img={data.data.page.featuredImage}
      />
      <AboutCore core={data.data.page.aboutfields.coreStatements} />
      <Program
        programs={homePrograms}
        titles={data.data.titles.programstitle}
      />
      <AboutTeam teams={data.data.teams.edges} />
    </>
  );
}

export default page