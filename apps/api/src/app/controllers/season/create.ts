import { FastifyReply, FastifyRequest } from 'fastify';
import { createSeasonService } from '../../services/create-season.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { name, overview, seasonNumber, airDateAt, tvShowId } =
    request.body as any;

  await createSeasonService(prisma, {
    name,
    overview,
    seasonNumber,
    airDateAt,
    tvShowId,
  });

  reply.status(201).send({ message: 'Season created success' });
}
