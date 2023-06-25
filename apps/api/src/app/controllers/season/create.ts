import { FastifyReply, FastifyRequest } from 'fastify';
import { createSeasonService } from '../../services/seasons/create-season.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { tvShowId } = request.params as { tvShowId: string };
  const { name, overview, seasonNumber, airDateAt } = request.body as any;

  await createSeasonService(prisma, {
    tvShowId,
    name,
    overview,
    seasonNumber,
    airDateAt,
  });

  reply.status(201).send({ message: 'Season created success' });
}
