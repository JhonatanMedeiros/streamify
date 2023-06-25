import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { fetch } from '../controllers/shows/fetch';
import { getById } from '../controllers/shows/getById';
import { update } from '../controllers/shows/update';
import { create } from '../controllers/shows/create';
import { deleteShow } from '../controllers/shows/delete-show';

export const bodySchema = S.object()
  .prop('title', S.string().required())
  .prop('description', S.string().required())
  .valueOf();

export default async function (fastify: FastifyInstance) {
  fastify.get('/shows', fetch);
  fastify.get('/shows/:id', getById);
  fastify.patch('/shows/:id', { schema: { body: bodySchema } }, update);
  fastify.post('/shows', { schema: { body: bodySchema } }, create);
  fastify.delete('/shows/:id', deleteShow);
}
