import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updateAt: String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String
    createdAt: String
    updateAt: String
    projectId: String
    project: Project
  }

  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
    tasks: [Task]
    task(_id: ID!): Task
  }

  type Mutation {
    createProject(name: String, description: String): Project
    createTask(title: String, projectId: ID!): Task
    deleteTask(taskId: ID!): Task
    updateTask(taskId: ID!, title: String): Task
  }
`;
