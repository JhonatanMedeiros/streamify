import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchSeasonService } from '../../services/seasons/fetch-season.service';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { tvShowId } = request.params as { tvShowId: string };

  const { seasons } = await fetchSeasonService(prisma, tvShowId);

  reply.status(200).send({ seasons });
}
