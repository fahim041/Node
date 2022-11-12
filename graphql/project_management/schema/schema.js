const {
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const { ProjectType, ProjectQuery, ProjectMutation } = require("./projectObject");
const { ClientType, ClientMutation, ClientQuery } = require("./clientObject");


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...ProjectQuery,
    ...ClientQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    ...ClientMutation,
    ...ProjectMutation
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
