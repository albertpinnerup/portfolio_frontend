export const projectsQuery = `
{
  global {
    projects {
      about
      description
      featured
      slug
      title
      display_title
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
