import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// @ts-ignore
import express from 'express';
import { createServer } from 'http';
import { join } from 'path';
import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';

import resolvers from './resolvers';

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');
const orm = new PrismaClient();

!(async function () {
  const app = express();
  const httpServer = createServer(app);

  app.use('/images', express.static(join(__dirname, '../public')));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      orm, //Aquí inyectamos nuestro ORM para tenerlo en el context de nuestros resolvers
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 }, resolve);
  })

  console.log(`Server is running on http://localhost:4000${server.graphqlPath} `);
})();

