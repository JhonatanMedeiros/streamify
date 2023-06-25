import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import multipart from '@fastify/multipart';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(multipart);
});
