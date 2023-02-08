import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      _id
      name
      description
      tasks {
        _id
        title
      }
    }
  }
`;
