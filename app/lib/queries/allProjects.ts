export const allProjectsQuery = `
query {
  projects(filters: {
    or: [
      { featured: { eq: true } }
      { readable: { eq: true } }
    ]
  }) {
    about
    description
    display_title
    featured
    image {
      url
      width
      height
    }
    readable
    slug
    title
    technologies {
      title
    }
  }
}
`;
