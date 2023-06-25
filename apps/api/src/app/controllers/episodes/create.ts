import { FastifyReply, FastifyRequest } from 'fastify';
import { createEpisodeService } from '../../services/episodes/create-episode.service';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { tvShowId, season } = request.params as {
    tvShowId: string;
    season: string;
  };
  console.log(request.body);

  const { name, overview, airDateAt, episodeNumber } = request.body as any;

  const seasonNumber = Number(season);

  await createEpisodeService(prisma, {
    tvShowId,
    seasonNumber,
    name,
    overview,
    episodeNumber,
    airDateAt,
  });

  reply.status(201).send({ message: 'Episode created success' });
}
