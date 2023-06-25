import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { fetch } from '../controllers/episodes/fetch';
import { getByNumber } from '../controllers/episodes/get-by-number';
import { create } from '../controllers/episodes/create';

export const bodySchema = S.object()
  .prop('name', S.string().required())
  .prop('overview', S.string().required())
  .prop('episodeNumber', S.number().required())
  .prop('airDateAt', S.string())
  .valueOf();

async function episodeRouter(fastify: FastifyInstance) {
  fastify.get('/episodes', fetch);
  fastify.get('/episodes/:episode', getByNumber);
  fastify.post('/episodes', { schema: bodySchema }, create);
}

export default async function (fastify: FastifyInstance) {
  fastify.register(episodeRouter, { prefix: '/:tvShowId/seasons/:season' });
}
