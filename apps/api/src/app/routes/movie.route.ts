import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/movies', async function () {
    return { message: 'I am Movie Router' };
  });
}
