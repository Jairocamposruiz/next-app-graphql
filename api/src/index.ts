import { ApolloServer } from 'apollo-server';
import { join } from 'path';
import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';

import resolvers from './resolvers';

const orm = new PrismaClient();

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    orm
  }
});

server.listen().then(({ url }) => console.log(`Server is running on ${ url }`));
