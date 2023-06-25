import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { create } from '../controllers/movies/create';
import { fetch } from '../controllers/movies/fetch';
import { getById } from '../controllers/movies/getById';
import { deleteMovie } from '../controllers/movies/delete-movie';
import { update } from '../controllers/movies/update';

export const bodySchema = S.object()
  .prop('title', S.string().required())
  .prop('overview', S.string().required())
  .prop('releaseDateAt', S.string())
  .prop('adult', S.boolean())
  .valueOf();

async function movieRouter(fastify: FastifyInstance) {
  fastify.get('/', fetch);
  fastify.get('/:id', getById);
  fastify.post('/', { schema: { body: bodySchema } }, create);
  fastify.patch('/:id', { schema: { body: bodySchema } }, update);
  fastify.delete('/:id', deleteMovie);
}

export default async function (fastify: FastifyInstance) {
  fastify.register(movieRouter, { prefix: '/movies' });
}
