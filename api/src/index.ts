import { ApolloServer } from 'apollo-server';

//1 Query
const typeDefs = `
  type Query {
    info: String
  }
`;

//2 Resolvers
const resolvers = {
  Query: {
    info: () => `This is the API of Jairo GraphQL`,
  },
};

//3 Iniciar servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${ url }`);
});
