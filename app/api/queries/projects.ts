export const projectsQuery = `
{
  global {
    projects {
      about
      description
      featured
      slug
      title
      technologies {
        title
      }
      image {
        width
        height
        url
      }
    }
  }
}
`;
