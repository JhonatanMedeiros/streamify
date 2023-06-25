import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/movie',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'I am Movie Router' };
    }
  );
}
