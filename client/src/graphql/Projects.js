import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
 query Tasks {
  tasks {
    _id
    title
    projectId
    project {
      _id
      name
      description
    }  
  }
}
`;
