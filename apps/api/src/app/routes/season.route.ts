import { FastifyInstance } from 'fastify';
import S from 'fluent-json-schema';

import { fetch } from '../controllers/season/fetch';
import { create } from '../controllers/season/create';
import { getByNumber } from '../controllers/season/get-by-number';
import { deleteSeason } from '../controllers/season/delete-season';

export const bodySchema = S.object()
  .prop('name', S.string().required())
  .prop('overview', S.string().required())
  .prop('seasonNumber', S.number().required())
  .prop('airDateAt', S.string())
  .valueOf();

async function tvShowRouter(fastify: FastifyInstance) {
  fastify.get('/seasons', fetch);
  fastify.get('/seasons/:number', getByNumber);
  fastify.post('/seasons', { schema: { body: bodySchema } }, create);
  fastify.delete('/:id', deleteSeason);
}

export default async function (fastify: FastifyInstance) {
  fastify.register(tvShowRouter, { prefix: '/:tvShowId' });
}
