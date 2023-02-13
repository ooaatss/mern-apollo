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

export const CREATE_PROJECT = gql`
  mutation ($name: String, $description: String) {
    createProject(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const GET_PROJECT = gql`
  query ($id: ID!) {
    project(_id: $id) {
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
