export const projectsQuery = `{
  global {
    projects {
      about
      description
      slug
      title
      featured
      technologies {
        title
      }
      image {
        height
        width
        url
        alternativeText
      }
    }
  }
}`;
