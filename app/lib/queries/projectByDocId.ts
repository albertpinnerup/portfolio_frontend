export const getProjectByDocId = `
query Project($documentId: ID!) {
  project(documentId: $documentId) {
    display_title
    description
    about
    documentId
    featured
    readable
    slug
    title
    technologies {
      title
    }
    image {
      url
      width
      height
    }
  }
}
`;
