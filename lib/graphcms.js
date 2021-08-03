async function fetchAPI(query) {
  const res = await fetch(process.env.PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getIndexProps() {
  const data = await fetchAPI(`
    { 
      seo(where: {page: "index"}) {
        title
        description
      }
      items {
        id
        name
        image {
          id
          handle
        }
        variant {
          name
          category {
            name
          }
        }
        params {
          id
          size
          price
        }
      }
      slides {
        id
        image {
          handle
        }
        title
      }
      categories {
        id
        name
        variants {
          id
          name
        }
      }
    }
    `);
  return data;
}

export async function getPageSEO(page) {
  const data = await fetchAPI(`
    { 
      seo(where: {page: "${page}"}) {
        title
        description
      }
    }
    `);
  return data;
}
