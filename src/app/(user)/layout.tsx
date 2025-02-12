import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const query = `
  {
  topMenu:menu(id: "dGVybToy", idType: ID) {
    name
    menuItems {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  programsMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0MQ=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  orgMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0Mg=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  quickMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0Mw=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }

  layout: layout(id: "cG9zdDo5OQ==") {
    headerFooter {
      logo {
        node {
          sourceUrl
        }
      }
      register {
        registerTitle
        registerDescription
        buttonLink {
          title
          target
          url
        }
        video
        registerImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }

  }`;
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const mainMenu = data.data.topMenu.menuItems.edges;
  const programsMenu = data.data.programsMenu.menuItems.edges;
  const orgMenu = data.data.orgMenu.menuItems.edges;
  const quickMenu = data.data.quickMenu.menuItems.edges;
  const lay = data.data.layout.headerFooter;
return (
  <main id="top">
    <Header menu={mainMenu} lay={lay}/>
    {children}
    <Footer progs={programsMenu} orgs={orgMenu} quicks={quickMenu} lay={lay}/>
  </main>
);
}