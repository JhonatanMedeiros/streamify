import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import rateLimit from '@fastify/rate-limit';

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(rateLimit);
});
