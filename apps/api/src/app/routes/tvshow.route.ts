import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { fetch } from '../controllers/tvshows/fetch';
import { getById } from '../controllers/tvshows/getById';
import { update } from '../controllers/tvshows/update';
import { create } from '../controllers/tvshows/create';
import { deleteTvShow } from '../controllers/tvshows/delete-tv-show';

export const bodySchema = S.object()
  .prop('name', S.string().required())
  .prop('overview', S.string().required())
  .prop('adult', S.boolean().required())
  .prop('firstAirDateAt', S.string())
  .prop('lastAirDateAt', S.string())
  .valueOf();

export default async function (fastify: FastifyInstance) {
  fastify.get('/tv', fetch);
  fastify.get('/tv/:id', getById);
  fastify.post('/tv', { schema: { body: bodySchema } }, create);
  fastify.patch('/tv/:id', { schema: { body: bodySchema } }, update);
  fastify.delete('/tv/:id', deleteTvShow);
}
