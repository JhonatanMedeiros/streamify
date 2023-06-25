import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { fetch } from '../controllers/season/fetch';
import { create } from '../controllers/season/create';

export const bodySchema = S.object()
  .prop('title', S.string().required())
  .prop('description', S.string().required())
  .prop('showId', S.string().required())
  .valueOf();

export default async function (fastify: FastifyInstance) {
  fastify.get('/season', fetch);
  // fastify.get('/shows/:id', getById);
  // fastify.patch('/shows/:id', { schema: { body: bodySchema } }, update);
  fastify.post('/season', { schema: { body: bodySchema } }, create);
  // fastify.delete('/shows/:id', deleteShow);
}
