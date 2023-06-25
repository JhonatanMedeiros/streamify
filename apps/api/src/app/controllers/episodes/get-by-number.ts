import { FastifyReply, FastifyRequest } from 'fastify';
import { getEpisodeByNumberService } from '../../services/episodes/get-episode-by-number.service';

export async function getByNumber(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    server: { prisma },
  } = request;

  const {
    tvShowId,
    season,
    episode: episodeString,
  } = request.params as {
    tvShowId: string;
    season: string;
    episode: string;
  };

  const seasonNumber = season ? Number(season) : null;
  const episodeNumber = episodeString ? Number(episodeString) : null;

  try {
    const { episode } = await getEpisodeByNumberService(
      prisma,
      tvShowId,
      seasonNumber,
      episodeNumber
    );

    reply.status(200).send({ episode });
  } catch {
    reply.unauthorized();
  }
}
