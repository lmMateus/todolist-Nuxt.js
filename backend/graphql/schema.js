const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    _id: ID!
    task: String!
    priority: String!
    status: Boolean!
  }

  type Query {
    tasks: [Task!]!
    incompleteTasks: [Task!]!
  }

  type Mutation {
    addTask(
      task: String!
      priority: String!
      status: Boolean!
      ): Task
      
    updateTask(
      task: String!
      priority: String!
      status: Boolean!
      ): Task
    deleteTask(id: ID!): Task
  }
`;

module.exports = typeDefs;