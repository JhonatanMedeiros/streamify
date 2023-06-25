import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { create } from '../controllers/movies/create';
import { fetch } from '../controllers/movies/fetch';
import { getById } from '../controllers/movies/getById';
import { deleteMovie } from '../controllers/movies/delete-movie';
import { update } from '../controllers/movies/update';

export const bodySchema = S.object()
  .prop('title', S.string().required())
  .prop('description', S.string().required())
  .valueOf();

export default async function (fastify: FastifyInstance) {
  fastify.get('/movies', fetch);
  fastify.get('/movies/:id', getById);
  fastify.patch('/movies/:id', { schema: { body: bodySchema } }, update);
  fastify.post('/movies', { schema: { body: bodySchema } }, create);
  fastify.delete('/movies/:id', deleteMovie);
}
