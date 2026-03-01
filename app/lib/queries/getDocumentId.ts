export const getProjectDocumentId = `
    query getProjectByIdQuery($slug: String!) {
        projects(filters: {slug: {eq: $slug}}) {
            documentId    
               }   
}
`;
