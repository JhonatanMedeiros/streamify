import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchEpisodesService } from '../../services/episodes/fetch-episodes.service';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const {
    server: { prisma },
  } = request;

  const { tvShowId, season } = request.params as {
    tvShowId: string;
    season: string;
  };

  const seasonNumber = season ? Number(season) : null;

  const { episodes } = await fetchEpisodesService(
    prisma,
    tvShowId,
    seasonNumber
  );

  reply.status(200).send({ episodes });
}
