import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import prismaPlugin from '@sabinthedev/fastify-prisma';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(prismaPlugin, {
    log: ['query'],
    datasources: {
      db: {
        url: fastify.config.DATABASE_URL,
      },
    },
  });
});
