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
      documentId
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
