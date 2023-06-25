import { FastifyInstance } from 'fastify';

import { create } from '../controllers/upload/create';

export default async function (fastify: FastifyInstance) {
  fastify.post('/upload/file', create);
}
